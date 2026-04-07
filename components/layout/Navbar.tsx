"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/itineraires", label: "Itinéraires" },
  { href: "/pratique", label: "Pratique" },
  { href: "/galerie", label: "Galerie" },
  { href: "/budget", label: "Budget" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-ceylon-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-0.5">
            <span
              className={cn(
                "font-heading text-2xl font-normal tracking-wide transition-colors duration-300",
                scrolled ? "text-ceylon-emerald-deep" : "text-white"
              )}
            >
              Ceylon
            </span>
            <span
              className={cn(
                "font-heading text-2xl font-light italic transition-colors duration-300",
                scrolled ? "text-ceylon-gold" : "text-ceylon-gold-light"
              )}
            >
              Voyages
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors duration-300",
                    "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-ceylon-gold after:transition-all after:duration-300 hover:after:w-full",
                    scrolled
                      ? "text-ceylon-charcoal/70 hover:text-ceylon-emerald-deep"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 lg:inline-flex",
                scrolled
                  ? "bg-ceylon-gold text-white hover:bg-ceylon-gold-light"
                  : "border border-white/40 text-white hover:bg-white/10"
              )}
            >
              Nous contacter
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 transition-colors lg:hidden",
                scrolled
                  ? "text-ceylon-charcoal hover:bg-ceylon-charcoal/5"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  "block h-0.5 w-6 transition-colors",
                  scrolled ? "bg-ceylon-charcoal" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 transition-colors",
                  scrolled ? "bg-ceylon-charcoal" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-4 transition-colors",
                  scrolled ? "bg-ceylon-charcoal" : "bg-white"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
