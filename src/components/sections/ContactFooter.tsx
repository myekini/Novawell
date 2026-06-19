"use client";

import { HeartPulse, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Programs",     href: "#programs" },
  { label: "Impact",       href: "#impact" },
  { label: "Attend",       href: "#attend" },
  { label: "Get involved", href: "#get-involved" },
  { label: "Partners",     href: "#partners" },
];

const contactPaths = [
  {
    label: "Volunteers & healthcare workers",
    cta:   "Use the form above",
    href:  "#get-involved",
  },
  {
    label: "Partners & funders",
    cta:   "hello@novawellhealth.org",
    href:  "mailto:hello@novawellhealth.org?subject=Partnership%20inquiry%20%E2%80%94%20NovaWell",
  },
  {
    label: "Community members & outreach questions",
    cta:   "hello@novawellhealth.org",
    href:  "mailto:hello@novawellhealth.org?subject=Outreach%20question%20%E2%80%94%20NovaWell",
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-outline-variant/30 bg-surface-container">
      <div className="mx-auto w-full max-w-[1200px] px-8 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr_auto]">

          {/* Brand block */}
          <div className="flex flex-col gap-4">
            <div className="font-display flex items-center gap-2 text-[24px] font-semibold leading-8 text-primary">
              <HeartPulse className="h-6 w-6 text-primary" aria-hidden="true" />
              NovaWell
            </div>
            <p className="body-md text-on-surface">
              Preventive health, closer to home.
            </p>
            <div className="flex items-center gap-2 body-md text-secondary">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              Kwara State, Nigeria
            </div>
            <p className="label-caps text-on-surface-variant mt-2">
              © 2026 NovaWell Community Health Initiative. All rights reserved.
            </p>
          </div>

          {/* Contact paths */}
          <div className="flex flex-col gap-4">
            <p className="label-caps text-on-surface-variant">Get in touch</p>
            <div className="flex flex-col gap-3">
              {contactPaths.map((path) => (
                <div key={path.label} className="border-t border-outline-variant pt-3">
                  <p className="body-md text-secondary text-sm">{path.label}</p>
                  <a
                    href={path.href}
                    className="body-md font-medium text-primary hover:underline"
                  >
                    {path.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <p className="label-caps text-on-surface-variant">Navigate</p>
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
      </div>
    </footer>
  );
}
