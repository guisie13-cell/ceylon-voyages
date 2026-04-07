"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ceylon-charcoal/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-ceylon-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="flex h-full flex-col px-6 py-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-ceylon-charcoal/60 transition-colors hover:bg-ceylon-charcoal/5 hover:text-ceylon-charcoal"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="mt-4 mb-8">
            <Link href="/" onClick={onClose} className="flex items-baseline gap-0.5">
              <span className="font-heading text-3xl font-normal tracking-wide text-ceylon-emerald-deep">
                Ceylon
              </span>
              <span className="font-heading text-3xl font-light italic text-ceylon-gold">
                Voyages
              </span>
            </Link>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-lg font-medium text-ceylon-charcoal/80 transition-all duration-300 hover:bg-ceylon-emerald/5 hover:text-ceylon-emerald-deep hover:pl-6"
                style={{ transitionDelay: open ? `${(i + 1) * 50}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="mt-auto pt-8">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-full bg-ceylon-gold px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-ceylon-gold-light"
            >
              Nous contacter
            </Link>
            <p className="mt-6 text-center text-sm text-ceylon-charcoal/40">
              Sri Lanka — Océan Indien
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
