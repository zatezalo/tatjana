import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { offer } from "@/lib/offer-sr";
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

            <p className="text-xl text-foreground">
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
                  <div className="flex flex-col gap-6 text-center">
                    <div className="bg-background p-4 rounded-lg border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-2">
                        Total Value: €30,950
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Options */}
            <Card className="h-fit shadow-lg">
              <CardContent className="space-y-6 pt-8">
                {/* Upfront Option */}
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30 relative hover:border-primary/40 transition-colors">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                      NAJBOLJA VREDNOST
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">
                      {offer.valueStack.investment.upfront}
                    </span>
                  </div>
                  <p className="text-sm text-foreground mb-4 font-medium">
                  Plaćanje unapred
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Uštedite €6 000 u odnosu na Postepeni plan (37.5% popusta)
                    </div>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Uštedite €20,950 u odnosu na pojedinačnu vrednost (
                      {offer.valueStack.totalValue})
                    </div>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Dodatno mesto po osobi: {offer.valueStack.investment.addOn}{" "}
                      <br />(standardna veličina tima je 4)
                    </div>
                  </div>
                  {/* <div className="text-xs text-foreground space-y-1">
                    <p className="italic">
                      Zašto? Brzina + posvećenost = rezultati. Zato je PIF 
                      značajno snižen.
                    </p>
                  </div> */}
                </div>

                {/* Installment Option */}
                <div className="text-center p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border-2 border-muted/50 hover:border-muted transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {offer.valueStack.investment.installments}
                    </span>
                  </div>
                  <p className="text-sm text-foreground mb-4">
                  Plaćanje na rate
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                      {offer.valueStack.investment.installmentBreakdown}
                    </div>
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Uštedite €14,950 u odnosu na pojedinačnu vrednost  (
                      {offer.valueStack.totalValue})
                    </div>
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Dodatno mesto po osobi: €3,000 (standardna veličina tima je 4)
                    </div>
                  </div>
                </div>

                <div>
                  <Button asChild className="w-full mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 h-auto" size="lg">
                    <Link href="/sr/book">Zakazite besplatnu konsultaciju</Link>
                  </Button>
                  <div className="text-center">
                    <Badge className="text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 bg-[#FFF4E5] text-[#D35400] border border-[#FF9800] hover:bg-[#FFF4E5] hover:cursor-default">
                      3 mesta dostupna za ovu cenu
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
