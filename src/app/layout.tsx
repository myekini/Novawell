import type { Metadata } from "next";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaWell - Preventive Health Closer to Home",
  description:
    "NovaWell Community Health Initiative delivers free screenings, health education, and wellness support for underserved women and communities in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
