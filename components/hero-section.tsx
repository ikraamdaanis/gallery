"use client";

import { Button } from "components/ui/button";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

export function HeroSection() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  function handleExploreClick() {
    const artSection = document.getElementById("featured-art");
    artSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="bg-brand relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/30 to-neutral-100/20" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1
            className="font-playfair mb-6 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl"
            variants={textVariants}
          >
            Sovereign
            <br />
            <span className="italic">Atelier</span>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl text-balance text-neutral-600 md:text-2xl lg:text-3xl"
            variants={textVariants}
          >
            Curated masterpieces for the world&apos;s most discerning collectors
          </motion.p>
          <motion.p
            className="mx-auto mb-12 max-w-2xl text-lg text-balance text-neutral-500"
            variants={textVariants}
          >
            Acquire rare works by Old Masters and modern icons, presented with
            absolute discretion and unparalleled provenance.
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Button
              size="lg"
              className="bg-neutral-900 px-8 py-3 text-lg font-medium text-white hover:bg-neutral-800"
              onClick={handleExploreClick}
              aria-label="Explore our featured art collection"
            >
              View Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="h-6 w-px bg-neutral-300" />
        </div>
      </motion.div>
    </section>
  );
}
