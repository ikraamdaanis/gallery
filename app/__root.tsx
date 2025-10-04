import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import appCss from "styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      { title: "Sovereign Atelier - World's Most Exquisite Art Collection" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  component: RootComponent
});

export function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

export function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="overscroll-none antialiased"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Toaster position="top-center" richColors closeButton />
        <Analytics debug={false} />
        <Scripts />
      </body>
    </html>
  );
}
