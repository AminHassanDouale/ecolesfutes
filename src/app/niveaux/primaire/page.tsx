import type { Metadata } from "next";
import PrimairePage from "@/components/pages/PrimairePage";

export const metadata: Metadata = {
  title: "Primaire",
  description: "Section Primaire — Les Petits Futés. Pour les enfants de 6 à 11 ans : pédagogie active, projets interdisciplinaires, suivi personnalisé.",
};

export default function Primaire() {
  return <PrimairePage />;
}
