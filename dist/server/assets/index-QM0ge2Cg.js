import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./router-BPXlzOvD.js";
import "@vercel/analytics/react";
import "class-variance-authority";
import "react-aria-components";
import "clsx";
import "tailwind-merge";
import "motion/react";
import "lucide-react";
import "react";
import "sonner";
const SplitErrorComponent = () => {
  return /* @__PURE__ */ jsx("main", { className: "bg-brand flex min-h-screen items-center justify-center pt-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 text-6xl", children: "🎨" }),
    /* @__PURE__ */ jsx("h1", { className: "font-playfair mb-4 text-4xl font-light text-neutral-900", children: "Artwork Not Found" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-neutral-600", children: "The artwork you're looking for doesn't exist in our collection." }),
    /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(Button, { className: "bg-neutral-900 text-white hover:bg-neutral-800", children: "Return to Gallery" }) })
  ] }) });
};
export {
  SplitErrorComponent as errorComponent
};
