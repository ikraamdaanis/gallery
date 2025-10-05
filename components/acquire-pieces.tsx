import { Button } from "components/ui/button";
import { motion } from "motion/react";

export function AcquirePieces() {
  return (
    <>
      {" "}
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
              expert curation team ensures authenticity and provenance for every
              acquisition.
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
      <div className="h-[500px] px-6 py-8 xl:py-16">
        <img
          src="/images/mont-sainte-victoire.jpg"
          alt="About"
          className="mx-auto h-full w-full max-w-7xl object-cover"
        />
      </div>
    </>
  );
}
