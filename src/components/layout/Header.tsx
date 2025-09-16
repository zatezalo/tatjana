"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguagePicker from "@/components/ui/language-picker";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/logo.png" alt="Tatjana Šokčić" width={20} height={20} />
            </div>
            <span className="text-foreground">Tatjana Šokčić</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              <LanguagePicker currentLanguage="en" />
              <div className="h-6 w-px bg-border"></div>
            </div>

            <Link href="#pain" className="text-foreground hover:text-foreground transition-colors">
              Problems
            </Link>
            <Link href="#dream" className="text-foreground hover:text-foreground transition-colors">
              Solutions
            </Link>
            <Link href="#timeline" className="text-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link href="#about" className="text-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#value" className="text-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Button asChild>
              <Link href="/book">Book Consultation</Link>
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
              <div className="px-4">
                <LanguagePicker currentLanguage="en" />
              </div>
              <div className="px-4">
                <div className="h-px bg-border"></div>
              </div>
              <Link 
                href="#pain" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Problems
              </Link>
              <Link 
                href="#dream" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="#timeline" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </Link>
              <Link 
                href="#about" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#value" 
                className="text-foreground hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="px-4 pt-2">
                <Button asChild className="w-full">
                  <Link href="/book" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
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
