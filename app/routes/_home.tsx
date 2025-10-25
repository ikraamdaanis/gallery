import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AcquirePieces } from "components/acquire-pieces";
import { Footer } from "components/footer";
import { Navigation } from "components/navigation";
import { Toaster } from "sonner";

export const Route = createFileRoute("/_home")({
  component: LayoutComponent
});

function LayoutComponent() {
  return (
    <>
      <Navigation />
      <Outlet />
      <AcquirePieces />
      <Footer />
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}
