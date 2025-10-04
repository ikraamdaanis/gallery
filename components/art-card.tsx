"use client";

import { Link } from "@tanstack/react-router";
import type { ArtPiece } from "data/art-pieces";
import { formatPrice } from "data/art-pieces";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "utils/cn";

type ArtCardProps = {
  artPiece: ArtPiece;
  index: number;
};

export function ArtCard({ artPiece, index }: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to="/art/$id"
        params={{ id: artPiece.id }}
        aria-label={`View details for ${artPiece.title} by ${artPiece.artist}`}
        className="block"
      >
        <div className="relative overflow-hidden bg-neutral-100">
          <motion.div
            className="aspect-[3/4] w-full"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative h-full w-full">
              <img
                src={artPiece.imageUrl}
                alt={`${artPiece.title} by ${artPiece.artist}`}
                className={cn(
                  "h-full w-full object-cover transition-opacity duration-300"
                )}
              />
              <motion.div
                className="absolute inset-0 bg-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-4 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div>
            <h3 className="text-lg font-medium text-neutral-900">
              {artPiece.title}
            </h3>
            <p className="text-sm text-neutral-600">
              {artPiece.artist} • {artPiece.year}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-neutral-900">
              {formatPrice(artPiece.price, artPiece.currency)}
            </p>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 capitalize">
              {artPiece.rarity}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
