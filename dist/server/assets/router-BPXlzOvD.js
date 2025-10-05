import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Analytics } from "@vercel/analytics/react";
import { cva } from "class-variance-authority";
import { Button as Button$1, composeRenderProps } from "react-aria-components";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] text-sm font-medium  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[pressed]:scale-[98%] transition cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-500",
        destructive: "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-300",
        outline: "border border-neutral-300 bg-white hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-300",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-neutral-300",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-300",
        link: "text-neutral-900 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-neutral-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[2px] px-3",
        lg: "min-h-10 h-10 rounded-[2px] px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsx(
    Button$1,
    {
      className: composeRenderProps(
        className,
        (className2) => cn(
          buttonVariants({
            variant,
            size,
            className: className2
          })
        )
      ),
      ...props
    }
  );
}
function AcquirePieces() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    /* @__PURE__ */ jsx("section", { className: "bg-neutral-50 py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "font-playfair mb-6 text-3xl font-light text-neutral-900", children: "Acquire Masterpieces" }),
          /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-balance text-neutral-600", children: "Each piece in our collection represents not just artistic excellence, but a sound investment in cultural heritage. Our expert curation team ensures authenticity and provenance for every acquisition." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-neutral-900 text-white hover:bg-neutral-800",
              children: "Schedule Consultation"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "h-[500px] px-6 py-8 xl:py-16", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/images/mont-sainte-victoire.jpg",
        alt: "About",
        className: "mx-auto h-full w-full max-w-7xl object-cover"
      }
    ) })
  ] });
}
const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Collection", href: "/collection" },
  { label: "Advisory" },
  { label: "Journal" }
];
const supportLinks = [
  { label: "Contact" },
  { label: "FAQ" },
  { label: "Privacy" },
  { label: "Terms" }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-brand", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-playfair text-2xl font-light tracking-tight text-neutral-900", children: "Sovereign Atelier" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-neutral-600", children: "Curating museum-caliber masterpieces for the world's most discerning collectors." })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Company", className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold tracking-wide text-neutral-700 uppercase", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 text-sm text-neutral-700", children: companyLinks.map((item) => /* @__PURE__ */ jsx("li", { children: item.href ? /* @__PURE__ */ jsx(Link, { to: item.href, className: "hover:text-neutral-900", children: item.label }) : /* @__PURE__ */ jsx("span", { className: "hover:text-neutral-900", children: item.label }) }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Support", className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold tracking-wide text-neutral-700 uppercase", children: "Support" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 text-sm text-neutral-700", children: supportLinks.map((item) => /* @__PURE__ */ jsx("li", { children: item.href ? /* @__PURE__ */ jsx(Link, { to: item.href, className: "hover:text-neutral-900", children: item.label }) : /* @__PURE__ */ jsx("span", { className: "hover:text-neutral-900", children: item.label }) }, item.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm text-neutral-600", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sovereign Atelier. All rights reserved."
    ] }) })
  ] }) });
}
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsxs("h2", { className: "font-playfair text-3xl font-semibold tracking-tight text-neutral-900", children: [
            "Sovereign ",
            /* @__PURE__ */ jsx("span", { className: "italic", children: "Atelier" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-8 md:flex", children: [
            /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-6", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/collection",
                  className: "text-neutral-600 transition-colors hover:text-neutral-900",
                  "aria-label": "View art collection",
                  children: "Collection"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#artists",
                  className: "text-neutral-600 transition-colors hover:text-neutral-900",
                  "aria-label": "Browse artists",
                  children: "Artists"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/about",
                  className: "text-neutral-600 transition-colors hover:text-neutral-900",
                  "aria-label": "About Sovereign Atelier",
                  children: "About"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "border-neutral-300 text-neutral-700 hover:bg-neutral-50",
                children: "Inquire"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center md:hidden", children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "aria-expanded": menuOpen,
              "aria-controls": "mobile-menu",
              className: "h-[unset] border-neutral-300 p-0 text-neutral-700 hover:bg-neutral-50",
              onClick: () => setMenuOpen((v) => !v),
              children: /* @__PURE__ */ jsx(Menu, { className: "size-6 min-w-6" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: menuOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            id: "mobile-menu",
            className: "border-t border-neutral-200 bg-white md:hidden",
            initial: { opacity: 0, height: 0, y: -8 },
            animate: { opacity: 1, height: "auto", y: 0 },
            exit: { opacity: 0, height: 0, y: -8 },
            transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
            children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-4", children: /* @__PURE__ */ jsxs(
              motion.nav,
              {
                className: "flex flex-col gap-4",
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -8 },
                transition: {
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/",
                      className: "text-neutral-700",
                      "aria-label": "View art collection",
                      children: "Collection"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#artists",
                      className: "text-neutral-700",
                      "aria-label": "Browse artists",
                      children: "Artists"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/about",
                      className: "text-neutral-700",
                      "aria-label": "About Sovereign Atelier",
                      children: "About"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "justify-start border-neutral-300 text-neutral-700 hover:bg-neutral-50",
                      children: "Inquire"
                    }
                  )
                ]
              }
            ) })
          }
        ) })
      ]
    }
  );
}
const appCss = "/assets/globals-DfcJvG54.css";
const Route$4 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }, {
      title: "Sovereign Atelier - World's Most Exquisite Art Collection"
    }],
    links: [{
      rel: "stylesheet",
      href: appCss
    }]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "overscroll-none antialiased", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Navigation, {}),
      children,
      /* @__PURE__ */ jsx(AcquirePieces, {}),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Toaster, { position: "top-center", richColors: true, closeButton: true }),
      /* @__PURE__ */ jsx(Analytics, { debug: false }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const artPieces = [
  {
    id: "1",
    title: "Interchange",
    artist: "Willem de Kooning",
    year: 1955,
    price: 3e8,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "200.7 cm × 175.3 cm (79 in × 69 in)",
    description: "Abstract expressionist masterpiece featuring bold brushstrokes and vibrant colors, representing the pinnacle of de Kooning's artistic achievement. This monumental work exemplifies the artist's revolutionary approach to form and space.",
    imageUrl: "/images/interchange.jpg",
    category: "painting",
    provenance: "Kenneth C. Griffin Collection",
    exhibition: "Museum of Modern Art, New York",
    rarity: "unique",
    featured: true
  },
  {
    id: "2",
    title: "The Card Players",
    artist: "Paul Cézanne",
    year: 1895,
    price: 275e6,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "97 cm × 130 cm (38 in × 51 in)",
    description: "One of five paintings in Cézanne's iconic Card Players series, depicting Provençal peasants immersed in their card game. This masterpiece represents the bridge between Impressionism and modern art.",
    imageUrl: "/images/the-card-players.jpg",
    category: "painting",
    provenance: "State of Qatar",
    exhibition: "Musée d'Orsay, Paris",
    rarity: "limited-edition",
    featured: true
  },
  {
    id: "3",
    title: "Twelve Landscape Screens",
    artist: "Qi Baishi",
    year: 1925,
    price: 1408e5,
    currency: "USD",
    medium: "Ink and color on paper",
    dimensions: "180 cm × 47 cm each (71 in × 18.5 in)",
    description: "A magnificent set of twelve landscape screens by the master of Chinese painting, showcasing seasonal changes through delicate brushwork and poetic sensibility. Each screen captures the essence of traditional Chinese landscape painting.",
    imageUrl: "/images/twelve-landscape-screens.jpg",
    category: "painting",
    provenance: "Private Asian Collection",
    exhibition: "National Museum of China, Beijing",
    rarity: "unique",
    featured: true
  },
  {
    id: "4",
    title: "L'empire des lumières",
    artist: "René Magritte",
    year: 1961,
    price: 1211e5,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "114.5 cm × 146.5 cm (45 in × 57.7 in)",
    description: "A surrealist masterpiece depicting the paradox of day and night existing simultaneously. Magritte's exploration of light and darkness creates a dreamlike quality that challenges perception and reality.",
    imageUrl: "/images/empire-des-lumieres.jpg",
    category: "painting",
    provenance: "Private European Collection",
    exhibition: "Centre Pompidou, Paris",
    rarity: "limited-edition",
    featured: true
  },
  {
    id: "5",
    title: "Flag",
    artist: "Jasper Johns",
    year: 1958,
    price: 11e7,
    currency: "USD",
    medium: "Encaustic, oil, and collage on fabric mounted on plywood",
    dimensions: "107.3 cm × 153.8 cm (42.25 in × 60.63 in)",
    description: "An iconic work of American pop art and neo-Dada, Johns' Flag series challenged traditional notions of painting and representation. This piece blurs the line between art object and symbol.",
    imageUrl: "/images/flag.jpg",
    category: "painting",
    provenance: "Museum of Modern Art, New York",
    exhibition: "Whitney Museum of American Art, New York",
    rarity: "limited-edition",
    featured: false
  },
  {
    id: "6",
    title: "Number 17A",
    artist: "Jackson Pollock",
    year: 1948,
    price: 2e8,
    currency: "USD",
    medium: "Oil on fiberboard",
    dimensions: "112 cm × 86.4 cm (44 in × 34 in)",
    description: "Abstract expressionist drip painting exemplifying Pollock's revolutionary technique and artistic vision. This work demonstrates the artist's unique approach to gesture, rhythm, and the physical act of painting.",
    imageUrl: "/images/number-17a.jpg",
    category: "painting",
    provenance: "Kenneth C. Griffin Collection",
    exhibition: "Museum of Modern Art, New York",
    rarity: "unique",
    featured: true
  },
  {
    id: "7",
    title: "Orange, Red, Yellow",
    artist: "Mark Rothko",
    year: 1961,
    price: 186e6,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "236.2 cm × 206.4 cm (93 in × 81.25 in)",
    description: "A monumental color field painting that exemplifies Rothko's mature style. The luminous rectangles of color create a meditative, almost spiritual experience, inviting deep contemplation.",
    imageUrl: "/images/orange-red-yellow.jpg",
    category: "painting",
    provenance: "Private Collection",
    exhibition: "Tate Modern, London",
    rarity: "unique",
    featured: true
  },
  {
    id: "8",
    title: "Juin-Octobre 1985",
    artist: "Zao Wou-Ki",
    year: 1985,
    price: 65e6,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "280 cm × 1000 cm (110 in × 394 in)",
    description: "A monumental triptych that represents the pinnacle of Zao Wou-Ki's artistic achievement, blending Eastern philosophy with Western abstract expressionism. This work captures the essence of time and nature.",
    imageUrl: "/images/juin-octobre-1985.jpg",
    category: "painting",
    provenance: "Private Collection, Hong Kong",
    exhibition: "Musée d'Art Moderne, Paris",
    rarity: "unique",
    featured: false
  },
  {
    id: "9",
    title: "Mont Sainte-Victoire",
    artist: "Paul Cézanne",
    year: 1904,
    price: 6e7,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "73 cm × 91.9 cm (28.7 in × 36.2 in)",
    description: "One of Cézanne's final masterpieces depicting the mountain that obsessed him throughout his career. This work shows his revolutionary approach to form and color that would influence generations of artists.",
    imageUrl: "/images/mont-sainte-victoire.jpg",
    category: "painting",
    provenance: "Private Collection, Switzerland",
    exhibition: "Musée d'Orsay, Paris",
    rarity: "rare",
    featured: false
  },
  {
    id: "10",
    title: "Onement VI",
    artist: "Barnett Newman",
    year: 1953,
    price: 438e5,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "259.1 cm × 213.4 cm (102 in × 84 in)",
    description: "A monumental work from Newman's Onement series, featuring his signature 'zip' - a vertical line that divides the canvas. This painting explores themes of creation, spirituality, and the sublime.",
    imageUrl: "/images/onement-vi.jpg",
    category: "painting",
    provenance: "Sotheby's New York",
    exhibition: "Museum of Modern Art, New York",
    rarity: "limited-edition",
    featured: false
  }
];
function getFeaturedArtPieces() {
  return artPieces.filter((piece) => piece.featured);
}
function getArtPieceById(id) {
  return artPieces.find((piece) => piece.id === id);
}
function getAllArtPieces() {
  return artPieces;
}
function formatPrice(price, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}
const $$splitComponentImporter$3 = () => import("./index-CKN0dQPN.js");
const Route$3 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  loader: () => getFeaturedArtPieces()
});
const $$splitComponentImporter$2 = () => import("./index-DQP5xqBt.js");
const Route$2 = createFileRoute("/collection/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: () => getAllArtPieces()
});
const $$splitComponentImporter$1 = () => import("./index-9FN-TkZF.js");
const Route$1 = createFileRoute("/about/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitErrorComponentImporter = () => import("./index-QM0ge2Cg.js");
const $$splitComponentImporter = () => import("./index-DmgkD3iI.js");
const Route = createFileRoute("/art/$id/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: ({
    params
  }) => {
    return getArtPieceById(params.id);
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const CollectionIndexRoute = Route$2.update({
  id: "/collection/",
  path: "/collection/",
  getParentRoute: () => Route$4
});
const AboutIndexRoute = Route$1.update({
  id: "/about/",
  path: "/about/",
  getParentRoute: () => Route$4
});
const ArtIdIndexRoute = Route.update({
  id: "/art/$id/",
  path: "/art/$id/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutIndexRoute,
  CollectionIndexRoute,
  ArtIdIndexRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent"
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$3 as R,
  Route$2 as a,
  Route as b,
  cn as c,
  getAllArtPieces as d,
  formatPrice as f,
  getArtPieceById as g,
  router as r
};
