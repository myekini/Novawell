"use client";

import { ClipboardCheck, GraduationCap, ShieldCheck, Stethoscope } from "lucide-react";

export default function MissionTicker() {
  const services = [
    {
      icon: Stethoscope,
      label: "1. Register",
      value: "Name, age range, consent, and service needs are recorded.",
    },
    {
      icon: GraduationCap,
      label: "2. Check",
      value: "Blood pressure, BMI, blood sugar, and consultation triage.",
    },
    {
      icon: ShieldCheck,
      label: "3. Learn",
      value: "SRH, cervical cancer, nutrition, and prevention sessions.",
    },
    {
      icon: ClipboardCheck,
      label: "4. Leave with next steps",
      value: "Referral notes, hygiene support, and follow-up guidance.",
    },
  ];

  return (
    <section id="mission-ticker" className="bg-paper">
      <div className="mx-auto grid max-w-[1200px] border-x border-border md:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div key={service.label} className="border-b border-border px-5 py-5 md:border-b-0 md:border-r md:last:border-r-0">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-btn bg-forest-light text-forest">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-[13px] font-extrabold text-charcoal">{service.label}</div>
                  <div className="mt-1 text-[13px] leading-[1.45] text-stone">{service.value}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
