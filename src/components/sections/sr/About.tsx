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
                <p>
                  Više od 20 godina rešava najčešći
                  problem menadžmenta: pametni timovi koji ne performiraju.
                  Tatjana je obučavala i kočirala lidere u preko 100 kompanija,
                  od brzorastućih SME-ova do korporativnih divova. Njeni programi
                  konzistentno pretvaraju disfunkcionalne timove u visokoproduktivne
                  jedinice koje isporučuju 50% više izlaza za 12 meseci.
                </p>

                <p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
