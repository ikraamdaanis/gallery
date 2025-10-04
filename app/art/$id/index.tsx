"use client";

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import NotFound from "app/art/$id/not-found";
import { Navigation } from "components/navigation";
import { Button } from "components/ui/button";
import { ImageViewer } from "components/ui/image-viewer";
import { formatPrice, getArtPieceById } from "data/art-pieces";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/art/$id/")({
  component: ArtPiecePage,
  loader: ({ params }) => {
    return getArtPieceById(params.id);
  },
  errorComponent: NotFound
});

function ArtPiecePage() {
  const params = Route.useParams();
  const router = useNavigate();
  const artPiece = getArtPieceById(params.id as string);

  if (!artPiece) {
    throw new Error("Art piece not found");
  }

  function handleInquire() {
    toast.success("Inquiry sent!", {
      description: `We'll contact you about "${artPiece?.title}" within 24 hours.`
    });
  }

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  }

  function handleFavorite() {
    toast.success("Added to favorites", {
      description: `"${artPiece?.title}" has been saved to your collection.`
    });
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router({ to: "/collection" })}
            className="gap-2 pl-0 transition-all ease-in-out hover:pl-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Button>
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="min-h-[calc(100dvh-6rem)] lg:top-24">
              <div className="relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-[2px] bg-neutral-100 outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2">
                <ImageViewer
                  src={artPiece.imageUrl}
                  alt={`${artPiece.title} by ${artPiece.artist}`}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-playfair mb-2 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl"
              >
                {artPiece.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-playfair mb-4 text-xl text-neutral-600 italic"
              >
                {artPiece.artist}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-semibold text-neutral-900"
              >
                {formatPrice(artPiece.price, artPiece.currency)}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="mb-4 text-lg font-medium text-neutral-900">
                Description
              </h2>
              <p className="leading-relaxed text-neutral-700">
                {artPiece.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <div>
                <h3 className="mb-2 font-medium text-neutral-900">Details</h3>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div>
                    <span className="font-medium">Medium:</span>{" "}
                    {artPiece.medium}
                  </div>
                  <div>
                    <span className="font-medium">Year:</span> {artPiece.year}
                  </div>
                  <div>
                    <span className="font-medium">Dimensions:</span>{" "}
                    {artPiece.dimensions}
                  </div>
                  <div>
                    <span className="font-medium">Category:</span>{" "}
                    <span className="capitalize">{artPiece.category}</span>
                  </div>
                  <div>
                    <span className="font-medium">Rarity:</span>{" "}
                    <span className="capitalize">{artPiece.rarity}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-neutral-900">
                  Provenance
                </h3>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div>
                    <span className="font-medium">Collection:</span>{" "}
                    {artPiece.provenance}
                  </div>
                  <div>
                    <span className="font-medium">Exhibition:</span>{" "}
                    {artPiece.exhibition}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                onClick={handleInquire}
                className="flex-1 bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Inquire About This Piece
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleFavorite}
                  className="gap-2"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 border-t border-neutral-200 py-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-playfair mb-6 text-3xl font-light text-neutral-900">
              Investment Opportunity
            </h2>
            <p className="mb-8 text-lg text-balance text-neutral-600">
              This masterpiece represents not only artistic excellence but also
              a sound investment in cultural heritage. Our expert curation team
              ensures authenticity and provenance for every acquisition.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                toast.success("Consultation scheduled!", {
                  description:
                    "Our art advisor will contact you within 24 hours."
                })
              }
            >
              Schedule Private Viewing
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
