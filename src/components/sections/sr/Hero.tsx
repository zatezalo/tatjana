import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            Program transformacije tima
          </div> */}

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl  font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Da li želite efektivniji tim?
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Prestanite sa mikromenadžmentom tima. Napravite tim koji planira,
            isporučuje i donosi nove prilike.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                90 Dana
              </h3>
              <p className="text-foreground">
                Zagarantovani vidljivi rezultati u timskom radu
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                12 meseci
              </h3>
              <p className="text-foreground">
                Usaglašen i efektivan tim koji planira, isporučuje i donosi
                profit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                10+ godina iskustva
              </h3>
              <p className="text-foreground">
                Više od 100 zadovoljnih klijenata
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 mt-8">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
            >
              <Link href="/sr/book">
                Počnite sa besplatnim 30-minutnim pozivom
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
}
