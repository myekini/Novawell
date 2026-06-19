"use client";

import { useEffect, useState } from "react";
import { HeartPulse, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const sections = ["about", "programs", "impact", "team", "partners", "get-involved"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0.05,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 32);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Program", href: "#programs", id: "programs" },
    { name: "Impact", href: "#impact", id: "impact" },
    { name: "Team", href: "#team", id: "team" },
    { name: "Partners", href: "#partners", id: "partners" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition duration-200 ${
        hasScrolled
          ? "border-border bg-paper/95 shadow-nav backdrop-blur"
          : "border-white/10 bg-ink/35 text-white backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:h-[76px] md:px-8">
        <a href="#top" className="group flex items-center gap-3 focus:outline-none">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-btn border transition ${
              hasScrolled ? "border-border bg-white text-forest" : "border-white/25 bg-white/10 text-white"
            }`}
          >
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`text-[20px] font-extrabold ${hasScrolled ? "text-charcoal" : "text-white"}`}>
              NovaWell
            </span>
            <span className={`mt-1 hidden text-[12px] font-medium md:block ${hasScrolled ? "text-stone" : "text-white/72"}`}>
              Community Health Initiative
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-btn px-3 py-2 text-[14px] font-semibold transition ${
                  isActive
                    ? hasScrolled
                      ? "bg-forest-light text-forest"
                      : "bg-white/15 text-white"
                    : hasScrolled
                      ? "text-stone hover:bg-forest-light hover:text-forest"
                      : "text-white/78 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#get-involved"
            className={`hidden min-h-11 items-center justify-center rounded-btn px-4 text-[14px] font-bold transition md:inline-flex ${
              hasScrolled
                ? "bg-charcoal text-white hover:bg-forest"
                : "bg-white text-charcoal hover:bg-mint"
            }`}
          >
            Support work
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-btn transition md:hidden ${
              hasScrolled ? "bg-white text-charcoal" : "bg-white/10 text-white"
            }`}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="border-t border-border bg-paper px-5 py-5 shadow-nav md:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-btn px-2 py-3 text-[17px] font-semibold text-charcoal hover:bg-forest-light"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#get-involved"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center rounded-btn bg-charcoal px-5 text-[15px] font-bold text-white"
              >
                Support work
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
