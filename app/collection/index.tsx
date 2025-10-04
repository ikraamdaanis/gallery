"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ArtCard } from "components/art-card";
import { Navigation } from "components/navigation";
import { getAllArtPieces } from "data/art-pieces";
import { motion } from "framer-motion";

export const Route = createFileRoute("/collection/")({
  component: CollectionPage,
  loader: () => {
    return getAllArtPieces();
  }
});

function CollectionPage() {
  const pieces = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="mb-12 pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-playfair mb-8 text-3xl font-light tracking-tight text-neutral-900 md:text-4xl"
          >
            Collection
          </motion.h1>
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((piece, idx) => (
              <ArtCard key={piece.id} artPiece={piece} index={idx} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
