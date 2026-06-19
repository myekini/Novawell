"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MapPinned } from "lucide-react";

const services = [
  "Blood pressure, BMI, and blood sugar checks",
  "Medical consultation and referral guidance",
  "SRH and cervical cancer education",
  "Wellness packs with sanitary pads, soap, and hygiene essentials",
];

const details = [
  ["Location",     "Kwara State, Nigeria"],
  ["Audience",     "Women and young girls"],
  ["Timing",       "July 2025 planning window"],
  ["Team needed",  "Doctor, SRH specialist, program lead"],
];

const participantFlow = [
  "Arrive and register",
  "Join a short education session",
  "Complete screening checks",
  "Receive referral advice or wellness support",
];

export default function ProgramSpotlight() {
  return (
    <section id="programs" className="bg-primary-container py-section-gap-mobile md:py-section-gap-desktop text-on-primary">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full bg-earth px-4 py-1.5 label-caps text-on-primary">
              Pilot plan
            </span>
            <h2 className="headline-xl mt-5 max-w-[620px] text-on-primary">
              Healthy Women, Healthy Communities pilot.
            </h2>
            <p className="body-lg mt-6 max-w-[600px] text-on-primary-container">
              The first outreach should be treated as a field test: small enough to run well, documented enough to learn from, and useful enough for every participant who attends.
            </p>

            <div className="mt-7 grid gap-3">
              {participantFlow.map((step, idx) => (
                <div key={step} className="grid grid-cols-[40px_1fr] gap-3 border-t border-white/14 pt-3">
                  <span className="label-caps text-on-primary-container">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="body-md text-on-primary-container">{step}</span>
                </div>
              ))}
            </div>

            <a
              href="#get-involved"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-on-primary px-6 py-3 label-caps text-primary transition-colors hover:bg-primary-fixed group"
            >
              Support this outreach
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="rounded-2xl border border-white/14 bg-white/[0.04]"
          >
            <div className="grid border-b border-white/14 md:grid-cols-2">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-white/14 p-6 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="label-caps text-on-primary-container">{label}</div>
                  <div className="mt-2 headline-md text-on-primary">{value}</div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 label-caps text-on-primary-container">
                <MapPinned className="h-5 w-5" aria-hidden="true" />
                Field services
              </div>
              <div className="mt-6 grid gap-4">
                {services.map((service) => (
                  <div key={service} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-on-primary-container">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="body-md text-on-primary-container">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
