"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function ContactFooter() {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Program", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Team", href: "#team" },
    { label: "Volunteer", href: "#get-involved" },
    { label: "Partners", href: "#partners" },
  ];

  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8 md:py-20">
        <div>
          <div className="text-[13px] font-extrabold text-sage">Contact NovaWell</div>
          <h2 className="mt-3 max-w-[520px] text-[38px] font-black leading-[1.04] md:text-[52px]">
            Help make the Kwara pilot real.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/62">
            The strongest next step is a practical one: supplies, clinical support, field access, documentation, or funding.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-bold text-white/62 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <div className="space-y-4">
            <a
              href="mailto:hello@novawellhealth.org"
              className="flex items-center gap-3 text-[15px] font-semibold text-white/72 transition hover:text-white"
            >
              <Mail className="h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
              hello@novawellhealth.org
            </a>
            <div className="flex items-center gap-3 text-[15px] font-semibold text-white/72">
              <MapPin className="h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
              Kwara State, Nigeria
            </div>
            <div className="border-t border-white/10 pt-4 text-[13px] font-semibold leading-[1.6] text-white/48">
              Phone number, social links, and named partner channels should be added only after they are confirmed.
            </div>
          </div>

          <div className="mt-7">
            <a
              href="mailto:hello@novawellhealth.org?subject=NovaWell%20pilot%20support"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-white px-5 text-[15px] font-extrabold text-charcoal transition hover:bg-mint"
            >
              Email the team
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 text-[13px] font-semibold text-white/45 md:flex-row md:items-center md:justify-between">
          <span>Copyright 2025 NovaWell Health Initiative. All rights reserved.</span>
          <span>Preventive health, closer to home.</span>
        </div>
      </div>
    </footer>
  );
}
