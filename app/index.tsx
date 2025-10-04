import { createFileRoute } from "@tanstack/react-router";
import { ArtCard } from "components/art-card";
import { HeroSection } from "components/hero-section";
import { Navigation } from "components/navigation";
import { Button } from "components/ui/button";
import { getFeaturedArtPieces } from "data/art-pieces";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: () => getFeaturedArtPieces()
});

function RouteComponent() {
  const featuredArtPieces = Route.useLoaderData();

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
              <h2 className="font-playfair mb-4 text-3xl font-light text-neutral-900 md:text-5xl">
                Featured Collection
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-balance text-neutral-600">
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
              <h2 className="font-playfair mb-6 text-3xl font-light text-neutral-900">
                Acquire Masterpieces
              </h2>
              <p className="mb-8 text-lg text-balance text-neutral-600">
                Each piece in our collection represents not just artistic
                excellence, but a sound investment in cultural heritage. Our
                expert curation team ensures authenticity and provenance for
                every acquisition.
              </p>
              <Button
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800"
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
