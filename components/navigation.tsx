"use client";

import { Button } from "components/ui/button";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "utils/cn";

const luxeSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap"
});

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h2
            className={cn(
              luxeSerif.className,
              "text-3xl font-semibold tracking-tight text-neutral-900"
            )}
          >
            Sovereign <span className="italic">Atelier</span>
          </h2>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6">
            <Link
              href="/art"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
              aria-label="View art collection"
            >
              Collection
            </Link>
            <a
              href="#artists"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
              aria-label="Browse artists"
            >
              Artists
            </a>
            <a
              href="#about"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
              aria-label="About Prestige Gallery"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-neutral-600 transition-colors hover:text-neutral-900"
              aria-label="Contact us"
            >
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
          >
            Inquire
          </Button>
        </div>
      </div>
    </nav>
  );
}
