"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
  href: string;
}

interface LanguagePickerProps {
  currentLanguage: string;
}

const defaultLanguages: Language[] = [
  { code: "en", name: "EN", flag: "🇺🇸", href: "/" },
  { code: "sr", name: "SR", flag: "🇷🇸", href: "/sr" },
];

export default function LanguagePicker({ currentLanguage }: LanguagePickerProps) {
  const languages = defaultLanguages;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-foreground transition-colors"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-32 bg-background border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages
              .filter(lang => lang.code !== currentLanguage)
              .map((language) => (
                <Link
                  key={language.code}
                  href={language.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
