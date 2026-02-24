import type { Metadata } from "next";
import CollegePage from "@/components/pages/CollegePage";

export const metadata: Metadata = {
  title: "Collège",
  description: "Section Collège — Les Petits Futés. Pour les élèves de 12 à 15 ans : programme national, préparation BEPC, clubs et développement personnel.",
};

export default function College() {
  return <CollegePage />;
}
