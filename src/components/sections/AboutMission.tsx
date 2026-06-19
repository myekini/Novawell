"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pilotFacts = [
  {
    badge:     "Confirmed",
    badgeStyle: "bg-[#2E7D32]/10 text-[#2E7D32]",
    cardStyle:  "bg-[#2E7D32]/[0.05] border border-[#2E7D32]/15",
    title:     "Kwara State pilot",
    text:      "The first outreach was scoped as a women-centered rural health program in Kwara State.",
  },
  {
    badge:     "Clinical scope",
    badgeStyle: "bg-surface-variant text-on-surface-variant",
    cardStyle:  "bg-surface border border-outline-variant",
    title:     "Basic screening and SRH education",
    text:      "The service mix is intentionally narrow: checks, education, dignity kits, and referral guidance.",
  },
  {
    badge:     "Still finalizing",
    badgeStyle: "bg-[#ED6C02]/10 text-[#ED6C02]",
    cardStyle:  "bg-[#ED6C02]/[0.05] border border-[#ED6C02]/15",
    title:     "Venue, named team, and partner list",
    text:      "Those details should be published after confirmation so the site stays accurate.",
  },
];

export default function AboutMission() {
  return (
    <section id="about" className="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl aspect-[3/4] lg:col-span-5"
          >
            <Image
              src="/about-community.png"
              alt="Women in colourful dress seated together at a community gathering in West Africa"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7"
          >
            <div>
              <h2 className="headline-lg text-primary mb-4">
                A focused pilot before a big promise.
              </h2>
              <p className="body-md text-secondary">
                NovaWell Community Health Initiative is building a practical outreach model: take simple preventive services to women, document what happens, and use the evidence to improve the next visit.
              </p>
            </div>

            {/* Status items */}
            <div className="space-y-6">
              {pilotFacts.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl px-5 py-4 ${item.cardStyle}`}
                >
                  <div className="mb-2">
                    <span className={`inline-block rounded px-2 py-1 status-tag ${item.badgeStyle}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="headline-md text-primary mb-1">{item.title}</h3>
                  <p className="body-md text-secondary">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 label-caps text-on-primary transition-opacity hover:opacity-90 group"
              >
                Get involved
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
