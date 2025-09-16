import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Spam keywords to filter
const spamKeywords = [
  'bitcoin', 'crypto', 'loan', 'casino', 'viagra', 'pills', 'weight loss',
  'make money', 'get rich', 'free money', 'click here', 'limited time',
  'congratulations', 'winner', 'prize', 'urgent', 'act now'
];

// Suspicious email domains
const suspiciousDomains = [
  '10minutemail.com', 'tempmail.org', 'guerrillamail.com', 'mailinator.com',
  'throwaway.email', 'temp-mail.org'
];

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  
  if (!entry || now > entry.resetTime) {
    // Reset or create new entry (3 submissions per hour)
    rateLimitStore.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return false;
  }
  
  if (entry.count >= 3) {
    return true;
  }
  
  entry.count++;
  return false;
}

function containsSpam(text: string): boolean {
  const lowerText = text.toLowerCase();
  return spamKeywords.some(keyword => lowerText.includes(keyword));
}

function isSuspiciousEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return suspiciousDomains.includes(domain || '');
}

async function sendSlackNotification(leadData: {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL not configured");
    return;
  }

  const { name, email, company, teamSize, message } = leadData;
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Belgrade",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slackMessage: any = {
    text: "<!here> 🎯 New Lead Submission!",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🎯 New Lead Submission!"
        }
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${name}`
          },
          {
            type: "mrkdwn",
            text: `*Email:*\n${email}`
          }
        ]
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Company:*\n${company || "Not provided"}`
          },
          {
            type: "mrkdwn",
            text: `*Team Size:*\n${teamSize || "Not provided"}`
          }
        ]
      }
    ]
  };

  // Add message section if provided
  if (message) {
    slackMessage.blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Message:*\n${message}`
      }
    });
  }

  // Add timestamp and actions
  slackMessage.blocks.push(
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `📅 ${timestamp}`
        }
      ]
    }
  );

    // {
    //   type: "actions",
    //   elements: [
    //     {
    //       type: "button",
    //       text: {
    //         type: "plain_text",
    //         text: "📧 Send Email"
    //       },
    //       style: "primary",
    //       url: `mailto:${email}?subject=Re: Team Development Program Inquiry`
    //     },
    //     {
    //       type: "button",
    //       text: {
    //         type: "plain_text",
    //         text: "📅 Schedule Call"
    //       },
    //       url: "https://calendly.com/your-calendar" // Replace with your booking link
    //     }
    //   ]
    // }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      console.error("Failed to send Slack notification:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending Slack notification:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, teamSize, message, honeypot, timestamp } = body;

    // Check rate limiting
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // Honeypot check (bot trap)
    if (honeypot && honeypot.trim() !== "") {
      console.log(`Honeypot triggered from IP: ${clientIP}`);
      // Return success to not reveal the honeypot
      return NextResponse.json(
        { message: "Lead submitted successfully" },
        { status: 200 }
      );
    }

    // Time-based validation (prevent too-quick submissions)
    if (timestamp) {
      const submissionTime = Date.now();
      const formLoadTime = parseInt(timestamp);
      const timeDiff = submissionTime - formLoadTime;
      
      if (timeDiff < 3000) { // Less than 3 seconds
        console.log(`Form submitted too quickly from IP: ${clientIP}, time: ${timeDiff}ms`);
        return NextResponse.json(
          { error: "Please take a moment to fill out the form properly." },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    const missingFields = [];
    if (!name || name.trim() === "") missingFields.push("name");
    if (!email || email.trim() === "") missingFields.push("email");
    if (!company || company.trim() === "") missingFields.push("company");
    if (!teamSize || teamSize.trim() === "") missingFields.push("teamSize");
    if (!message || message.trim() === "") missingFields.push("message");

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: "All fields are required", 
          missingFields,
          message: `Please fill in the following fields: ${missingFields.join(", ")}`
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check for suspicious email domains
    if (isSuspiciousEmail(email)) {
      console.log(`Suspicious email domain from IP: ${clientIP}, email: ${email}`);
      return NextResponse.json(
        { error: "Please use a valid business email address." },
        { status: 400 }
      );
    }

    // Content spam filtering
    const allContent = `${name} ${company} ${message}`.toLowerCase();
    if (containsSpam(allContent)) {
      console.log(`Spam content detected from IP: ${clientIP}`);
      return NextResponse.json(
        { error: "Your message contains inappropriate content. Please revise and try again." },
        { status: 400 }
      );
    }

    // Send Slack notification
    await sendSlackNotification({
      name,
      email,
      company,
      teamSize,
      message,
    });

    // Log the data for backup
    console.log("New lead submission:", {
      name,
      email,
      company,
      teamSize,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Lead submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
