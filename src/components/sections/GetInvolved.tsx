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
  fullName:   string;
  email:      string;
  profession: string;
  message:    string;
};

const CONTACT_EMAIL = "hello@novawellhealth.org";

const opportunities = [
  "Doctors, nurses, pharmacists, and allied health professionals",
  "Public health, social work, and medical students",
  "Community organizers, educators, photographers, and logistics volunteers",
];

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [draftHref, setDraftHref] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<VolunteerFormData>();

  const onSubmit = (data: VolunteerFormData) => {
    const subject = encodeURIComponent(`Volunteer interest from ${data.fullName}`);
    const body = encodeURIComponent(
      [`Full name: ${data.fullName}`, `Email: ${data.email}`, `Profession / role: ${data.profession}`, "", "How I would like to help:", data.message].join("\n")
    );
    setDraftHref(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
    setIsSubmitted(true);
  };

  return (
    <section id="get-involved" className="bg-background py-section-gap-mobile md:py-section-gap-desktop">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Left: pitch */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="headline-lg text-on-surface">
            Bring one useful thing to the pilot.
          </h2>
          <p className="body-lg mt-6 max-w-[560px] text-secondary">
            NovaWell needs practical help: clinical time, community access, supplies, documentation, transport, and funding for the first outreach.
          </p>

          <div className="mt-8 grid gap-4">
            {opportunities.map((item) => (
              <div key={item} className="flex gap-3 border-t border-outline-variant pt-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary text-xs font-bold">✓</span>
                <span className="body-md text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          id="volunteer-form"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="rounded-2xl border border-outline-variant bg-surface p-6 shadow-card md:p-8"
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
                  <h3 className="headline-md text-on-surface">Tell us how you can help</h3>
                  <p className="mt-1.5 body-md text-secondary">
                    This opens a prefilled email draft. Nothing is silently submitted.
                  </p>
                </div>

                {[
                  { id: "volunteer-full-name", field: "fullName" as const, label: "Full name",          type: "text",  placeholder: "Your full name",          rules: { required: "Name is required" } },
                  { id: "volunteer-email",     field: "email"    as const, label: "Email address",      type: "email", placeholder: "you@example.com",         rules: { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } } },
                  { id: "volunteer-profession",field: "profession"as const, label: "Profession or role", type: "text",  placeholder: "Doctor, student, organizer...", rules: { required: "Profession is required" } },
                ].map(({ id, field, label, type, placeholder, rules }) => (
                  <div key={field} className="space-y-1.5">
                    <Label htmlFor={id} className="label-caps text-on-surface-variant">{label}</Label>
                    <Input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      aria-invalid={!!errors[field]}
                      {...register(field, rules)}
                      className={errors[field] ? "border-error focus-visible:ring-error/20" : ""}
                    />
                    {errors[field] && (
                      <p role="alert" className="body-md text-error text-sm">{errors[field]?.message}</p>
                    )}
                  </div>
                ))}

                <div className="space-y-1.5">
                  <Label htmlFor="volunteer-message" className="label-caps text-on-surface-variant">How would you like to help?</Label>
                  <Textarea
                    id="volunteer-message"
                    rows={4}
                    placeholder="A short note is enough"
                    aria-invalid={!!errors.message}
                    {...register("message", { required: "Please share a brief note" })}
                    className={`resize-none ${errors.message ? "border-error focus-visible:ring-error/20" : ""}`}
                  />
                  {errors.message && (
                    <p role="alert" className="body-md text-error text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-full bg-primary label-caps text-on-primary hover:opacity-90 gap-2"
                >
                  {isSubmitting ? (
                    <span className="block h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>Prepare email draft <ArrowRight className="h-4 w-4" aria-hidden="true" /></>
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
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 headline-md text-on-surface">Email draft ready</h3>
                <p className="mt-3 max-w-sm body-md text-secondary">
                  Open the draft, review the message, and send it from your email app so the NovaWell team can reply directly.
                </p>
                <Button asChild className="mt-7 h-11 rounded-full bg-primary px-6 label-caps text-on-primary hover:opacity-90">
                  <a href={draftHref}>Open email draft</a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 h-11 rounded-full border-outline-variant px-6 label-caps text-on-surface hover:bg-surface-container-low"
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
