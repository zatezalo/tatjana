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
                  <span className="text-muted-foreground text-lg">Tatjana&apos;s Photo</span>
                </div>
                <Image
                  src="/about.jpeg"
                  alt="Tatjana - CEO of HR Centar"
                  fill
                  className="object-cover"
                />               
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

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For 20+ years she&apos;s been fixing the same founder problem: smart teams that don&apos;t perform. 
                  Tatjana has trained and coached leaders in 100+ companies, from fast-growing SMEs to 
                  enterprise giants. Her programs consistently turn dysfunctional teams into high-performing 
                  units that deliver 50% more output within 12 months.
                </p>

                <p>
                  Certified executive coach (PCC, ICF) and assessor for Inspire, Hogan, and SDI, she combines 
                  diagnostics, workshops, and 1:1 coaching so results stick. As an accredited EBRD consultant, 
                  she&apos;s trusted to solve critical growth and leadership challenges for organizations across Europe.
                </p>

                <p className="font-medium text-foreground">
                  Clients don&apos;t just leave with insights - they leave with teams that finally run without 
                  micromanagement, produce new revenue initiatives, and deliver projects on time.
                </p>
              </div>

              {/* Credentials */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-4">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    PCC, ICF Certified
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    EBRD Consultant
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Inspire Assessor
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Hogan & SDI Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
