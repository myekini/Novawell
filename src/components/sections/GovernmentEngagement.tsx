"use client";

import { motion } from "framer-motion";
import { ArrowRight, Landmark } from "lucide-react";

export default function GovernmentEngagement() {
  return (
    <section className="bg-paper px-5 py-16 md:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto grid max-w-[1200px] gap-8 border-y border-border py-10 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-14"
      >
        <div className="flex items-center gap-3 text-[14px] font-extrabold text-sky">
          <span className="flex h-11 w-11 items-center justify-center rounded-btn bg-sky/10">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </span>
          Public partnership
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-[30px] font-black leading-[1.08] text-charcoal md:text-[42px]">
              Designed to work with public health systems, not around them.
            </h2>
            <p className="mt-4 max-w-[760px] text-[16px] leading-[1.7] text-stone">
              NovaWell should seek state, local, and primary health care alignment before scaling, so outreach complements existing priorities instead of creating a parallel promise it cannot sustain.
            </p>
          </div>

          <a
            href="#partners"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-charcoal px-5 text-[15px] font-extrabold text-white transition hover:bg-forest"
          >
            Partner with us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
