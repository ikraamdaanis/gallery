"use client";

import { Navigation } from "components/navigation";
import { Button } from "components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ArtNotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="flex min-h-screen items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 text-6xl"
          >
            🎨
          </motion.div>
          <h1 className="mb-4 text-2xl font-light text-neutral-900">
            Artwork Not Found
          </h1>
          <p className="mb-8 text-neutral-600">
            The artwork you&apos;re looking for doesn&apos;t exist in our
            collection.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Return to Gallery
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
