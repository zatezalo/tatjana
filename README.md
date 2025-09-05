# Team transformation Program Landing Site

A complete Next.js 14 landing site for the Team transformation Program, built with TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui components (Button, Card, Badge, Input, Textarea)
- **Icons**: Lucide React icons
- **Responsive Design**: Mobile-first, accessible design
- **SEO Optimized**: Complete metadata and JSON-LD structured data
- **Lead Generation**: Contact form with API endpoint
- **Booking System**: Dedicated booking page with iframe placeholder

## Project Structure

```
src/
├── app/
│   ├── api/lead/route.ts          # Lead form API endpoint
│   ├── book/page.tsx              # Booking page
│   ├── globals.css                # Global styles with Tailwind
│   ├── layout.tsx                 # Root layout with SEO metadata
│   └── page.tsx                   # Homepage with all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Site header with navigation
│   │   └── Footer.tsx             # Site footer
│   ├── sections/
│   │   ├── Hero.tsx               # Hero section
│   │   ├── Pain.tsx               # Pain points section
│   │   ├── DreamOutcome.tsx       # Dream outcomes section
│   │   ├── ProgramTimeline.tsx    # 12-month timeline
│   │   ├── CaseStudies.tsx        # Success stories
│   │   ├── ValueStack.tsx         # Pricing and value
│   │   ├── Guarantee.tsx          # Money-back guarantee
│   │   └── FinalCTA.tsx           # Lead form section
│   └── ui/                        # shadcn/ui components
└── lib/
    ├── offer.ts                   # Content configuration
    └── utils.ts                   # Utility functions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Run the development server**:
   ```bash
   yarn dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Content
All content is centralized in `src/lib/offer.ts`. Update this file to modify:
- Headlines and copy
- Pricing information
- Case studies
- Program timeline
- Value stack items

### Branding
- **Primary Color**: `#7d55c7` (configured in `tailwind.config.ts` and `globals.css`)
- **Logo**: Update the logo in `Header.tsx` and `Footer.tsx`
- **Contact Info**: Update contact details in `Footer.tsx`

### Lead Form
The lead form posts to `/api/lead` endpoint. Currently logs submissions to console. To integrate with your CRM:
1. Update `src/app/api/lead/route.ts`
2. Add your database/CRM integration
3. Configure email notifications

### Booking System
The booking page (`/book`) includes a placeholder for your scheduling widget. Replace the placeholder with:
- Calendly embed
- Google Calendar booking
- Acuity Scheduling
- Or any other scheduling solution

## SEO Features

- Complete metadata configuration
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data for services
- Semantic HTML structure
- Mobile-optimized design

## Deployment

This project is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## License

Private project - All rights reserved.