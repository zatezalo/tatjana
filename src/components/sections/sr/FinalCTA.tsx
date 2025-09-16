"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Send, AlertCircle, ArrowRight } from "lucide-react";
import { offer } from "@/lib/offer-sr";
import Link from "next/link";

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", teamSize: "", message: "" });
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(errorData.message || "Nešto je pošlo po zlu. Molimo pokušajte ponovo.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Nešto je pošlo po zlu. Molimo pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {offer.finalCta.title}
            </h2>
            <p className="text-xl text-foreground">
              {offer.finalCta.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Počnite danas</CardTitle>
                <p className="text-foreground">
                  Popunite formular i javićemo vam se u roku od 24 sata.
                </p>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Hvala vam!</h3>
                    <p className="text-foreground mb-4">
                      Primili smo vaše informacije i kontaktiraćemo vas u roku od 24 sata.
                    </p>
                    <Button onClick={() => setSubmitStatus("idle")} variant="outline">
                      Pošaljite još jednu poruku
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Puno ime *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Vaše puno ime"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email adresa *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="vas@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Naziv kompanije *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Vaša kompanija"
                        />
                      </div>
                      <div>
                        <label htmlFor="teamSize" className="block text-sm font-medium text-foreground mb-2">
                          Veličina tima *
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          required
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Izaberite veličinu tima</option>
                          <option value="2-5">2-5 ljudi</option>
                          <option value="6-10">6-10 ljudi</option>
                          <option value="11-20">11-20 ljudi</option>
                          <option value="21-50">21-50 ljudi</option>
                          <option value="50+">50+ ljudi</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Recite nam o izazovima vašeg tima *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Koje specifične probleme ima vaš tim? Kako bi uspeh izgledao za vas?"
                        rows={4}
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">{errorMessage}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Šalje se..."
                      ) : (
                        <>
                          Pošaljite poruku
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Šta se dešava dalje?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Besplatna konsultacija</h4>
                      <p className="text-sm text-foreground">30-minutni poziv da razumemo potrebe vašeg tima</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Prilagođeni predlog</h4>
                      <p className="text-sm text-foreground">Program prilagođen vašoj specifičnoj situaciji</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Počnite transformaciju</h4>
                      <p className="text-sm text-foreground">Započnite svoje 12-mesečno putovanje ka timskoj izvrsnosti</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Zašto nas izabrati?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Dokazana istorija sa preko 100 timova</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">12-mesečni strukturirani program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">€30K+ vrednost za deo cene</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Nema pozitivnih rezultata - garantija povraćaja novca</span>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  3 mesta dostupna
                </Badge>
              </div>
            </div>
          </div>

          {/* Alternative CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Spremni da počnete?
              </h3>
              <p className="text-foreground mb-6">
                Preskočite formular i zakazite besplatnu konsultaciju direktno
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/sr/book">
                  Zakazite besplatnu konsultaciju
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
