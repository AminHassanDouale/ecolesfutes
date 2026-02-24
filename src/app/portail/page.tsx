import type { Metadata } from "next";
import PortailPageContent from "@/components/pages/PortailPageContent";

export const metadata: Metadata = {
  title: "Portail ScolApp",
  description: "Portail parents — Les Petits Futés. Connectez-vous à ScolApp pour suivre la scolarité de votre enfant.",
};

export default function Portail() {
  return <PortailPageContent />;
}
