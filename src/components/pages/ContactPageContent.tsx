"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, Send, Smartphone } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    q: "Quels sont les horaires des classes ?",
    a: "Les cours débutent à 7h30 et se terminent à 12h30 du dimanche au jeudi.",
  },
  
  {
    q: "Comment accéder à ScolApp ?",
    a: "Téléchargez bientot l'application ScolApp sur l'App Store ou Google Play, puis connectez-vous avec les identifiants fournis lors de l'inscription de votre enfant.",
  },
  {
    q: "Quand ouvrent les inscriptions ?",
    a: "Les préinscriptions ouvrent généralement en août pour l'année suivante. Consultez la section Admissions pour les dates précises.",
  },
  
  {
    q: "Comment organiser une visite de l'école ?",
    a: "Remplissez notre formulaire de contact en indiquant votre souhait de visite, ou appelez directement notre secrétariat. Les visites se déroulent du dimanche au jeudi sur rendez-vous.",
  },
];

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
  visitDate?: string;
  wantVisit?: boolean;
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-cream-dark rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-navy hover:bg-cream transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`text-teal transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-5 text-navy/70 text-sm leading-relaxed border-t border-cream-dark"
        >
          <div className="pt-4">{answer}</div>
        </motion.div>
      )}
    </div>
  );
}

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, watch } = useForm<FormData>();
  const wantVisit = watch("wantVisit");

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-teal to-teal-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white rounded-full px-5 py-2 text-sm font-bold mb-6"
          >
            📞 Contact & Localisation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Venez nous rendre visite
            <span className="block text-yellow-200 italic">nous vous attendons</span>
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 20C1000 50 600 10 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="left">
                <h2 className="font-serif text-3xl font-bold text-navy mb-6">Informations pratiques</h2>
              </AnimatedSection>

              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  content: "Gabode 5, Djibouti-Ville\nRépublique de Djibouti",
                  color: "text-orange bg-orange/10",
                },
                {
                  icon: Phone,
                  title: "Fixe",
                  content: "+253 21 34 86 96",
                  color: "text-teal bg-teal/10",
                  link: "tel:+25321348696",
                },
                {
                  icon: Smartphone,
                  title: "Mobile",
                  content: "+253 77 19 80 27",
                  color: "text-teal bg-teal/10",
                  link: "tel:+25377198027",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  content: "+253 77 19 80 27",
                  color: "text-green-600 bg-green-50",
                  link: "https://wa.me/25377198027",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@petitsfutes.com",
                  color: "text-navy bg-navy/10",
                  link: "mailto:contact@petitsfutes.com",
                },
                {
                  icon: Clock,
                  title: "Horaires du secrétariat",
                  content: "Dim–Jeu : 7h30 – 12h30\nSamedi : 8h00 – 12h00",
                  color: "text-gold bg-gold/10",
                },
              ].map(({ icon: Icon, title, content, color, link }, i) => (
                <AnimatedSection key={title} delay={i * 0.1} direction="left">
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color.split(" ")[1]}`}>
                      <Icon size={22} className={color.split(" ")[0]} />
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm mb-1">{title}</div>
                      {link ? (
                        <a href={link} className="text-navy/70 text-sm hover:text-teal transition-colors whitespace-pre-line">
                          {content}
                        </a>
                      ) : (
                        <div className="text-navy/70 text-sm whitespace-pre-line">{content}</div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* WhatsApp CTA */}
              <AnimatedSection delay={0.7} direction="left">
                <a
                  href="https://wa.me/25377198027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 text-white font-bold px-6 py-4 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <MessageCircle size={24} />
                  Écrire sur WhatsApp
                </a>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <h3 className="font-serif text-2xl font-bold text-navy mb-6">Envoyez-nous un message</h3>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">✅</div>
                      <h4 className="font-bold text-navy text-xl mb-2">Message envoyé !</h4>
                      <p className="text-navy/60">Nous vous répondrons dans les 24h.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-navy mb-2">Nom complet *</label>
                          <input
                            {...register("nom", { required: true })}
                            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal outline-none transition-colors"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy mb-2">Email *</label>
                          <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal outline-none transition-colors"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-navy mb-2">Téléphone</label>
                          <input
                            {...register("telephone")}
                            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal outline-none transition-colors"
                            placeholder="+253 XX XX XX XX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy mb-2">Objet *</label>
                          <select
                            {...register("objet", { required: true })}
                            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal outline-none transition-colors"
                          >
                            <option value="">Choisir un objet</option>
                            <option>Inscription / Préinscription</option>
                            <option>Informations générales</option>
                            <option>ScolApp & Support</option>
                            <option>Tarifs & Paiements</option>
                            <option>Visite de l&apos;école</option>
                            <option>Autre</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy mb-2">Message *</label>
                        <textarea
                          {...register("message", { required: true })}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal outline-none transition-colors resize-none"
                          placeholder="Votre message..."
                        />
                      </div>

                      {/* Visit option */}
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          {...register("wantVisit")}
                          id="visit"
                          className="w-4 h-4 rounded accent-teal"
                        />
                        <label htmlFor="visit" className="text-sm text-navy font-medium cursor-pointer">
                          Je souhaite planifier une visite de l&apos;école
                        </label>
                      </div>
                      {wantVisit && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                        >
                          <label className="block text-sm font-bold text-navy mb-2">Date souhaitée</label>
                          <input
                            type="date"
                            {...register("visitDate")}
                            className="w-full px-4 py-3 rounded-xl border border-teal/40 bg-teal/5 focus:border-teal outline-none transition-colors"
                          />
                        </motion.div>
                      )}

                      <button type="submit" className="w-full btn-primary justify-center text-base !py-4">
                        Envoyer le message <Send size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps — Djibouti */}
      <section className="relative overflow-hidden" style={{ height: "420px" }}>
        <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-card-hover flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shadow-glow shrink-0">
            <span className="text-xl">🦉</span>
          </div>
          <div>
            <p className="font-bold text-navy text-sm">Les Petits Futés</p>
            <p className="text-navy/60 text-xs flex items-center gap-1">
              <MapPin size={11} />
              Gabode 5, Djibouti-Ville
            </p>
          </div>
        </div>

        <iframe
          title="Localisation Les Petits Futés — Djibouti"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60989.94706066576!2d42.98988!3d11.58901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603174be5b83981%3A0x17006c9de4e86a6d!2sDjibouti%20City%2C%20Djibouti!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[20%]"
        />
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="FAQ"
            title="Questions"
            titleHighlight="fréquentes"
            subtitle="Retrouvez les réponses aux questions les plus posées par les familles."
          />
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <AnimatedSection key={faq.q} direction="up">
                <FAQItem question={faq.q} answer={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}