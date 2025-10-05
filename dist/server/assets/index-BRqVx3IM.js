import { jsxs, jsx } from "react/jsx-runtime";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
function AboutPage() {
  const heroRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  return /* @__PURE__ */ jsxs("main", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(motion.section, { ref: heroRef, style: {
      opacity,
      scale
    }, className: "relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-32", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }, className: "mb-6", children: /* @__PURE__ */ jsx("span", { className: "border-foreground/10 bg-brand/30 text-foreground/70 inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-wider uppercase", children: "Est. 2008" }) }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "text-foreground mb-8 text-5xl leading-[1.1] font-light tracking-tight md:text-7xl lg:text-8xl", children: [
        "Curating Legacy,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic", children: "Defining Value" })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }, className: "text-foreground/70 mx-auto max-w-2xl text-lg leading-relaxed text-pretty md:text-xl", children: "Connecting the world's most discerning collectors with museum-caliber masterpieces of historical significance. Rigorous scholarship, transparent provenance, and discreet advisory for culturally important acquisitions." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-border bg-brand border-y py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-2 lg:gap-24", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-foreground/50 mb-4 text-sm font-medium tracking-widest uppercase", children: "01 — Philosophy" }),
        /* @__PURE__ */ jsx("h2", { className: "text-foreground mb-6 text-3xl leading-tight font-light md:text-4xl", children: "A Covenant Across Generations" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 mb-4 leading-relaxed text-pretty", children: "Art transcends time, carrying the weight of human achievement from one era to the next. We specialize in historically significant works with impeccable provenance—pieces that define movements, shape cultural narratives, and command museum-level recognition." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 leading-relaxed text-pretty", children: "Our advisory harmonizes aesthetic sensibility with enduring cultural value, guiding collectors toward acquisitions that define legacies and appreciate across generations." })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.6,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-foreground/50 mb-4 text-sm font-medium tracking-widest uppercase", children: "02 — Mission & Vision" }),
        /* @__PURE__ */ jsx("h2", { className: "text-foreground mb-6 text-3xl leading-tight font-light md:text-4xl", children: "Connecting Collectors with History" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 mb-4 leading-relaxed text-pretty", children: "We exist to connect the world's most discerning collectors with rare, culturally important masterpieces—works that define eras and command attention in the world's leading museums and private collections." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 leading-relaxed text-pretty", children: "Our vision is a living archive of human achievement, cultivated through connoisseurship, conservation partnerships, and discreet global access to historically resonant art." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.6
      }, className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground mb-3 text-3xl font-light md:text-4xl", children: "Global Presence" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/60", children: "Four continents. One standard of excellence." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [{
        city: "New York",
        region: "Americas"
      }, {
        city: "London",
        region: "Europe"
      }, {
        city: "Paris",
        region: "Europe"
      }, {
        city: "Doha",
        region: "Middle East"
      }].map((location, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-50px"
      }, transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "group border-border bg-card hover:border-foreground/20 relative overflow-hidden border p-8 transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-foreground mb-2 text-2xl font-light", children: location.city }),
          /* @__PURE__ */ jsx("div", { className: "text-foreground/50 text-sm", children: location.region })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "from-foreground/[0.02] absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" })
      ] }, location.city)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-border bg-brand border-y py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.6
      }, className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground mb-3 text-3xl font-light md:text-4xl", children: "A Timeline of Care" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/60", children: "Every acquisition follows our rigorous three-phase process" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: [{
        phase: "Discovery",
        description: "Scholarly research, condition reports, and provenance verification precede every introduction. We examine historical significance, authenticity, and cultural context."
      }, {
        phase: "Acquisition",
        description: "Discreet negotiations and institutional-grade documentation ensure confident transactions. Our network spans auction houses, estates, and private collections."
      }, {
        phase: "Stewardship",
        description: "Long-term care, conservation guidance, and curatorial placement for legacy collections. We partner with leading conservators and institutions."
      }].map((item, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-50px"
      }, transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "border-border bg-card relative border p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "border-foreground/20 text-foreground/70 flex h-10 w-10 items-center justify-center border font-mono text-sm", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("h4", { className: "text-foreground text-xl font-light", children: item.phase })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 leading-relaxed text-pretty", children: item.description })
      ] }, item.phase)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.6
      }, className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-foreground mb-3 text-3xl font-light md:text-4xl", children: "Our Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/60", children: "Comprehensive advisory for discerning collectors" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 lg:grid-cols-3", children: [{
        title: "Provenance & Authenticity",
        description: "Every acquisition is vetted by leading scholars and institutions. Comprehensive documentation and provenance research accompany each work, ensuring complete confidence in authenticity and legal title."
      }, {
        title: "Advisory & Stewardship",
        description: "We advise on collection strategy, conservation, and long-term stewardship, aligning artistic vision with sound cultural investment. Our guidance spans acquisition, display, insurance, and estate planning."
      }, {
        title: "Private Viewings",
        description: "By-appointment viewings in discreet settings worldwide, with concierge-level coordination tailored to your preferences. We arrange intimate encounters with works before they enter the public market."
      }].map((service, index) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-50px"
      }, transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "group border-border bg-card hover:border-foreground/20 border p-8 transition-colors", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-foreground mb-4 text-2xl font-light", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/70 leading-relaxed text-pretty", children: service.description })
      ] }, service.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-border bg-brand border-y py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.6
      }, className: "mb-16 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-foreground mb-3 text-3xl font-light md:text-4xl", children: "Press & Recognition" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: [{
        quote: "A sanctuary for connoisseurs—where scholarship and rarity meet in perfect harmony.",
        source: "International Art Review"
      }, {
        quote: "Discreet access to the world's most compelling works, guided by unparalleled expertise.",
        source: "The Collector's Journal"
      }, {
        quote: "Unmatched commitment to provenance and cultural stewardship in the contemporary market.",
        source: "Art & Heritage Quarterly"
      }].map((testimonial, index) => /* @__PURE__ */ jsxs(motion.blockquote, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-50px"
      }, transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "border-border bg-card border p-8", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-foreground/80 mb-6 text-lg leading-relaxed", children: [
          '"',
          testimonial.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("footer", { className: "text-foreground/50 text-sm font-medium tracking-wider uppercase", children: [
          "— ",
          testimonial.source
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-100px"
    }, transition: {
      duration: 0.6
    }, children: [
      /* @__PURE__ */ jsx("h3", { className: "text-foreground mb-6 text-3xl font-light md:text-5xl", children: "Begin Your Collection Journey" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/70 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-pretty", children: "Speak with our advisory team about rare acquisition opportunities, collection strategy, and private viewings of museum-caliber works. We accommodate global time zones with complete discretion and white-glove service." }),
      /* @__PURE__ */ jsxs(motion.button, { whileHover: {
        scale: 1.02
      }, whileTap: {
        scale: 0.98
      }, className: "border-foreground bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 border px-8 py-4 font-medium transition-colors", children: [
        "Schedule Private Consultation",
        /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as component
};
