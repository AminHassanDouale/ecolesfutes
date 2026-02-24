import type { Metadata } from "next";
import VieScolairePage from "@/components/pages/VieScolairePage";

export const metadata: Metadata = {
  title: "Vie Scolaire",
  description: "Vie scolaire — Les Petits Futés. Clubs, activités, événements, galerie et calendrier de notre école dynamique.",
};

export default function VieScolaire() {
  return <VieScolairePage />;
}
