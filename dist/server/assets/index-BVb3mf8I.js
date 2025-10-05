import { jsxs, jsx } from "react/jsx-runtime";
import { A as ArtCard } from "./art-card-WDxZBGcm.js";
import { B as Button, R as Route } from "./router-B5VqjvSb.js";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import "@tanstack/react-router";
import "@vercel/analytics/react";
import "class-variance-authority";
import "react-aria-components";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "motion/react";
import "sonner";
function HeroSection() {
  function handleExploreClick() {
    const artSection = document.getElementById("featured-art");
    artSection?.scrollIntoView({ behavior: "smooth" });
  }
  const images = useMemo(
    () => [
      "/images/interchange.jpg",
      "/images/the-card-players.jpg",
      "/images/twelve-landscape-screens.jpg",
      "/images/empire-des-lumieres.jpg",
      "/images/flag.jpg",
      "/images/number-17a.jpg",
      "/images/orange-red-yellow.jpg",
      "/images/juin-octobre-1985.jpg",
      "/images/mont-sainte-victoire.jpg",
      "/images/onement-vi.jpg"
    ],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState((0 + 1) % images.length);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    const SHOW_MS = 4e3;
    const FADE_MS = 1e3;
    const fadeTimer = window.setTimeout(() => {
      setPrevIndex(currentIndex);
      setNextIndex((currentIndex + 1) % images.length);
      setIsFading(true);
    }, SHOW_MS - FADE_MS);
    const switchTimer = window.setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
      setIsFading(false);
    }, SHOW_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(switchTimer);
    };
  }, [currentIndex, images.length]);
  useEffect(() => {
    const preload = new Image();
    preload.src = images[(currentIndex + 1) % images.length];
  }, [currentIndex, images]);
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-10", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,200,168,0.32),transparent)] blur-2xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -bottom-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,200,255,0.26),transparent)] blur-2xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-10 md:grid-cols-2 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "order-1 md:order-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-4 text-5xl font-light tracking-tight text-neutral-900 sm:text-6xl md:text-7xl", children: "Acquire the Most Prestigious Pieces" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 max-w-2xl text-lg text-neutral-600 md:text-xl", children: "Curated masterpieces for the world's most discerning collectors" }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 max-w-2xl text-neutral-500", children: "Acquire rare works by Old Masters and modern icons, presented with absolute discretion and unparalleled provenance." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Button,
          {
            size: "lg",
            className: "bg-neutral-900 px-8 py-3 font-medium text-white hover:bg-neutral-800",
            onClick: handleExploreClick,
            "aria-label": "Explore our featured art collection",
            children: "View collection"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-6 text-sm text-neutral-500", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-neutral-300" }),
            /* @__PURE__ */ jsx("span", { children: "Provenance assured" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-neutral-300" }),
            /* @__PURE__ */ jsx("span", { children: "Private viewings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-neutral-300" }),
            /* @__PURE__ */ jsx("span", { children: "Global advisory" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "order-2 md:order-2", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -left-6 h-20 w-20 bg-white/40 backdrop-blur-sm" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-6 -bottom-6 h-24 w-24 bg-white/30 backdrop-blur-sm" }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-[500px] w-full md:aspect-[3/4] md:h-auto", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: images[isFading ? nextIndex : currentIndex],
                alt: "Artwork",
                className: "absolute inset-0 h-full w-full object-cover",
                loading: "lazy",
                fetchPriority: "low",
                decoding: "async",
                width: 600,
                height: 800
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { children: isFading && prevIndex !== null ? /* @__PURE__ */ jsx(
              motion.img,
              {
                src: images[prevIndex],
                alt: "Fading artwork",
                className: "absolute inset-0 h-full w-full object-cover",
                initial: false,
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 1, ease: "linear" }
              },
              prevIndex
            ) : null })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" })
        ] })
      ] }) })
    ] })
  ] });
}
function RouteComponent() {
  const featuredArtPieces = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx("section", { id: "featured-art", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-playfair mb-4 text-3xl font-light text-neutral-900 md:text-5xl", children: "Featured Collection" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-lg text-balance text-neutral-600", children: "Discover our most prestigious pieces, each representing the pinnacle of artistic achievement and investment potential." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: featuredArtPieces.map((artPiece) => /* @__PURE__ */ jsx(ArtCard, { artPiece }, artPiece.id)) })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
