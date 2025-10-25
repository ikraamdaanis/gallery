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
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart({
      srcDirectory: "./app",
      router: {
        routesDirectory: "./routes"
      },
      prerender: {
        enabled: true,
        crawlLinks: true, // This will follow all links and prerender them
        concurrency: 4
      }
    }),
    netlify(),
    viteReact()
  ]
});
