import type { Metadata } from "next";
import ActualitesPageContent from "@/components/pages/ActualitesPageContent";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Actualités et blog — Les Petits Futés. Résultats, événements, conseils et toute la vie de notre école.",
};

export default function Actualites() {
  return <ActualitesPageContent />;
}
