import { Button } from "components/ui/button";
import { DialogContent, DialogOverlay } from "components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

export function ImageViewer({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onClick={() => setIsOpen(true)}
      />
      <DialogOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="mx-auto h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] w-[calc(100vw-4rem)] max-w-[calc(100vw-2rem)] rounded-none bg-black"
          closeButton={false}
          ariaLabel={`Image preview: ${alt}`}
        >
          {({ close }) => (
            <section className="relative grid h-full w-full place-content-center">
              <Button
                className="absolute top-2 right-2 z-10 size-10 cursor-pointer border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800/80"
                onClick={close}
              >
                <X className="size-4 min-w-4" />
              </Button>
              <img
                src={src}
                alt={alt}
                className="h-full max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100vw-2rem)] object-scale-down object-center"
              />
            </section>
          )}
        </DialogContent>
      </DialogOverlay>
    </>
  );
}
