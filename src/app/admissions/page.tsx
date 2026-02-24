import type { Metadata } from "next";
import AdmissionsPageContent from "@/components/pages/AdmissionsPageContent";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Inscriptions et préinscriptions — Les Petits Futés. Rejoignez la famille scolaire pour l'année 2025-2026.",
};

export default function Admissions() {
  return <AdmissionsPageContent />;
}
