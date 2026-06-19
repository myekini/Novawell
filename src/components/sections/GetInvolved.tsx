"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type VolunteerFormData = {
  fullName: string;
  email: string;
  profession: string;
  message: string;
};

const CONTACT_EMAIL = "hello@novawellhealth.org";

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [draftHref, setDraftHref] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormData>();

  const onSubmit = (data: VolunteerFormData) => {
    const subject = encodeURIComponent(`Volunteer interest from ${data.fullName}`);
    const body = encodeURIComponent(
      [
        `Full name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Profession / role: ${data.profession}`,
        "",
        "How I would like to help:",
        data.message,
      ].join("\n"),
    );

    setDraftHref(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
    setIsSubmitted(true);
  };

  const opportunities = [
    "Doctors, nurses, pharmacists, and allied health professionals",
    "Public health, social work, and medical students",
    "Community organizers, educators, photographers, and logistics volunteers",
  ];

  return (
    <section id="get-involved" className="bg-cream py-12 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-[38px] font-black leading-[1.04] text-charcoal md:text-[54px]">
            Bring one useful thing to the pilot.
          </h2>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-stone">
            NovaWell needs practical help: clinical time, community access, supplies, documentation, transport, and funding for the first outreach.
          </p>

          <div className="mt-8 grid gap-4">
            {opportunities.map((item) => (
              <div key={item} className="flex gap-3 border-t border-border pt-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-btn bg-forest text-white text-xs font-bold">✓</span>
                <span className="text-[15px] leading-[1.65] text-stone">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="volunteer-form"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="rounded-card border border-border bg-white p-5 shadow-card md:p-8"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-[22px] font-black leading-tight text-charcoal">Tell us how you can help</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-stone">
                    This opens a prefilled email draft. Nothing is silently submitted.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="volunteer-full-name" className="text-[13px] font-extrabold text-charcoal">
                    Full name
                  </Label>
                  <Input
                    id="volunteer-full-name"
                    type="text"
                    placeholder="Your full name"
                    aria-invalid={!!errors.fullName}
                    {...register("fullName", { required: "Name is required" })}
                    className={errors.fullName ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.fullName && (
                    <p role="alert" className="text-xs text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="volunteer-email" className="text-[13px] font-extrabold text-charcoal">
                    Email address
                  </Label>
                  <Input
                    id="volunteer-email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                    })}
                    className={errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.email && (
                    <p role="alert" className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="volunteer-profession" className="text-[13px] font-extrabold text-charcoal">
                    Profession or role
                  </Label>
                  <Input
                    id="volunteer-profession"
                    type="text"
                    placeholder="Doctor, student, organizer..."
                    aria-invalid={!!errors.profession}
                    {...register("profession", { required: "Profession or role is required" })}
                    className={errors.profession ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.profession && (
                    <p role="alert" className="text-xs text-destructive">{errors.profession.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="volunteer-message" className="text-[13px] font-extrabold text-charcoal">
                    How would you like to help?
                  </Label>
                  <Textarea
                    id="volunteer-message"
                    rows={4}
                    placeholder="A short note is enough"
                    aria-invalid={!!errors.message}
                    {...register("message", { required: "Please share a brief note" })}
                    className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive/20" : ""}`}
                  />
                  {errors.message && (
                    <p role="alert" className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full gap-2 rounded-btn bg-charcoal text-[15px] font-extrabold hover:bg-forest"
                >
                  {isSubmitting ? (
                    <span className="block h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      Prepare email draft
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-btn bg-forest-light text-forest">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-[24px] font-black text-charcoal">Email draft ready</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-[1.65] text-stone">
                  Open the draft, review the message, and send it from your email app so the NovaWell team can reply directly.
                </p>
                <Button asChild className="mt-7 h-11 rounded-btn bg-charcoal px-5 text-[14px] font-extrabold hover:bg-forest">
                  <a href={draftHref}>Open email draft</a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 h-11 rounded-btn border-border px-5 text-[14px] font-extrabold text-charcoal hover:bg-forest-light"
                >
                  Submit another response
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
