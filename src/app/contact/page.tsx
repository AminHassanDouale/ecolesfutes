import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez-nous — Les Petits Futés. Adresse, téléphone, WhatsApp, horaires et formulaire de contact.",
};

export default function Contact() {
  return <ContactPageContent />;
}
