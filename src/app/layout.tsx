import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Groupe Scolaire Les Petits Futés",
    template: "%s | Les Petits Futés",
  },
  description:
    "Groupe Scolaire Les Petits Futés — Maternelle, Primaire, Collège. Enseigner · Grandir · Inspirer. +500 élèves accompagnés avec excellence depuis plus de 10 ans.",
  keywords: [
    "école",
    "maternelle",
    "primaire",
    "collège",
    "les petits futés",
    "inscription",
    "scolapp",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${nunito.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
