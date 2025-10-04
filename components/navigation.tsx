"use client";

import { Button } from "components/ui/button";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { luxeSerif } from "styles/fonts";
import { cn } from "utils/cn";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
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
              href="/collection"
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
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
          >
            Inquire
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="sm"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="h-[unset] border-neutral-300 p-0 text-neutral-700 hover:bg-neutral-50"
            onClick={() => setMenuOpen(v => !v)}
          >
            <Menu className="size-6 min-w-6" />
          </Button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="border-t border-neutral-200 bg-white md:hidden"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mx-auto max-w-7xl px-6 py-4">
              <motion.nav
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1
                }}
              >
                <Link
                  href="/collection"
                  className="text-neutral-700"
                  aria-label="View art collection"
                >
                  Collection
                </Link>
                <a
                  href="#artists"
                  className="text-neutral-700"
                  aria-label="Browse artists"
                >
                  Artists
                </a>
                <a
                  href="#about"
                  className="text-neutral-700"
                  aria-label="About Prestige Gallery"
                >
                  About
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  Inquire
                </Button>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
