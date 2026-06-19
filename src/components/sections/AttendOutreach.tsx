"use client";

import { motion } from "framer-motion";
import { CalendarClock, HeartHandshake, ShieldCheck } from "lucide-react";

const facts = [
  {
    icon: ShieldCheck,
    heading: "Free. No paperwork.",
    body: "Everything at the outreach — checks, education, wellness kits — is free of charge. You do not need a referral letter, a health card, or any prior appointment.",
  },
  {
    icon: HeartHandshake,
    heading: "For you, not about you.",
    body: "The outreach is designed for women and young girls who want to know more about their health but haven't had an easy way to access screening or advice close to home.",
  },
  {
    icon: CalendarClock,
    heading: "Date and location coming soon.",
    body: "The outreach is in planning for Kwara State. Email us at hello@novawellhealth.org and we will notify you when the date and venue are confirmed.",
  },
];

const steps = [
  "Arrive and add your name to the register",
  "Join a short health education session",
  "Get your blood pressure, BMI, and blood sugar checked",
  "Receive referral advice or a wellness pack before you leave",
];

export default function AttendOutreach() {
  return (
    <section
      id="attend"
      className="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop"
    >
      <div className="mx-auto max-w-[1200px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-[640px]"
        >
          <h2 className="headline-lg text-on-surface">
            Coming to Kwara State — and it&apos;s free.
          </h2>
          <p className="body-lg mt-5 text-secondary">
            If you live or work in Kwara State and want a free health check, this outreach is for you. No cost. No referral. Just show up.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: what happens */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="label-caps text-on-surface-variant">What to expect on the day</p>
            <div className="mt-5 grid gap-0">
              {steps.map((step, idx) => (
                <div
                  key={step}
                  className="flex gap-4 border-t border-outline-variant py-5 last:border-b last:border-outline-variant"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary text-xs font-semibold">
                    {idx + 1}
                  </span>
                  <span className="body-md text-on-surface">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: fact cards */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            {facts.map(({ icon: Icon, heading, body }) => (
              <div
                key={heading}
                className="flex gap-4 rounded-2xl border border-outline-variant bg-surface p-5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="body-md font-semibold text-on-surface">{heading}</p>
                  <p className="mt-1 body-md text-secondary">{body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
