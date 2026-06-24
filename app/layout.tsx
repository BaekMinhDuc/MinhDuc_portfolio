import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beakminhduc.vercel.app"),
  title: "beakminhduc | AI Engineer & AI Researcher",
  applicationName: "beakminhduc",
  description:
    "Portfolio of Ngo Pham Minh Duc, AI Engineer and AI Researcher focused on applied Machine Learning, Computer Vision, Speech AI, model optimization, and Edge AI deployment.",
  keywords: [
    "Ngo Pham Minh Duc",
    "AI Engineer",
    "AI Researcher",
    "Edge AI Engineer",
    "Computer Vision",
    "Speech AI",
    "NVIDIA Jetson",
    "TensorRT",
  ],
  authors: [{ name: "Ngo Pham Minh Duc", url: "mailto:mcminhduc2004@gmail.com" }],
  creator: "Ngo Pham Minh Duc",
  openGraph: {
    title: "beakminhduc | AI Engineer & AI Researcher",
    description:
      "AI Engineer and AI Researcher focused on applied Machine Learning, Computer Vision, Speech AI, model optimization, and Edge AI deployment.",
    url: "https://beakminhduc.vercel.app",
    siteName: "beakminhduc",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
