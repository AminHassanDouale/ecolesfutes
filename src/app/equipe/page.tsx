import type { Metadata } from "next";
import EquipePage from "@/components/pages/EquipePage";

export const metadata: Metadata = {
  title: "Notre Équipe",
  description: "Notre équipe — Les Petits Futés. Des enseignants passionnés et qualifiés au service de l'excellence éducative.",
};

export default function Equipe() {
  return <EquipePage />;
}
