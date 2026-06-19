"use client";

import { useState } from "react";
import { HeartPulse, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About",    href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact",   href: "#impact" },
    { name: "Partners", href: "#partners" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-background">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8 py-4">
        <a href="#top" className="flex items-center gap-2 font-bold text-primary">
          <HeartPulse className="h-6 w-6 text-primary" aria-hidden="true" />
          <span style={{ fontFamily: "var(--font-bricolage)", fontSize: "24px", lineHeight: "32px", fontWeight: 600 }}>
            NovaWell
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="label-caps text-secondary transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#get-involved"
            className="hidden items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-on-primary transition-opacity hover:opacity-80 md:inline-flex"
            style={{ fontSize: "12px", lineHeight: "16px", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase" }}
          >
            Support Work
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-primary md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-outline-variant bg-background px-8 py-5 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-[17px] font-semibold text-on-surface hover:bg-surface-container-low"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#get-involved"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-primary px-6 label-caps text-on-primary"
              >
                Support Work
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
