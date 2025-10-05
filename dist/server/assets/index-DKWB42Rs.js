import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRouter } from "@tanstack/react-router";
import { A as ArtCard } from "./art-card-WDxZBGcm.js";
import { c as cn, B as Button$1, b as Route, g as getArtPieceById, f as formatPrice, d as getAllArtPieces } from "./router-B5VqjvSb.js";
import { X, ArrowLeft, Heart, Share2 } from "lucide-react";
import { ModalOverlay, composeRenderProps, Modal, Dialog, Button } from "react-aria-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import "@vercel/analytics/react";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "motion/react";
function DialogOverlay({
  className,
  isDismissable = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ModalOverlay,
    {
      isDismissable,
      className: composeRenderProps(
        className,
        (className2) => cn(
          "fixed inset-0 z-50 bg-black/80",
          /* Exiting */
          "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:duration-300",
          /* Entering */
          "data-[entering]:animate-in data-[entering]:fade-in-0",
          className2
        )
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  role,
  closeButton = true,
  ariaLabel,
  ariaLabelledby,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Modal,
    {
      className: composeRenderProps(
        className,
        (className2) => cn(
          "bg-background data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 fixed top-1/2 left-1/2 z-50 h-full w-full origin-center -translate-x-1/2 -translate-y-1/2 shadow-lg data-[entering]:duration-200 data-[exiting]:duration-300",
          className2
        )
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Dialog,
        {
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledby,
          role,
          className: cn("grid h-full gap-4", "h-full outline-none"),
          children: composeRenderProps(children, (children2, renderProps) => /* @__PURE__ */ jsxs(Fragment, { children: [
            children2,
            closeButton && /* @__PURE__ */ jsxs(
              Button,
              {
                onPress: renderProps.close,
                className: "ring-offset-background data-[entering]:bg-accent data-[entering]:text-muted-foreground data-[focused]:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity data-[disabled]:pointer-events-none data-[focused]:ring-2 data-[focused]:ring-offset-2 data-[focused]:outline-none data-[hovered]:opacity-100",
                children: [
                  /* @__PURE__ */ jsx(X, { className: "size-4" }),
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
                ]
              }
            )
          ] }))
        }
      )
    }
  );
}
function ImageViewer({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        className: "h-full w-full object-cover transition-transform hover:scale-105",
        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
        onClick: () => setIsOpen(true)
      }
    ),
    /* @__PURE__ */ jsx(DialogOverlay, { isOpen, onOpenChange: setIsOpen, children: /* @__PURE__ */ jsx(
      DialogContent,
      {
        className: "mx-auto h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] w-[calc(100vw-4rem)] max-w-[calc(100vw-2rem)] rounded-none bg-black",
        closeButton: false,
        ariaLabel: `Image preview: ${alt}`,
        children: ({ close }) => /* @__PURE__ */ jsxs("section", { className: "relative grid h-full w-full place-content-center", children: [
          /* @__PURE__ */ jsx(
            Button$1,
            {
              className: "absolute top-2 right-2 z-10 size-10 cursor-pointer border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800/80",
              onClick: close,
              children: /* @__PURE__ */ jsx(X, { className: "size-4 min-w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt,
              className: "h-full max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100vw-2rem)] object-scale-down object-center"
            }
          )
        ] })
      }
    ) })
  ] });
}
function ArtPiecePage() {
  const params = Route.useParams();
  const router = useRouter();
  const artPiece = getArtPieceById(params.id);
  const moreArtPieces = getMoreArtPieces(artPiece?.id ?? "", 4);
  if (!artPiece) throw new Error("Art piece not found");
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
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-6 pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(Button$1, { variant: "ghost", size: "sm", onClick: () => {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          router.history.back();
        });
      } else {
        router.history.back();
      }
    }, className: "gap-2 pl-0 transition-all ease-in-out hover:pl-4", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Collection"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "lg:top-24 lg:min-h-[calc(100dvh-6rem)]", children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-[2px] bg-neutral-100 outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2", children: /* @__PURE__ */ jsx(ImageViewer, { src: artPiece.imageUrl, alt: `${artPiece.title} by ${artPiece.artist}` }) }) }) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx(motion.h1, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.3
          }, className: "font-playfair mb-2 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl", children: artPiece.title }),
          /* @__PURE__ */ jsx(motion.p, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.4
          }, className: "font-playfair mb-4 text-xl text-neutral-600 italic", children: artPiece.artist }),
          /* @__PURE__ */ jsx(motion.p, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.5
          }, className: "text-3xl font-semibold text-neutral-900", children: formatPrice(artPiece.price, artPiece.currency) })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.6
        }, className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-lg font-medium text-neutral-900", children: "Description" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-neutral-700", children: artPiece.description })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.7
        }, className: "mb-8 grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 font-medium text-neutral-900", children: "Details" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-neutral-600", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Medium:" }),
                " ",
                artPiece.medium
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Year:" }),
                " ",
                artPiece.year
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Dimensions:" }),
                " ",
                artPiece.dimensions
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category:" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "capitalize", children: artPiece.category })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Rarity:" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "capitalize", children: artPiece.rarity })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 font-medium text-neutral-900", children: "Provenance" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-neutral-600", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Collection:" }),
                " ",
                artPiece.provenance
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Exhibition:" }),
                " ",
                artPiece.exhibition
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.8
        }, className: "flex flex-col gap-4 sm:flex-row", children: [
          /* @__PURE__ */ jsx(Button$1, { size: "lg", onClick: handleInquire, className: "flex-1 bg-neutral-900 text-white hover:bg-neutral-800", children: "Inquire About This Piece" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button$1, { variant: "outline", size: "icon", onClick: handleFavorite, className: "gap-2", children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx(Button$1, { variant: "outline", size: "icon", onClick: handleShare, className: "gap-2", children: /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(motion.section, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1,
      duration: 0.8
    }, className: "bg-brand mt-16 py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-playfair mb-6 text-3xl font-light text-neutral-900", children: "Investment Opportunity" }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-balance text-neutral-600", children: "This masterpiece represents not only artistic excellence but also a sound investment in cultural heritage. Our expert curation team ensures authenticity and provenance for every acquisition." }),
      /* @__PURE__ */ jsx(Button$1, { size: "lg", onClick: () => toast.success("Consultation scheduled!", {
        description: "Our art advisor will contact you within 24 hours."
      }), children: "Schedule Private Viewing" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "more-art", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-playfair mb-4 text-3xl font-light text-neutral-900", children: "More to Discover" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-lg text-balance text-neutral-600", children: "Explore additional works from our collection curated just for you." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6", children: moreArtPieces.map((piece) => /* @__PURE__ */ jsx(ArtCard, { artPiece: piece }, piece.id)) })
    ] }) })
  ] });
}
function getMoreArtPieces(excludeId, take) {
  const pool = getAllArtPieces().filter((p) => p.id !== excludeId);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, take);
}
export {
  ArtPiecePage as component
};
