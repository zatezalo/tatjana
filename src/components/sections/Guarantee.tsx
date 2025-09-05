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
                Our Iron-Clad Guarantee
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {offer.guarantee.text}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Complete Team transformation</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">Clear guidance on team changes</span>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                  <Link href="/book">
                    Start Your Transformation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No risk, no questions asked. We&apos;re confident in our results.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
