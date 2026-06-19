"use client";

import { motion } from "framer-motion";

const areas = [
  { title: "Women's wellness",       desc: "Free screenings, consultations, and practical wellness support for women and girls." },
  { title: "Cervical cancer awareness", desc: "Plain-language education on HPV, screening, prevention, and when to seek care." },
  { title: "Reproductive health",    desc: "Menstrual health, contraception, SRH literacy, and stigma-sensitive guidance." },
  { title: "Health education",       desc: "Sessions on nutrition, hypertension, diabetes prevention, and healthy living." },
  { title: "Vaccination advocacy",   desc: "Community conversations that improve vaccine confidence and awareness." },
  { title: "Lifestyle medicine",     desc: "Support for everyday choices that reduce chronic disease risk over time." },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="bg-background py-section-gap-mobile md:py-section-gap-desktop">
      <div className="mx-auto max-w-[1200px] px-8">

        {/* Header */}
        <div className="grid gap-6 border-b border-outline-variant pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <h2 className="headline-lg text-on-surface">
            What the pilot can responsibly offer.
          </h2>
          <p className="body-md text-secondary max-w-[640px] md:justify-self-end">
            The point is not to pretend one outreach replaces a clinic. The point is to catch obvious risks, answer common questions, and help women know where to go next.
          </p>
        </div>

        {/* Divider list */}
        <div className="grid md:grid-cols-2">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
              className="border-b border-outline-variant py-6 md:odd:pr-10 md:even:border-l md:even:pl-10"
            >
              <h3 className="text-[17px] font-semibold text-on-surface" style={{ fontFamily: "var(--font-bricolage)" }}>
                {area.title}
              </h3>
              <p className="mt-1 body-md text-secondary">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
