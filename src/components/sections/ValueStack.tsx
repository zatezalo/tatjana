import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Euro, Users, Calendar } from "lucide-react";
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
              Everything you need for complete team transformation, valued at over €30,000.
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
                    <span className="font-medium text-foreground">{item.name}</span>
                  </div>
                  <span className="font-bold text-primary text-lg">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Investment Options */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Investment Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upfront Option */}
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-primary" />
                    <span className="text-3xl font-bold text-primary">{offer.valueStack.investment.upfront}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">One-time payment</p>
                  <Badge className="bg-primary text-primary-foreground">Save 40%</Badge>
                </div>

                {/* Installment Option */}
                <div className="text-center p-6 bg-muted/50 rounded-lg border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-foreground" />
                    <span className="text-3xl font-bold text-foreground">{offer.valueStack.investment.installments}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{offer.valueStack.investment.installmentBreakdown}</p>
                  <Badge variant="outline">Flexible Payment</Badge>
                </div>

                {/* Add-on Option */}
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-lg font-bold text-foreground">{offer.valueStack.investment.addOn}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Additional team members</p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">Total Value:</span>
                    <span className="text-2xl font-bold text-primary">{offer.valueStack.totalValue}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Book Your Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium mb-4">
              <CheckCircle className="w-5 h-5" />
              Complete transformation package
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your team is included. No hidden costs, no upsells, just complete transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
