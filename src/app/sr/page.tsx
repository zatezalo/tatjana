import Hero from "@/components/sections/sr/Hero";
import Pain from "@/components/sections/sr/Pain";
import DreamOutcome from "@/components/sections/sr/DreamOutcome";
import ProgramTimeline from "@/components/sections/sr/ProgramTimeline";
import About from "@/components/sections/sr/About";
import ValueStack from "@/components/sections/sr/ValueStack";
import FinalCTA from "@/components/sections/sr/FinalCTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Program transformacije tima",
    "description": "Za 12 meseci, transformišite svoj tim u motivisanu, saradljivu i profitabilnu snagu.",
    "provider": {
      "@type": "Organization",
      "name": "Team Transform",
      "url": "https://teamtransformation.com"
    },
    "offers": {
      "@type": "Offer",
      "name": "Program transformacije tima",
      "description": "Kompletni 12-mesečni program transformacije tima sa kočingom, radionicama i procenama",
      "price": 10000,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "url": "https://teamtransformation.com/sr/book"
    },
    "serviceType": "Timski kočing i razvoj",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usluge transformacije tima",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individualne kočing sesije",
            "description": "38 individualnih kočing sesija"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Timski kočing sesije",
            "description": "11 grupnih kočing sesija"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Radionice",
            "description": "7 intenzivnih timskih radionica"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Procene tima",
            "description": "SDI, Lencioni i Inspire procene"
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
      <About />
      <ValueStack />
      <FinalCTA />
    </>
  );
}
