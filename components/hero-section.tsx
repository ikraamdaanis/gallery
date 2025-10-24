"use client";

import { Button } from "components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export function HeroSection() {
  function handleExploreClick() {
    const artSection = document.getElementById("featured-art");
    artSection?.scrollIntoView({ behavior: "smooth" });
  }

  const images = useMemo(
    () => [
      "/images/interchange.webp",
      "/images/the-card-players.webp",
      "/images/twelve-landscape-screens.webp",
      "/images/empire-des-lumieres.webp",
      "/images/flag.webp",
      "/images/number-17a.webp",
      "/images/orange-red-yellow.webp",
      "/images/juin-octobre-1985.webp",
      "/images/mont-sainte-victoire.webp",
      "/images/onement-vi.webp"
    ],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState((0 + 1) % images.length);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const SHOW_MS = 4000;
    const FADE_MS = 1000;
    const fadeTimer = window.setTimeout(() => {
      setPrevIndex(currentIndex);
      setNextIndex((currentIndex + 1) % images.length);
      setIsFading(true);
    }, SHOW_MS - FADE_MS);
    const switchTimer = window.setTimeout(() => {
      setCurrentIndex(i => (i + 1) % images.length);
      setIsFading(false);
    }, SHOW_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(switchTimer);
    };
  }, [currentIndex, images.length]);

  useEffect(() => {
    const preload = new Image();
    preload.src = images[(currentIndex + 1) % images.length];
  }, [currentIndex, images]);

  return (
    <section className="relative overflow-hidden pt-10">
      <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,200,168,0.32),transparent)] blur-2xl" />
      <div className="absolute -right-24 -bottom-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,200,255,0.26),transparent)] blur-2xl" />
      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-10 md:grid-cols-2 md:py-20">
        <div className="order-1 md:order-1">
          <h1 className="mb-4 text-5xl font-light tracking-tight text-balance text-neutral-900 md:text-5xl lg:text-6xl xl:text-7xl">
            Acquire the Most Prestigious Pieces
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-neutral-600 md:text-xl">
            Curated masterpieces for the world&apos;s most discerning collectors
          </p>
          <p className="mb-8 max-w-2xl text-neutral-500">
            Acquire rare works by Old Masters and modern icons, presented with
            absolute discretion and unparalleled provenance.
          </p>
          <div>
            <Button
              size="lg"
              className="bg-neutral-900 px-8 py-3 font-medium text-white hover:bg-neutral-800"
              onClick={handleExploreClick}
              aria-label="Explore our featured art collection"
            >
              View collection
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
              <span>Provenance assured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
              <span>Private viewings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
              <span>Global advisory</span>
            </div>
          </div>
        </div>
        <div className="order-2 md:order-2">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -top-6 -left-6 h-20 w-20 bg-white/40 backdrop-blur-sm" />
            <div className="absolute -right-6 -bottom-6 h-24 w-24 bg-white/30 backdrop-blur-sm" />
            <div className="relative overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm">
              <div className="relative h-[500px] w-full md:aspect-[3/4] md:h-auto">
                <img
                  src={images[isFading ? nextIndex : currentIndex]}
                  alt="Artwork"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  width={600}
                  height={800}
                />
                <AnimatePresence>
                  {isFading && prevIndex !== null ? (
                    <motion.img
                      key={prevIndex}
                      src={images[prevIndex]}
                      alt="Fading artwork"
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={false}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "linear" }}
                    />
                  ) : null}
                </AnimatePresence>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
