"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/sr" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-foreground">Tatjana Šokčić</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#pain" className="text-foreground hover:text-foreground transition-colors">
              Problemi
            </Link>
            <Link href="#dream" className="text-foreground hover:text-foreground transition-colors">
              Rešenja
            </Link>
            <Link href="#timeline" className="text-foreground hover:text-foreground transition-colors">
              Proces
            </Link>
            <Link href="#about" className="text-foreground hover:text-foreground transition-colors">
              O Tatjani
            </Link>
            <Link href="#value" className="text-foreground hover:text-foreground transition-colors">
              Cene
            </Link>
            <Link href="/" className="text-foreground hover:text-foreground transition-colors">
              EN
            </Link>
            <Button asChild>
              <Link href="/sr/book">Zakazite konsultaciju</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col gap-4 py-4">
              <Link 
                href="#pain" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Problemi
              </Link>
              <Link 
                href="#dream" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Rešenja
              </Link>
              <Link 
                href="#timeline" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Proces
              </Link>
              <Link 
                href="#about" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                O Tatjani
              </Link>
              <Link 
                href="#value" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cene
              </Link>
              <Link 
                href="/" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                EN
              </Link>
              <div className="px-4 pt-2">
                <Button asChild className="w-full">
                  <Link href="/sr/book" onClick={() => setIsMenuOpen(false)}>
                    Zakazite konsultaciju
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
