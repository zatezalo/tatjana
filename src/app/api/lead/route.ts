import { NextRequest, NextResponse } from "next/server";

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

  const slackMessage = {
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
      text: {
        type: "mrkdwn",
        text: `📅  ${timestamp}`
      }
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
    const { name, email, company, teamSize, message } = body;

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
