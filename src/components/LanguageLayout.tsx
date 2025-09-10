"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SerbianHeader from "@/components/layout/sr/Header";
import SerbianFooter from "@/components/layout/sr/Footer";

export default function LanguageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSerbianRoute = pathname.startsWith("/sr");

  return (
    <>
      {isSerbianRoute ? <SerbianHeader /> : <Header />}
      <main>{children}</main>
      {isSerbianRoute ? <SerbianFooter /> : <Footer />}
    </>
  );
}
