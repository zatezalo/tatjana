import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Euro, Users } from "lucide-react";
import { offer } from "@/lib/offer";

export default function ValueStack() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {offer.valueStack.title}
            </h2>

            <p className="text-xl text-muted-foreground">
              Everything you need for complete team transformation, valued at{" "}
              {offer.valueStack.totalValue}.
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Complete Transformation Package
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Everything you need to transform your team is included. No
                    hidden costs, no upsells, just complete transformation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-background p-4 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-2">
                        €30,950
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Value
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        68% OFF
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Massive Savings
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-2">
                        €10,000
                      </div>
                      <div className="text-sm text-muted-foreground">
                        You Pay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Options */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Choose Your Investment
                </CardTitle>
                <p className="text-center text-muted-foreground text-sm">
                  Get {offer.valueStack.totalValue} worth of transformation for
                  a fraction of the cost
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upfront Option */}
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      BEST VALUE
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-primary" />
                    <span className="text-4xl font-bold text-primary">
                      {offer.valueStack.investment.upfront}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    One-time payment
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Save €20,950 (68% OFF)
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Regular price: {offer.valueStack.totalValue}
                  </p>
                </div>

                {/* Installment Option */}
                <div className="text-center p-6 bg-muted/50 rounded-lg border-2 border-muted">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-foreground" />
                    <span className="text-4xl font-bold text-foreground">
                      {offer.valueStack.investment.installments}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {offer.valueStack.investment.installmentBreakdown}
                  </p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Save €16,950 (55% OFF)
                  </div>
                  <Badge variant="outline">Flexible Payment</Badge>
                </div>

                {/* Add-on Option */}
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-lg font-bold text-foreground">
                      {offer.valueStack.investment.addOn}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Additional team members
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    Book Your Free Consultation
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
