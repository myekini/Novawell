"use client";

import { motion } from "framer-motion";

export default function FocusAreas() {
  const areas = [
    {
      title: "Women's wellness",
      desc: "Free screenings, consultations, and practical wellness support for women and girls.",
    },
    {
      title: "Cervical cancer awareness",
      desc: "Plain-language education on HPV, screening, prevention, and when to seek care.",
    },
    {
      title: "Reproductive health",
      desc: "Menstrual health, contraception, SRH literacy, and stigma-sensitive guidance.",
    },
    {
      title: "Health education",
      desc: "Sessions on nutrition, hypertension, diabetes prevention, and healthy living.",
    },
    {
      title: "Vaccination advocacy",
      desc: "Community conversations that improve vaccine confidence and awareness.",
    },
    {
      title: "Lifestyle medicine",
      desc: "Support for everyday choices that reduce chronic disease risk over time.",
    },
  ];

  return (
    <section id="focus" className="bg-paper py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <h2 className="text-[34px] font-black leading-[1.06] text-charcoal md:text-[46px]">
            What the pilot can responsibly offer.
          </h2>
          <p className="max-w-[640px] text-[17px] leading-[1.7] text-stone md:justify-self-end">
            The point is not to pretend one outreach replaces a clinic. The point is to catch obvious risks, answer common questions, and help women know where to go next.
          </p>
        </div>

        <div className="mt-0 grid md:grid-cols-2">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: "easeOut" }}
              className="border-b border-border py-6 md:odd:pr-10 md:even:pl-10 md:even:border-l"
            >
              <h3 className="text-[17px] font-bold text-charcoal">{area.title}</h3>
              <p className="mt-1 text-[15px] leading-[1.6] text-stone">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
