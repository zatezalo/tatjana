import { CheckCircle, MessageCircle, Lightbulb, Calendar } from "lucide-react";
import { offer } from "@/lib/offer";

export default function DreamOutcome() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {offer.dream.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            Picture your team operating at peak performance with these transformational outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offer.dream.bullets.map((bullet, index) => {
            const icons = [MessageCircle, CheckCircle, Lightbulb, Calendar];
            const Icon = icons[index];
            
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-lg border border-primary/20 hover:border-primary/40 transition-colors shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium">
            <CheckCircle className="w-5 h-5" />
            This is what your team will become
          </div>
        </div>
      </div>
    </section>
  );
}
