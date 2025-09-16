import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                {/* Placeholder for Tatjana&apos;s photo - you can replace this with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-foreground text-lg">
                    Tatjana&apos;s Photo
                  </span>
                </div>
                <Image
                  src="/about.jpeg"
                  alt="Tatjana - CEO of HR Centar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-4">
                <div className="flex flex-wrap gap-4">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    PCC, ICF Certified
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    EBRD Consultant
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Accredited Inspire Assessor
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Hogan & SDI Certified
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Licensed Mediator
                  </span>
                </div>
              </div>
            </div>

            {/* Content on the right */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  About Tatjana
                </h2>
                <p className="text-xl text-primary font-semibold mb-6">
                  CEO of HR Centar
                </p>
              </div>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="font-medium text-foreground">
                  For 20+ years she&apos;s been fixing the most common
                  management problem: smart teams that don&apos;t perform.
                  Tatjana has trained and coached leaders in 100+ companies,
                  from fast-growing SMEs to enterprise giants. Her programs
                  consistently turn dysfunctional teams into high-performing
                  ones that deliver 50% more output within 12 months.
                </p>

                <p className="font-medium text-foreground">
                  During my 15 years in management roles, I had worked with
                  great individuals, but the biggest challenge was to achieve
                  greatness as a team. Most teams never have problems with
                  numbers, but with relationships - that’s why I want to help
                  teams achieve their full potential.
                </p>

                <p className="font-medium text-foreground">
                  Tatjana is a certified executive coach (PCC, ICF), licensed
                  mediator, and accredited assessor for Inspire, Hogan, and SDI;
                  she combines diagnostics, workshops, and 1:1 coaching. As an
                  accredited EBRD consultant, she&apos;s trusted to solve critical
                  growth and leadership challenges for international
                  organizations.
                </p>
                <p className="font-medium text-foreground">
                  Clients don&apos;t just leave with insights - they leave with
                  teams that finally run without micromanagement, produce new
                  revenue initiatives, and deliver projects on time.
                </p>
              </div>

              {/* Credentials */}
             
            </div>
          </div>
          
          {/* Client Logos Carousel */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Trusted by Leading Companies
              </h3>
              <p className="text-muted-foreground">
                Organizations that trust Tatjana to transform their teams
              </p>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-infinite-scroll whitespace-nowrap">
                {/* Create many repetitions of logos for true infinite scroll */}
                {Array.from({ length: 20 }).map((_, index) => {
                  const logos = [
                    { src: '/referals/fresenius-medical-care.png', alt: 'Fresenius Medical Care' },
                    { src: '/referals/logo-acb-company.png', alt: 'ACB Company' },
                    { src: '/referals/nis-logo.png', alt: 'NIS' }
                  ];
                  const logo = logos[index % 3];
                  
                  return (
                    <div key={index} className="inline-flex items-center justify-center w-32 h-20 md:w-40 md:h-24 mx-6 md:mx-8 flex-shrink-0">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  );
                })}
                
                {/* Duplicate the entire sequence for seamless looping */}
                {Array.from({ length: 20 }).map((_, index) => {
                  const logos = [
                    { src: '/referals/fresenius-medical-care.png', alt: 'Fresenius Medical Care' },
                    { src: '/referals/logo-acb-company.png', alt: 'ACB Company' },
                    { src: '/referals/nis-logo.png', alt: 'NIS' }
                  ];
                  const logo = logos[index % 3];
                  
                  return (
                    <div key={`duplicate-${index}`} className="inline-flex items-center justify-center w-32 h-20 md:w-40 md:h-24 mx-6 md:mx-8 flex-shrink-0">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
