import { Link } from "@tanstack/react-router";

type FooterLink = {
  label: string;
  href?: string;
};

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Collection", href: "/collection" },
  { label: "Advisory" },
  { label: "Journal" }
];

const supportLinks: FooterLink[] = [
  { label: "Contact" },
  { label: "FAQ" },
  { label: "Privacy" },
  { label: "Terms" }
];

export function Footer() {
  return (
    <footer className="bg-brand">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-light tracking-tight text-neutral-900">
              Sovereign Atelier
            </h3>
            <p className="mt-3 max-w-md text-neutral-600">
              Curating museum-caliber masterpieces for the world's most
              discerning collectors.
            </p>
          </div>
          <nav aria-label="Company" className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wide text-neutral-700 uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-neutral-700">
              {companyLinks.map(item => (
                <li key={item.label}>
                  {item.href ? (
                    <Link to={item.href} className="hover:text-neutral-900">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="hover:text-neutral-900">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Support" className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wide text-neutral-700 uppercase">
              Support
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-neutral-700">
              {supportLinks.map(item => (
                <li key={item.label}>
                  {item.href ? (
                    <Link to={item.href} className="hover:text-neutral-900">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="hover:text-neutral-900">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()} Sovereign Atelier. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
