import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts
} from "@tanstack/react-router";
import { Button } from "components/ui/button";
import type { ReactNode } from "react";
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
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <main className="bg-brand flex h-[calc(100vh-10rem)] items-center justify-center pt-20">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 text-6xl">🎨</div>
          <h1 className="font-playfair mb-4 text-4xl font-light text-neutral-900">
            Page not found
          </h1>
          <p className="mb-8 text-neutral-600">
            The page you are looking for does not exist.
          </p>
          <Link to="/">
            <Button className="bg-neutral-900 text-white hover:bg-neutral-800">
              Return to Gallery
            </Button>
          </Link>
        </div>
      </main>
    );
  }
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overscroll-none antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
