"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ArtCard } from "components/art-card";
import { getAllArtPieces } from "data/art-pieces";

export const Route = createFileRoute("/collection/")({
  component: CollectionPage
});

function CollectionPage() {
  return (
    <main className="mb-12 pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-playfair mb-8 text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
          Collection
        </h1>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {getAllArtPieces().map(piece => (
            <ArtCard key={piece.id} artPiece={piece} />
          ))}
        </section>
      </div>
    </main>
  );
}
