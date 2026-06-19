"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutMission() {
  const pilotFacts = [
    {
      label: "Confirmed",
      title: "Kwara State pilot",
      text: "The first outreach is planned as a women-centered rural health program in Kwara State.",
    },
    {
      label: "Clinical scope",
      title: "Basic screening and SRH education",
      text: "The service mix is intentionally narrow: checks, education, dignity kits, and referral guidance.",
    },
    {
      label: "Still finalizing",
      title: "Venue, named team, and partner list",
      text: "Those details should be published after confirmation so the site stays accurate.",
    },
  ];

  return (
    <section id="about" className="bg-cream py-12 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative min-h-[420px] overflow-hidden rounded-card bg-charcoal md:min-h-[560px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1779357807569-18d3df9df645?auto=format&fit=crop&w=1200&q=80"
            alt="Women in colourful dress seated together at a community gathering in West Africa"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="max-w-[680px]">
            <h2 className="text-[40px] font-black leading-[1.02] text-charcoal md:text-[58px]">
              A focused pilot before a big promise.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-stone">
              NovaWell Community Health Initiative is building a practical outreach model: take simple preventive services to women, document what happens, and use the evidence to improve the next visit.
            </p>
          </div>

          <div className="mt-9 border-t border-border">
            {pilotFacts.map((item) => (
              <div key={item.label} className="grid gap-3 border-b border-border py-5 sm:grid-cols-[120px_1fr]">
                <div className="text-[13px] font-extrabold text-sage">{item.label}</div>
                <div>
                  <h3 className="text-[18px] font-extrabold leading-tight text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-stone">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#team"
            className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-btn bg-charcoal px-5 text-[15px] font-extrabold text-white transition hover:bg-forest"
          >
            Meet the team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
