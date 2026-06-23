import { HeroHeader } from "@/components/tailark/header";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Lora } from "next/font/google";
import "./globals.css";
import {ImageKitProvider} from "@imagekit/next";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LegalFlow AI | Modern Legal Operations",
  description:
    "A polished, responsive landing page for an AI-powered legal-tech platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
    >
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className="w-full">
      <HeroHeader />
      <ImageKitProvider urlEndpoint={process.env.IMAGEKIT_URL_ENDPOINT} >
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </ImageKitProvider>
      </body>
    </html>
  );
}
