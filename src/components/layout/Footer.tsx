import Link from "next/link";
import { Users, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-start-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">Tatjana Team Transformer</span>
            </Link>
            <p className="text-foreground text-sm">
            Transforming dysfunctional teams into high-performing ones through proven coaching and development programs.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#pain" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Team Problems
                </Link>
              </li>
              <li>
                <Link href="#dream" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Team Solutions
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground hover:text-foreground transition-colors text-sm">
                  About Tanja
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Our Process
                </Link>
              </li>
          
              <li>
                <Link href="#value" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Submit an inquiry
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Program */}
          {/* <div>
            <h3 className="font-semibold text-foreground mb-4">Program</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/book" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="#guarantee" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Our Guarantee
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-foreground hover:text-foreground transition-colors text-sm">
                  Submit an inquiry
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:tatjana.sokcic@hrcentar.rs">tatjana.sokcic@hrcentar.rs</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+381604121304">+381 60 4121304</a>
              </li>
              {/* <li className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="w-4 h-4" />
                Remote & In-person
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground">
            © 2024 Team Transform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
