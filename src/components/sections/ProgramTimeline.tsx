import { Calendar, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offer } from "@/lib/offer";
import Link from "next/link";

export default function ProgramTimeline() {
  return (
    <section id="timeline" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {offer.timeline.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            First wins in 90 days. Top-performing team in 12 months.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {offer.timeline.phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Timeline line - visible on mobile with different positioning */}
              {index < offer.timeline.phases.length - 1 && (
                <div className="hidden md:block absolute left-4 md:left-8 top-12 md:top-16 w-0.5 h-full bg-primary/20"></div>
              )}

              <div className="flex items-start gap-4 md:gap-8 mb-12 md:mb-16">
                {/* Phase number and icon - visible on mobile with smaller size */}
                <div className="hidden md:flex flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-primary rounded-full items-center justify-center text-white font-bold text-sm md:text-xl relative z-10">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-muted/30 rounded-lg p-4 md:p-8 border border-primary/10">
                  <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <span className="text-lg md:text-2xl font-bold text-primary">
                      {phase.period}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                    {phase.title}
                  </h3>

                  <div className="text-base md:text-lg text-foreground leading-relaxed">
                    <div>
                      <span className="font-bold">What you get:</span>
                      <br />
                      {phase.description.whatYouGet}
                    </div>
                    <div className="mb-2">
                      <span className="font-bold">How we work:</span>
                      <br />
                      {phase.description.howWeWork}
                    </div>

                    <div>
                      <span className="font-bold">Results:</span>
                      <br />
                      {phase.description.results}
                    </div>
                  </div>

                  {/* Phase-specific icons */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-4 md:mt-6">
                    {index === 0 && (
                      <>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <Users className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            Individual Assessments
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <Target className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            Goal Setting
                          </span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <Users className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            Team Workshops
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            Skill Building
                          </span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <Target className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            Performance Tracking
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            Continuous Improvement
                          </span>
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
          <div className="bg-muted/30 from-primary/5 to-primary/10 rounded-xl p-4 md:p-8 border border-primary/10 mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
              Included in Program
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 text-center items-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {offer.timeline.totals.oneOnOne}
                </div>
                {/* <div className="text-xs md:text-sm text-foreground font-medium">
                  Individual Sessions
                </div> */}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {offer.timeline.totals.group}
                </div>
                {/* <div className="text-xs md:text-sm text-foreground font-medium">
                  Group Sessions
                </div> */}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {offer.timeline.totals.workshops}
                </div>
                {/* <div className="text-xs md:text-sm text-foreground font-medium">
                  Workshops
                </div> */}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {offer.timeline.totals.assessments}
                </div>
                {/* <div className="text-xs md:text-sm text-foreground font-medium">
                  Assessments
                </div> */}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {offer.timeline.totals.offlineSupport}
                </div>
                {/* <div className="text-xs md:text-sm text-foreground font-medium">
                  Assessments
                </div> */}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {offer.timeline.totals.excercises}
                </div>
                {/* <div className="text-xs md:text-sm text-foreground font-medium">
                  Assessments
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Promise */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-medium">
            <CheckCircle className="w-12 h-12 md:w-5 md:h-5" />
            <span className="text-center">{offer.timeline.promise}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full sm:w-auto"
          >
            <Link href="/book"> {offer.timeline.cta} </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
