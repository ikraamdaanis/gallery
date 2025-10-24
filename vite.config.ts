import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000
  },
  ssr: {
    noExternal: ["motion/react", "sonner"]
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  plugins: [
    tailwindcss(),
    // Enables Vite to resolve imports using path aliases.
    tsconfigPaths(),
    tanstackStart({
      srcDirectory: "./app", // This is the default
      router: {
        // Specifies the directory TanStack Router uses for your routes.
        routesDirectory: "./routes" // Defaults to "routes", relative to srcDirectory
      },
      prerender: {
        // Enable prerendering
        enabled: true,

        // How many prerender jobs to run at once
        concurrency: 4,

        // Whether to extract links from the HTML and prerender them also
        crawlLinks: true,

        // Filter function takes the page object and returns whether it should prerender
        filter: ({ path }) => !path.startsWith("/do-not-render-me"),

        // Number of times to retry a failed prerender job
        retryCount: 1,

        // Delay between retries in milliseconds
        retryDelay: 500
      }
    }),
    viteReact(),
    netlify()
  ]
});
