import { jsx, jsxs } from "react/jsx-runtime";
import { A as ArtCard } from "./art-card-UdcSj2xA.js";
import { a as Route } from "./router-BPXlzOvD.js";
import "@tanstack/react-router";
import "motion/react";
import "react";
import "@vercel/analytics/react";
import "class-variance-authority";
import "react-aria-components";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "sonner";
function CollectionPage() {
  const pieces = Route.useLoaderData();
  return /* @__PURE__ */ jsx("main", { className: "mb-12 pt-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-playfair mb-8 text-3xl font-light tracking-tight text-neutral-900 md:text-4xl", children: "Collection" }),
    /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: pieces.map((piece) => /* @__PURE__ */ jsx(ArtCard, { artPiece: piece }, piece.id)) })
  ] }) });
}
export {
  CollectionPage as component
};
