"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, RotateCcw } from "lucide-react";

export default function ImpactStats() {
  const timeline = [
    {
      label: "Before outreach",
      title: "Set the baseline",
      text: "Confirm venue, team roles, consent language, service checklist, and referral pathway.",
    },
    {
      label: "During outreach",
      title: "Record what actually happens",
      text: "Track attendance, screenings completed, education sessions, kits distributed, and referral needs.",
    },
    {
      label: "After outreach",
      title: "Publish a short field report",
      text: "Summarize outputs, lessons, partner contributions, gaps, and the next practical action.",
    },
  ];

  const reportFields = [
    "Participant count by age band",
    "Screenings completed",
    "Common health questions raised",
    "Referral categories",
    "Volunteer hours",
    "Supplies used and remaining",
  ];

  return (
    <section id="impact" className="bg-forest py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-[34px] font-black leading-[1.06] text-white md:text-[48px]">
              No inflated counters. Just a report partners can trust.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-white/72">
              Until the first outreach is complete, NovaWell should not pretend to have impact numbers. The stronger claim is discipline: measure the pilot, learn in public, and improve the next one.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                { icon: ClipboardList, text: "One registration and service log for every outreach." },
                { icon: FileText, text: "One plain-language field report after each program." },
                { icon: RotateCcw, text: "One improvement list before the next outreach." },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex gap-3 border-t border-white/20 pt-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
                    <span className="text-[15px] leading-[1.65] text-white/72">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="border-l border-white/25">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="relative pb-9 pl-7 last:pb-0"
                >
                  <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-earth" />
                  <div className="text-[12px] font-extrabold text-mint">{item.label}</div>
                  <h3 className="mt-2 text-[22px] font-black leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-white/72">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-card border border-white/20 bg-white p-6">
              <h3 className="text-[18px] font-black text-charcoal">First report should include</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {reportFields.map((field) => (
                  <div key={field} className="border-t border-border pt-3 text-[14px] font-semibold leading-snug text-stone">
                    {field}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
