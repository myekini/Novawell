import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`h-full antialiased ${bricolage.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
