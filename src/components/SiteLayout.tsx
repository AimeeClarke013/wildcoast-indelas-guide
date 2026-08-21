import { Link } from "@tanstack/react-router";
import { Menu, X, Mountain } from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Hiking Packages" },
  { to: "/about", label: "About" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Mountain className="h-5 w-5" />
            </span>
            <span className="text-lg font-black tracking-tight">Indlela Adventures</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Plan your hike
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                  activeProps={{ className: "text-primary font-semibold bg-muted" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-[color:var(--forest-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--sand)] text-[color:var(--forest-deep)]">
                <Mountain className="h-5 w-5" />
              </span>
              <span className="text-lg font-black">Indlela Adventures</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/70">
              Community-based hiking tours along South Africa's pristine Wild Coast.
              Walk with the people of the land.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Wild Coast, Eastern Cape</li>
              <li>South Africa</li>
              <li>indlelaadventures@gmail.com</li>
              <li>+27 82 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 sm:px-6">
            © {new Date().getFullYear()} Indlela Adventures. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}