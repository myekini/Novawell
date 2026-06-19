"use client";

import { HeartPulse, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Contact",       href: "#contact" },
  { label: "Privacy Policy",href: "#" },
  { label: "Terms of Use",  href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-outline-variant/30 bg-surface-container">
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-6 px-8 py-16 md:flex-row md:justify-between md:py-16">

        {/* Brand block */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-primary" style={{ fontFamily: "var(--font-bricolage)", fontSize: "24px", lineHeight: "32px", fontWeight: 600 }}>
            <HeartPulse className="h-6 w-6 text-primary" aria-hidden="true" />
            NovaWell
          </div>
          <p className="body-md text-on-surface">
            Preventive health, closer to home.
          </p>
          <div className="mt-2 space-y-2">
            <a
              href="mailto:hello@novawellhealth.org"
              className="flex items-center gap-2 body-md text-secondary transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              hello@novawellhealth.org
            </a>
            <div className="flex items-center gap-2 body-md text-secondary">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              Kwara State, Nigeria
            </div>
          </div>
          <p className="label-caps text-on-surface-variant mt-4">
            © 2025 NovaWell Community Health Initiative. All rights reserved.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-3">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="label-caps text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
