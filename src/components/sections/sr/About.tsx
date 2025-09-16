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
                {/* Placeholder for Tatjana's photo - you can replace this with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-foreground text-lg">Tatjanina fotografija</span>
                </div>
                <Image
                  src="/about.jpeg"
                  alt="Tatjana - CEO HR Centra"
                  fill
                  className="object-cover"
                />               
              </div>
              <div className="pt-4">
                <div className="flex flex-wrap gap-4">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    PCC, ICF Certifikovano
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    EBRD Konsultant
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Akreditovani Inspire Procenjivač
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Hogan & SDI Certifikovano
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Licencirani Mediator
                  </span>
                </div>
              </div>
            </div>

            {/* Content on the right */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  O Tatjani
                </h2>
                <p className="text-xl text-primary font-semibold mb-6">
                  CEO HR Centra
                </p>
              </div>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="font-medium text-foreground">
                  Više od 20 godina rešava najčešći
                  problem menadžmenta: pametni timovi koji ne performiraju.
                  Tatjana je obučavala i kočirala lidere u preko 100 kompanija,
                  od brzorastućih SME-ova do korporativnih divova. Njeni programi
                  konzistentno pretvaraju disfunkcionalne timove u visokoproduktivne
                  jedinice koje isporučuju 50% više izlaza za 12 meseci.
                </p>

                <p className="font-medium text-foreground">
                  Tokom mojih 15 godina u menadžerskim ulogama, radila sam sa
                  odličnim pojedincima, ali najveći izazov je bio da postignemo
                  veličinu kao tim. Većina timova nikad nema probleme sa
                  brojevima, već sa odnosima - zato želim da pomognem
                  timovima da dostignu svoj puni potencijal.
                </p>

                <p className="font-medium text-foreground">
                  Certifikovani izvršni koč (PCC, ICF), licencirani mediator i
                  akreditovani procenjivač za Inspire, Hogan i SDI, kombinuje
                  dijagnostiku, radionice i 1:1 kočing. Kao akreditovani
                  EBRD konsultant, pouzdana je za rešavanje kritičnih izazova
                  rasta i liderstva za međunarodne organizacije.
                </p>
                <p className="font-medium text-foreground">
                  Klijenti ne odlaze samo sa uvidima - odlaze sa
                  timovima koji konačno rade bez mikromenadžmenta, proizvode nove
                  prihodne inicijative i isporučuju projekte na vreme.
                </p>
              </div>

              {/* Credentials */}
              
            </div>
          </div>
          
          {/* Client Logos Carousel */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Pouzdane od strane vodećih kompanija
              </h3>
              <p className="text-muted-foreground">
                Organizacije koje veruju Tatjani da transformiše njihove timove
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
