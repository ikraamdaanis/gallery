"use client";

import { Link } from "@tanstack/react-router";
import { Button } from "components/ui/button";

export default function ArtNotFound() {
  return (
    <main className="bg-brand flex min-h-screen items-center justify-center pt-20">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 text-6xl">🎨</div>
        <h1 className="font-playfair mb-4 text-4xl font-light text-neutral-900">
          Artwork Not Found
        </h1>
        <p className="mb-8 text-neutral-600">
          The artwork you&apos;re looking for doesn&apos;t exist in our
          collection.
        </p>
        <Link to="/">
          <Button className="bg-neutral-900 text-white hover:bg-neutral-800">
            Return to Gallery
          </Button>
        </Link>
      </div>
    </main>
  );
}
