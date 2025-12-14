import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanstackProvider from "@/components/TanStackProvider/TanStackProvider";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes search",
  description: "Create, structure and search for your notes",
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export async function generateMetaData() {
  return {
    title: "Notes search",
    description: "Create, structure and search for your notes",
    openGraph: {
      title: "Notes search",
      description: "Create, structure and search for your notes",
      url: `https://notehub.com`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub",
        },
      ],
    },
  };
}
export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
