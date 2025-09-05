import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { offer } from "@/lib/offer";
import Link from "next/link";

export default function ValueStack() {
  return (
    <section
      id="value"
      className="py-20 bg-gradient-to-br from-primary/5 to-primary/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {offer.valueStack.title}
            </h2>

            <p className="text-xl text-muted-foreground">
              {offer.valueStack.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Value Items */}
            <div className="space-y-4">
              {offer.valueStack.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-bold text-primary text-lg">
                    {item.value}
                  </span>
                </div>
              ))}
              {/* Value Summary */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-background p-4 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-2">
                        €30,950
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Value
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Options */}
            <Card className="h-fit shadow-lg">
              <CardContent className="space-y-6 pt-8">
                {/* <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Choose Your Investment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Get {offer.valueStack.totalValue} worth of transformation for
                    a fraction of the cost
                  </p>
                </div> */}
                {/* Upfront Option */}
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30 relative hover:border-primary/40 transition-colors">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                      BEST VALUE
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">
                      {offer.valueStack.investment.upfront}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    Pay-In-Full
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                      Save €4,000 vs flexible plan (25% off)
                    </div>
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                      Save €18,950 vs itemized value ({offer.valueStack.totalValue})
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Add extra seat: {offer.valueStack.investment.addOn} (default team size is 4)</p>
                    <p className="italic">Why? Speed + commitment = results. That&apos;s why PIF is heavily discounted.</p>
                  </div>
                </div>

                {/* Installment Option */}
                <div className="text-center p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border-2 border-muted/50 hover:border-muted transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {offer.valueStack.investment.installments}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Flexible Payment Plan
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                      {offer.valueStack.investment.installmentBreakdown}
                    </div>
                    <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium">
                      Launch pricing - next cohort increases
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Flexible Payment
                  </Badge>
                </div>

                {/* Add-on Option */}
                {/* <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-lg font-bold text-foreground">
                      {offer.valueStack.investment.addOn}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Additional team members
                  </p>
                </div> */}

                <div className="pt-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/book">Book Your Free Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
