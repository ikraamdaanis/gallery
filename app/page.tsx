"use client";

import { ArtCard } from "components/art-card";
import { HeroSection } from "components/hero-section";
import { Navigation } from "components/navigation";
import { Button } from "components/ui/button";
import { getFeaturedArtPieces } from "data/art-pieces";
import { motion } from "framer-motion";

/**
 * @url /
 */
export default function HomePage() {
  const featuredArtPieces = getFeaturedArtPieces();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <section id="featured-art" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-light text-neutral-900 md:text-5xl">
                Featured Collection
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Discover our most prestigious pieces, each representing the
                pinnacle of artistic achievement and investment potential.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredArtPieces.map((artPiece, index) => (
                <ArtCard key={artPiece.id} artPiece={artPiece} index={index} />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-neutral-50 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-light text-neutral-900">
                Acquire Masterpieces
              </h2>
              <p className="mb-8 text-lg text-neutral-600">
                Each piece in our collection represents not just artistic
                excellence, but a sound investment in cultural heritage. Our
                expert curation team ensures authenticity and provenance for
                every acquisition.
              </p>
              <Button
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800"
                onClick={() => {
                  // In a real app, this would open a contact form or redirect to consultation page
                  window.location.href =
                    "mailto:inquiries@prestige-gallery.com?subject=Consultation Request";
                }}
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
