"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToNextSection = () => {
    document.getElementById("mission-ticker")?.scrollIntoView({ behavior: "smooth" });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const facts = [
    ["Pilot state", "Kwara"],
    ["Launch window", "July 2025"],
    ["On-site care", "Screening + education + referrals"],
  ];

  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden bg-ink text-white">
      <Image
        src="https://images.unsplash.com/photo-1780847614752-4b7c4d7f6c9d?auto=format&fit=crop&w=1920&q=85"
        alt="Women gathered at a community event in Ijebu Ode, Nigeria"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,18,16,0.90)_0%,rgba(13,18,16,0.68)_42%,rgba(13,18,16,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(13,18,16,0)_0%,rgba(13,18,16,0.76)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1200px] flex-col justify-end px-5 pb-8 pt-28 md:px-8 md:pb-10 md:pt-36">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.11 }}
          className="max-w-[760px]"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex min-h-9 items-center gap-2 border border-white/24 bg-white/10 px-3 text-[13px] font-bold text-white backdrop-blur"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Pilot outreach | Kwara State | July 2025
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-[54px] font-black leading-[0.96] text-white sm:text-[72px] md:text-[92px]"
          >
            Women&apos;s health outreach in Kwara State.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[640px] text-[20px] font-semibold leading-[1.35] text-white md:text-[26px]"
          >
            Free checks, reproductive health education, and referral guidance brought into the community.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-white/78 md:text-[17px]"
          >
            NovaWell is preparing its first rural outreach for women and young girls who may not have time, transport, or money for routine preventive care.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-white px-5 text-[15px] font-extrabold text-charcoal transition hover:bg-mint"
            >
              View pilot plan
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#get-involved"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn border border-white/40 px-5 text-[15px] font-extrabold text-white transition hover:bg-white/10"
            >
              Partner or volunteer
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-12 grid border-y border-white/18 md:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="border-white/18 py-5 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <div className="text-[12px] font-bold text-white/52">{label}</div>
              <div className="mt-2 text-[17px] font-extrabold leading-snug text-white">{value}</div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToNextSection}
          className="mt-6 inline-flex w-fit items-center gap-2 text-[13px] font-bold text-white/72 transition hover:text-white"
          aria-label="Scroll to the next section"
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
          Continue
        </button>
      </div>
    </section>
  );
}
