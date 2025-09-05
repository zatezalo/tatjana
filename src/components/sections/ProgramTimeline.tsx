import { Calendar, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offer } from "@/lib/offer";
import Link from "next/link";

export default function ProgramTimeline() {
  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {offer.timeline.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            First wins in 90 days. Self-managing team in 12 months.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {offer.timeline.phases.map((phase, index) => (
            <div key={index} className="relative ">
              {/* Timeline line */}
              {index < offer.timeline.phases.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-primary/20 hidden md:block"></div>
              )}

              <div className="flex items-start gap-8 mb-16">
                {/* Phase number and icon */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-primary rounded-full items-center justify-center text-white font-bold text-xl relative z-10">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-muted/30 rounded-lg p-8 border border-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">
                      {phase.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {phase.title}
                  </h3>

                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <div className="mb-2">
                      <span className="font-bold">How we work:</span>
                      <br />
                      {phase.description.split('. What you get:')[0].replace('How we work: ', '')}
                    </div>
                    <div>
                      <span className="font-bold">What you get:</span>
                      <br />
                      {phase.description.split('. What you get:')[1]}
                    </div>
                  </div>

                  {/* Phase-specific icons */}
                  <div className="flex items-center gap-6 mt-6">
                    {index === 0 && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          Individual Assessments
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="w-4 h-4" />
                          Goal Setting
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          Team Workshops
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4" />
                          Skill Building
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Target className="w-4 h-4" />
                          Performance Tracking
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4" />
                          Continuous Improvement
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Totals */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/30 from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/10 mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Program Totals</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{offer.timeline.totals.oneOnOne}</div>
                <div className="text-sm text-muted-foreground font-medium">Individual Sessions</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{offer.timeline.totals.group}</div>
                <div className="text-sm text-muted-foreground font-medium">Group Sessions</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{offer.timeline.totals.workshops}</div>
                <div className="text-sm text-muted-foreground font-medium">Workshops</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{offer.timeline.totals.assessments}</div>
                <div className="text-sm text-muted-foreground font-medium">Assessments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Promise */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium">
            <CheckCircle className="w-5 h-5" />
            {offer.timeline.promise}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
            <Link href="/book"> {offer.timeline.cta} </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
