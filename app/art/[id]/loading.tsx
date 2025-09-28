"use client";

import { Navigation } from "components/navigation";
import { motion } from "framer-motion";

export default function ArtLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="mb-6 h-6 w-32 animate-pulse rounded bg-neutral-200" />
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] animate-pulse rounded-lg bg-neutral-200" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <div className="mb-2 h-12 w-3/4 animate-pulse rounded bg-neutral-200" />
                <div className="mb-4 h-6 w-1/2 animate-pulse rounded bg-neutral-200" />
                <div className="mb-8 h-8 w-1/3 animate-pulse rounded bg-neutral-200" />
              </div>
              <div className="mb-8">
                <div className="mb-4 h-6 w-1/4 animate-pulse rounded bg-neutral-200" />
                <div className="space-y-2">
                  <div className="h-4 animate-pulse rounded bg-neutral-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-neutral-200" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 flex-1 animate-pulse rounded bg-neutral-200" />
                <div className="h-12 w-12 animate-pulse rounded bg-neutral-200" />
                <div className="h-12 w-12 animate-pulse rounded bg-neutral-200" />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
