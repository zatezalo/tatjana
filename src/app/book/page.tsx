import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-foreground">
              Schedule a 30-minute call to discuss your team&apos;s transformation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Widget */}
            <div className="lg:col-span-2 w-full">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Schedule Your Call
                  </CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                  {/* Calendly iframe */}
                  <div className="w-full">
                    <iframe
                      src="https://calendly.com/zatezalo123/30min"
                      width="100%"
                      height="600"
                      title="Schedule a meeting"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">30 Minutes</h4>
                      <p className="text-sm text-foreground">Focused discussion about your team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Team Assessment</h4>
                      <p className="text-sm text-foreground">Understanding your current challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Next Steps</h4>
                      <p className="text-sm text-foreground">Clear path forward for your team</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preparation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Prepare</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">Think about your team&apos;s biggest challenges</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">Consider what success would look like</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">Have your team size and structure ready</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">Prepare any specific questions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can&apos;t Find a Time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    If none of the available times work for you, we can arrange a different time.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/#cta">Contact Us Instead</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Button asChild variant="ghost">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
