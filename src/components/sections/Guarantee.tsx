import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offer } from "@/lib/offer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Zeros Risk Guarantee
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {offer.guarantee.text}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                <div className="bg-background p-4 rounded-lg border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-2">
                  €30K - €100K
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Program Value
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-primary/10">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    3-10x ROI
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Typical Return
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-2">
                    90 Days
                  </div>
                  <div className="text-sm text-muted-foreground">First Visible Wins</div>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {offer.guarantee.text2}
              </p>


              <div className="text-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                  <Link href="/book">
                    Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
