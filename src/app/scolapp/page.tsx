import type { Metadata } from "next";
import ScolAppPageContent from "@/components/pages/ScolAppPageContent";

export const metadata: Metadata = {
  title: "ScolApp",
  description: "ScolApp — L'école dans votre poche 24h/24. Bulletins en ligne, absences, messagerie, paiements et agenda scolaire pour toute la famille.",
};

export default function ScolApp() {
  return <ScolAppPageContent />;
}
