import Link from "next/link";
import { Users, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/sr" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">Tatjana Tim Transformer</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transformišemo disfunkcionalne timove u visokoproduktivne jedinice kroz dokazane programe kočinga i razvoja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Brze veze</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#pain" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Problemi tima
                </Link>
              </li>
              <li>
                <Link href="#dream" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Rešenja
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Naš proces
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Studije slučaja
                </Link>
              </li>
              <li>
                <Link href="#value" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Cene
                </Link>
              </li>
            </ul>
          </div>

          {/* Program */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Program</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sr/book" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Zakazite konsultaciju
                </Link>
              </li>
              <li>
                <Link href="#guarantee" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Naša garancija
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Počnite
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                hello@teamtransform.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Udaljeno i na licu mesta
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Team Transform. Sva prava zadržana.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Politika privatnosti
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Uslovi korišćenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
