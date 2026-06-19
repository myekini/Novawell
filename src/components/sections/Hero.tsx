"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const itemVariants = {
    hidden:   { opacity: 0, y: 22 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const facts = [
    ["Pilot state",    "Kwara"],
    ["Pilot window",   "Date TBC"],
    ["On-site care",   "Screening + education + referrals"],
  ];

  return (
    <section id="top" className="relative overflow-hidden bg-deep-charcoal pt-20 pb-32 text-on-primary">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <Image
          src="/hero-community.png"
          alt="Women gathered at a community event in Kwara State, Nigeria"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/80 via-deep-charcoal/60 to-deep-charcoal" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-8 mt-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col items-start gap-8 w-full"
        >
          {/* Location pill */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="label-caps text-surface-container-highest">
                Pilot outreach | Kwara State | Upcoming
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="headline-xl max-w-4xl text-on-primary"
          >
            Women&apos;s health outreach in Kwara State.
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="body-lg max-w-2xl text-surface-variant"
          >
            Free checks, reproductive health education, and referral guidance brought into the community.
            <br /><br />
            NovaWell&apos;s pilot model focuses on women and young girls who may not have time, transport, or money for routine preventive care.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row mt-4 w-full sm:w-auto">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-on-primary px-8 py-4 label-caps text-primary transition-colors hover:bg-surface-variant group"
            >
              View pilot plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#get-involved"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-variant px-8 py-4 label-caps text-on-primary transition-colors hover:bg-white/10"
            >
              Partner or volunteer
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid w-full grid-cols-1 gap-8 border-t border-white/20 pt-8 md:grid-cols-3"
          >
            {facts.map(([label, value]) => (
              <div key={label}>
                <span className="label-caps text-surface-variant mb-1 block">{label}</span>
                <span className="headline-md text-on-primary">{value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
