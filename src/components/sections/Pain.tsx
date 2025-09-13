import { X, AlertTriangle, Clock, Users, Target, Zap } from "lucide-react";
import { offer } from "@/lib/offer";

export default function Pain() {
  return (
    <section id="pain" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {offer.pain.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {offer.pain.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offer.pain.bullets.map((bullet, index) => {
            const icons = [Clock, AlertTriangle, X, Target, Users, Zap];
            const Icon = icons[index];
            const isLastItem = index === offer.pain.bullets.length - 1;
            const isOddCount = offer.pain.bullets.length % 2 === 1;
            
            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-background rounded-lg border border-destructive/20 hover:border-destructive/40 transition-colors ${
                  isLastItem && isOddCount ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {bullet}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-muted-foreground">
            <strong className="text-foreground">{offer.pain.conclusion}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
