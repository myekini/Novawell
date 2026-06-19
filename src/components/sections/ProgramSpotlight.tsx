"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MapPinned } from "lucide-react";

export default function ProgramSpotlight() {
  const services = [
    "Blood pressure, BMI, and blood sugar checks",
    "Medical consultation and referral guidance",
    "SRH and cervical cancer education",
    "Wellness packs with sanitary pads, soap, and hygiene essentials",
  ];

  const details = [
    ["Location", "Kwara State, Nigeria"],
    ["Audience", "Women and young girls"],
    ["Timing", "July 2025 planning window"],
    ["Team needed", "Doctor, SRH specialist, program lead"],
  ];

  const participantFlow = [
    "Arrive and register",
    "Join a short education session",
    "Complete screening checks",
    "Receive referral advice or wellness support",
  ];

  return (
    <section id="programs" className="bg-charcoal py-12 text-white md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="inline-flex min-h-8 items-center rounded-btn bg-earth px-3 text-[13px] font-extrabold text-white">
              Pilot plan
            </span>
            <h2 className="mt-5 max-w-[620px] text-[40px] font-black leading-[1.02] md:text-[60px]">
              Healthy Women, Healthy Communities pilot.
            </h2>
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.7] text-white/76">
              The first outreach should be treated as a field test: small enough to run well, documented enough to learn from, and useful enough for every participant who attends.
            </p>
            <div className="mt-7 grid gap-3">
              {participantFlow.map((step, idx) => (
                <div key={step} className="grid grid-cols-[40px_1fr] gap-3 border-t border-white/14 pt-3">
                  <span className="text-[13px] font-extrabold text-sage">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] leading-[1.6] text-white/78">{step}</span>
                </div>
              ))}
            </div>
            <a
              href="#get-involved"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-btn bg-white px-5 text-[15px] font-extrabold text-charcoal transition hover:bg-mint"
            >
              Support this outreach
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="rounded-card border border-white/14 bg-white/[0.04]"
          >
            <div className="grid border-b border-white/14 md:grid-cols-2">
              {details.map(([label, value]) => (
                <div key={label} className="border-b border-white/14 p-6 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                  <div className="text-[12px] font-extrabold text-white/48">{label}</div>
                  <div className="mt-2 text-[18px] font-extrabold leading-snug text-white">{value}</div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-[14px] font-extrabold text-sage">
                <MapPinned className="h-5 w-5" aria-hidden="true" />
                Field services
              </div>
              <div className="mt-6 grid gap-4">
                {services.map((service) => (
                  <div key={service} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-btn bg-sage/20 text-sage">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-[1.65] text-white/76">{service}</span>
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
