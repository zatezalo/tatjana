import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import DreamOutcome from "@/components/sections/DreamOutcome";
import ProgramTimeline from "@/components/sections/ProgramTimeline";
import CaseStudies from "@/components/sections/CaseStudies";
import ValueStack from "@/components/sections/ValueStack";
import Guarantee from "@/components/sections/Guarantee";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Team Transformation Program",
    "description": "In 12 months, transform your team into a motivated, collaborative, and profitable powerhouse.",
    "provider": {
      "@type": "Organization",
      "name": "Team Transform",
      "url": "https://teamtransformation.com"
    },
    "offers": {
      "@type": "Offer",
      "name": "Team Transformation Program",
      "description": "Complete 12-month team transformation program with coaching, workshops, and assessments",
      "price": "10000",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "url": "https://teamtransformation.com/book"
    },
    "serviceType": "Team Coaching and Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Team Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Coaching Sessions",
            "description": "38 one-on-one coaching sessions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Team Coaching Sessions",
            "description": "11 group coaching sessions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workshops",
            "description": "7 intensive team workshops"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Team Assessments",
            "description": "SDI, Lencioni, and Inspire assessments"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Pain />
      <DreamOutcome />
      <ProgramTimeline />
      <CaseStudies />
      <ValueStack />
      <Guarantee />
      <FinalCTA />
    </>
  );
}
