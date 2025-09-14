import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, TrendingUp, Users } from "lucide-react";
import { offer } from "@/lib/offer";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real Results from Real Teams
            </h2>
            <p className="text-xl text-foreground">
              See how other teams have transformed their culture and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offer.caseStudies.map((study, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{study.company}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{study.industry}</Badge>
                        <Badge variant="outline">{study.teamSize}</Badge>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/60" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                    <p className="text-foreground">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                    <p className="text-foreground">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.split(', ').map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-foreground italic mb-3">&quot;{study.testimonial}&quot;</p>
                    <p className="text-sm font-medium text-primary">- {study.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium">
              <Users className="w-5 h-5" />
              Your team could be next
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
