"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, RotateCcw } from "lucide-react";

const timeline = [
  {
    label: "Before outreach",
    title: "Set the baseline",
    text:  "Confirm venue, team roles, consent language, service checklist, and referral pathway.",
  },
  {
    label: "During outreach",
    title: "Record what actually happens",
    text:  "Track attendance, screenings completed, education sessions, kits distributed, and referral needs.",
  },
  {
    label: "After outreach",
    title: "Publish a short field report",
    text:  "Summarize outputs, lessons, partner contributions, gaps, and the next practical action.",
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

const commitments = [
  { icon: ClipboardList, text: "One registration and service log for every outreach." },
  { icon: FileText,      text: "One plain-language field report after each program." },
  { icon: RotateCcw,     text: "One improvement list before the next outreach." },
];

export default function ImpactStats() {
  return (
    <section id="impact" className="bg-primary py-section-gap-mobile md:py-section-gap-desktop text-on-primary">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left: promise copy */}
          <div>
            <h2 className="headline-xl text-on-primary">
              No inflated counters. Just a report partners can trust.
            </h2>
            <p className="body-lg mt-6 text-on-primary-container">
              Until the first outreach is complete, NovaWell should not pretend to have impact numbers. The stronger claim is discipline: measure the pilot, learn in public, and improve the next one.
            </p>

            <div className="mt-8 grid gap-3">
              {commitments.map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-3 border-t border-white/20 pt-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-primary-fixed" aria-hidden="true" />
                  <span className="body-md text-on-primary-container">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline + white card */}
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
                  <div className="label-caps text-primary-fixed">{item.label}</div>
                  <h3 className="mt-2 headline-md text-on-primary">{item.title}</h3>
                  <p className="mt-3 body-md text-on-primary-container">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/20 bg-white p-6">
              <h3 className="headline-md text-on-surface">First report should include</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {reportFields.map((field) => (
                  <div key={field} className="border-t border-outline-variant pt-3 body-md font-semibold text-secondary">
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
