"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, HandHeart, Landmark } from "lucide-react";

export default function Partnerships() {
  const partners = [
    { title: "Government", icon: Landmark, desc: "State, local, and primary health care agencies." },
    { title: "Academic", icon: GraduationCap, desc: "Public health schools, research groups, and student teams." },
    { title: "Civil society", icon: HandHeart, desc: "Organizations already trusted by underserved communities." },
    { title: "CSR funders", icon: Building2, desc: "Companies investing in measurable community health work." },
  ];

  return (
    <section id="partners" className="bg-paper py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-[38px] font-black leading-[1.04] text-charcoal md:text-[54px]">
            Built for partners who need clarity.
          </h2>
          <p className="max-w-[650px] text-[17px] leading-[1.7] text-stone md:justify-self-end">
            NovaWell needs partners who can contribute something concrete: field access, supplies, clinical time, transport, reporting support, or pilot funding.
          </p>
        </div>

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
                className="rounded-card border border-border bg-white p-6"
              >
                <Icon className="h-5 w-5 text-sky" aria-hidden="true" />
                <h3 className="mt-8 text-[19px] font-black leading-tight text-charcoal">{partner.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-stone">{partner.desc}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="max-w-[640px] text-[16px] leading-[1.7] text-stone">
              NovaWell is designed to work with public health systems, not around them. State, local, and primary health care alignment comes before any expansion — so outreach builds on existing priorities rather than creating a parallel promise.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-charcoal px-5 text-[15px] font-extrabold text-white transition hover:bg-forest"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
