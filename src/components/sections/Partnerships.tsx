"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, HandHeart, Landmark } from "lucide-react";

const partners = [
  { title: "Government",    icon: Landmark,      desc: "State, local, and primary health care agencies." },
  { title: "Academic",      icon: GraduationCap, desc: "Public health schools, research groups, and student teams." },
  { title: "Civil society", icon: HandHeart,     desc: "Organizations already trusted by underserved communities." },
  { title: "CSR funders",   icon: Building2,     desc: "Companies investing in measurable community health work." },
];

export default function Partnerships() {
  return (
    <section id="partners" className="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop">
      <div className="mx-auto max-w-[1200px] px-8">

        {/* Header */}
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="headline-lg text-on-surface">
            Built for partners who need clarity.
          </h2>
          <p className="body-md text-secondary max-w-[650px] md:justify-self-end">
            NovaWell needs partners who can contribute something concrete: field access, supplies, clinical time, transport, reporting support, or pilot funding.
          </p>
        </div>

        {/* Partner cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <motion.article
                key={partner.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
                className="rounded-2xl border border-outline-variant bg-surface p-6"
              >
                <Icon className="h-5 w-5 text-on-surface-variant" aria-hidden="true" />
                <h3 className="mt-8 headline-md text-on-surface">{partner.title}</h3>
                <p className="mt-3 body-md text-secondary">{partner.desc}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Govt alignment note + CTA */}
        <div className="mt-10 grid gap-6 border-t border-outline-variant pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="body-md text-secondary max-w-[640px]">
            NovaWell is designed to work with public health systems, not around them. State, local, and primary health care alignment comes before any expansion — so outreach builds on existing priorities rather than creating a parallel promise.
          </p>
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 label-caps text-on-primary transition-opacity hover:opacity-90 group"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
