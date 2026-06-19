"use client";

import { motion } from "framer-motion";

export default function MeetTeam() {
  const team = [
    {
      name: "Clinical lead",
      role: "Clinical oversight",
      bio: "A licensed clinician should be named before launch and responsible for consultation quality, participant safety, and referral decisions.",
      status: "Name to publish after confirmation",
    },
    {
      name: "SRH educator",
      role: "Women's health education",
      bio: "A reproductive health specialist should lead menstrual health, contraception, HPV, and cervical cancer education in plain language.",
      status: "Role required for pilot",
    },
    {
      name: "Program operator",
      role: "Operations and reporting",
      bio: "One person must own community entry, volunteer coordination, supplies, documentation, partner updates, and the final field report.",
      status: "Role required for pilot",
    },
  ];

  return (
    <section id="team" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-[760px]">
          <span className="text-[13px] font-extrabold text-earth">Team transparency</span>
          <h2 className="mt-3 text-[38px] font-black leading-[1.04] text-charcoal md:text-[54px]">
            Publish names when they are confirmed. Not before.
          </h2>
          <p className="mt-5 max-w-[680px] text-[16px] leading-[1.7] text-stone">
            For a health initiative, trust comes from real credentials. Until the final people are confirmed, the website should show the required governance roles clearly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {team.map((member, idx) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-card border border-border bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-btn bg-charcoal text-[13px] font-black text-white">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-7 text-[22px] font-black leading-tight text-charcoal">{member.name}</h3>
              <div className="mt-2 text-[14px] font-extrabold text-sky">{member.role}</div>
              <p className="mt-5 text-[15px] leading-[1.65] text-stone">{member.bio}</p>
              <div className="mt-7 border-t border-border pt-4 text-[12px] font-extrabold text-forest">
                {member.status}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
