import type { Metadata } from "next";
import MaternellePage from "@/components/pages/MaternellePage";

export const metadata: Metadata = {
  title: "Maternelle",
  description: "Section Maternelle — Les Petits Futés. Pour les enfants de 2 à 5 ans : pédagogie par le jeu, éveil sensoriel, environnement coloré et bienveillant.",
};

export default function Maternelle() {
  return <MaternellePage />;
}
