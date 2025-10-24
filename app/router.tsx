import { createRouter } from "@tanstack/react-router";
import { routeTree } from "app/routeTree.gen";

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 0,
    defaultPreloadStaleTime: 0,
    defaultStructuralSharing: true
  });

  return router;
}
