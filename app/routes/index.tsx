import { createFileRoute } from "@tanstack/react-router";
import { ArtCard } from "components/art-card";
import { HeroSection } from "components/hero-section";
import { getFeaturedArtPieces } from "data/art-pieces";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <main>
      <HeroSection />
      <section id="featured-art" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-playfair mb-4 text-3xl font-light text-neutral-900 md:text-5xl">
              Featured Collection
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-balance text-neutral-600">
              Discover our most prestigious pieces, each representing the
              pinnacle of artistic achievement and investment potential.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {getFeaturedArtPieces().map(artPiece => (
              <ArtCard key={artPiece.id} artPiece={artPiece} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
