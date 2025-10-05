import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { c as cn, f as formatPrice } from "./router-B5VqjvSb.js";
import { motion } from "framer-motion";
import { useState } from "react";
function ArtCard({ artPiece }) {
  const [isHovered, setIsHovered] = useState(false);
  return /* @__PURE__ */ jsx(
    "article",
    {
      className: "group relative",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/art/$id",
          params: { id: artPiece.id },
          "aria-label": `View details for ${artPiece.title} by ${artPiece.artist}`,
          className: "block",
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-neutral-100", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "aspect-[3/4] w-full",
                animate: { scale: isHovered ? 1.05 : 1 },
                transition: { duration: 0.4, ease: "easeOut" },
                children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: artPiece.imageUrl,
                      alt: `${artPiece.title} by ${artPiece.artist}`,
                      className: cn(
                        "block h-full w-full object-cover transition-opacity duration-300"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 bg-black/20",
                      initial: { opacity: 0 },
                      animate: { opacity: isHovered ? 1 : 0 },
                      transition: { duration: 0.3 }
                    }
                  )
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col gap-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-neutral-900", children: artPiece.title }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-neutral-600", children: [
                  artPiece.artist,
                  " • ",
                  artPiece.year
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-neutral-900", children: formatPrice(artPiece.price, artPiece.currency) }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 capitalize", children: artPiece.rarity })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
export {
  ArtCard as A
};
