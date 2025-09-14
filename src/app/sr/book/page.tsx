import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Link href="/sr" className="inline-flex items-center gap-2 text-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Nazad na početnu
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Zakazite besplatnu konsultaciju
          </h1>
          
          <p className="text-xl text-foreground mb-8">
            Rezervišite svoj 30-minutni poziv sa Tatjanom i otkrijte kako možemo pomoći vašem timu da dostigne svoj puni potencijal.
          </p>
          
          <div className="bg-background rounded-lg p-8 shadow-lg border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Kontakt informacije
            </h2>
            
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email:</h3>
                <p className="text-foreground">hello@teamtransform.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Telefon:</h3>
                <p className="text-foreground">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dostupnost:</h3>
                <p className="text-foreground">Ponedeljak - Petak, 9:00 - 17:00 CET</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="w-full">
                <Link href="mailto:hello@teamtransform.com">
                  Pošaljite email
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-foreground">
            <p>
              Ili nas kontaktirajte direktno putem email-a ili telefona. 
              Odgovorićemo vam u roku od 24 sata.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
