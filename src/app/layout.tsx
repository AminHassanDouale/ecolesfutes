import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SchoolJsonLd } from "@/components/shared/JsonLd.tsx"

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
  // ─── Core ───────────────────────────────────────────────────────────────
  title: {
    default: "Les Petits Futés — École Privée d'Excellence à Djibouti",
    template: "%s | Les Petits Futés",
  },
  description:
    "Groupe scolaire privé à Djibouti-Ville (Gabode 5) — Maternelle, Primaire et Collège. 98% de réussite aux examens nationaux. Inscriptions 2025-2026 ouvertes.",
  keywords: [
    "école privée Djibouti",
    "groupe scolaire Djibouti",
    "Les Petits Futés",
    "maternelle Djibouti",
    "primaire Djibouti",
    "collège Djibouti",
    "inscription scolaire Djibouti",
    "école Gabode",
    "meilleure école Djibouti",
    "éducation Djibouti",
    "école francophone Djibouti",
    "ScolApp",
    "petitsfutes.org",
  ],
  authors: [{ name: "Les Petits Futés", url: "https://petitsfutes.org" }],
  creator: "Les Petits Futés",
  publisher: "Groupe Scolaire Les Petits Futés",
  category: "Education",

  // ─── Canonical ──────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://petitsfutes.org",
    languages: {
      "fr-DJ": "https://petitsfutes.org",
    },
  },

  // ─── Open Graph (WhatsApp, Facebook, LinkedIn previews) ─────────────────
  openGraph: {
    type: "website",
    locale: "fr_DJ",
    url: "https://petitsfutes.org",
    siteName: "Les Petits Futés",
    title: "Les Petits Futés — École Privée d'Excellence à Djibouti",
    description:
      "Maternelle · Primaire · Collège — 98% de réussite aux examens. Gabode 5, Djibouti-Ville.",
    images: [
      {
        url: "https://petitsfutes.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Les Petits Futés — Groupe Scolaire à Djibouti",
      },
    ],
  },

  // ─── Twitter / X ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Les Petits Futés — École Privée d'Excellence à Djibouti",
    description:
      "Maternelle · Primaire · Collège — 98% de réussite. Inscriptions 2025-2026 ouvertes.",
    images: ["https://petitsfutes.org/og-image.jpg"],
  },

  // ─── Robots ─────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Google Search Console verification ─────────────────────────────────
  verification: {
    google: "REMPLACER_PAR_VOTRE_CODE_GOOGLE",
  },

  // ─── PWA manifest ───────────────────────────────────────────────────────
  applicationName: "Les Petits Futés",
  manifest: "/manifest.json",

  // ─── Icons ──────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ─── Geo meta (local SEO boost) ─────────────────────────────────────────
  other: {
    "geo.region": "DJ",
    "geo.placename": "Djibouti-Ville",
    "geo.position": "11.589010;42.989880",
    ICBM: "11.589010, 42.989880",
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
        <SchoolJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}