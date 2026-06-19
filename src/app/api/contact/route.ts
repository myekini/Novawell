import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const TO_EMAIL = "daudsoffiyah808@gmail.com";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  email: z.string().trim().email("A valid email address is required."),
  profession: z.string().trim().min(2, "Profession or role is required."),
  message: z.string().trim().min(10, "Please share a little more detail."),
});

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the form fields." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email the NovaWell team directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, email, profession, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "NovaWell Contact Form <onboarding@resend.dev>",
    to: [TO_EMAIL],
    replyTo: email,
    subject: `Volunteer interest from ${fullName}`,
    text: [
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Profession / role: ${profession}`,
      "",
      "How I would like to help:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
