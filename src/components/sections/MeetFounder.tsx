"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const credentials = [
  { value: "5+",    label: "Years in public health" },
  { value: "2",     label: "Countries — Nigeria & UK" },
  { value: "2,000+", label: "Individuals reached" },
];

const affiliations = [
  "Primary Health Care Initiative, Nigeria",
  "Young Mums Support Network",
  "Healthwatch Greenwich",
  "WAND UK",
];

export default function MeetFounder() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="founder"
      className="bg-background py-section-gap-mobile md:py-section-gap-desktop"
    >
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-primary-fixed">
              {!imgError ? (
                <Image
                  src="/founder.png"
                  alt="Sofiat Daud, founder of NovaWell Community Health Initiative"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-end p-6">
                  <div>
                    <p className="headline-md text-primary">SD</p>
                    <p className="body-md text-secondary mt-1">Photo coming soon</p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating credential strip */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {credentials.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-outline-variant bg-surface p-4 text-center"
                >
                  <p className="headline-md text-primary">{value}</p>
                  <p className="mt-1 body-md text-secondary text-xs leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="flex flex-col gap-7"
          >
            <div>
              <p className="label-caps text-on-surface-variant">Meet the founder</p>
              <h2 className="headline-lg text-on-surface mt-3">Sofiat Daud</h2>
              <p className="body-md text-secondary mt-1">Public Health Professional · Health Equity Advocate</p>
            </div>

            <blockquote className="border-l-0 rounded-xl bg-primary-fixed px-6 py-5">
              <p className="body-lg text-primary font-medium leading-relaxed">
                &ldquo;Every individual, regardless of background, deserves access to quality healthcare and health education.&rdquo;
              </p>
            </blockquote>

            <p className="body-md text-secondary">
              Sofiat has spent over five years bridging evidence-based public health research with grassroots community outreach — across Nigeria and the United Kingdom. Her work spans maternal health literacy, HPV vaccine awareness, and youth empowerment programs that have reached more than 2,000 individuals.
            </p>
            <p className="body-md text-secondary">
              NovaWell is built on that experience: a disciplined, community-first model that prioritises what women actually need — free, nearby, practical care — over institutional optics.
            </p>

            <div>
              <p className="label-caps text-on-surface-variant mb-3">Previous & current affiliations</p>
              <div className="flex flex-col gap-2">
                {affiliations.map((name) => (
                  <div key={name} className="flex items-center gap-3 border-t border-outline-variant pt-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="body-md text-on-surface">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://linkedin.com/in/soffiyah-daud-9baaa722b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 label-caps text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a
                href="https://sofiat-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 label-caps text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Full profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
