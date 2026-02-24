"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Bell, MessageSquare, CreditCard, Calendar, TrendingUp, BookOpen, Send, BarChart, Users, Clock, Shield, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const parentFeatures = [
  { icon: FileText, title: "Bulletins en ligne", desc: "Consultez les notes et appréciations de chaque trimestre à tout moment, depuis n'importe quel appareil.", color: "text-teal bg-teal/10" },
  { icon: Bell, title: "Absences & retards", desc: "Notification instantanée dès qu'un enfant est absent ou en retard. Soyez toujours informé.", color: "text-orange bg-orange/10" },
  { icon: MessageSquare, title: "Messagerie directe", desc: "Communiquez directement avec les professeurs et l'administration sans passer par téléphone.", color: "text-blue-500 bg-blue-50" },
  { icon: CreditCard, title: "Paiements sécurisés", desc: "Réglez les frais scolaires en ligne de façon sécurisée et consultez l'historique des paiements.", color: "text-green-500 bg-green-50" },
  { icon: Calendar, title: "Agenda scolaire", desc: "Visualisez le calendrier des cours, devoirs, examens et événements de l'école.", color: "text-gold bg-gold/10" },
  { icon: Bell, title: "Notifications push", desc: "Alertes importantes : réunions, fermetures, résultats, actualités. Ne manquez rien !", color: "text-purple-500 bg-purple-50" },
];

const studentFeatures = [
  { icon: BookOpen, title: "Cours & Devoirs", desc: "Accédez aux cours et aux devoirs en ligne depuis la maison." },
  { icon: Send, title: "Soumission de travaux", desc: "Rendez vos travaux numériquement directement via l'application." },
  { icon: TrendingUp, title: "Suivi progression", desc: "Suivez votre évolution scolaire avec des graphiques de progression." },
];

const adminFeatures = [
  { icon: Users, title: "Gestion des inscriptions", desc: "Dossiers élèves centralisés et gestion des admissions simplifiée." },
  { icon: Clock, title: "Emplois du temps", desc: "Planification et modification des emplois du temps en temps réel." },
  { icon: CreditCard, title: "Comptabilité", desc: "Suivi des paiements, génération de reçus et rapports financiers." },
  { icon: BarChart, title: "Statistiques", desc: "Tableaux de bord de performance et rapports pédagogiques automatisés." },
];

export default function ScolAppPageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-teal via-teal-dark to-navy overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />

        {/* Floating icons */}
        {[FileText, Bell, MessageSquare, CreditCard, Calendar, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10 text-white"
            style={{ left: `${5 + i * 18}%`, top: `${15 + (i % 3) * 30}%` }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          >
            <Icon size={40} />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white rounded-full px-5 py-2 text-sm font-bold mb-6"
          >
            📱 ScolApp — Disponible Bientot iOS & Android
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            L&apos;école dans votre{" "}
            <span className="text-yellow-300 italic">poche</span>
            <br />
            <span className="text-3xl lg:text-4xl font-normal text-white/80">24h/24 · 7j/7</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ScolApp connecte l&apos;école, les enseignants et les familles en temps réel.
            Tout est centralisé, simple et sécurisé.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/portail" className="bg-white text-teal font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all flex items-center gap-2 justify-center">
              Se connecter à ScolApp <ArrowRight size={18} />
            </Link>
            <Link href="#features" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all">
              Voir les fonctionnalités
            </Link>
          </motion.div>

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4 mt-8"
          >
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur rounded-xl px-4 py-2.5 text-white text-sm font-medium">
              <span className="text-xl">🍎</span> App Store
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur rounded-xl px-4 py-2.5 text-white text-sm font-medium">
              <span className="text-xl">🤖</span> Google Play
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none">
            <path d="M0 80L1440 80L1440 20C1100 55 800 10 500 45C300 65 150 25 0 50Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "+500", label: "Familles connectées", emoji: "👨‍👩‍👧" },
              { value: "100%", label: "Sécurisé & privé", emoji: "🔒" },
              { value: "24/7", label: "Disponible", emoji: "⏰" },
              { value: "0€", label: "Gratuit pour les familles", emoji: "💚" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} direction="scale">
                <div className="bg-white rounded-2xl p-6 text-center shadow-card">
                  <div className="text-3xl mb-2">{s.emoji}</div>
                  <div className="font-serif font-bold text-navy text-3xl mb-1">{s.value}</div>
                  <div className="text-navy/60 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parent features */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Pour les Parents"
            title="Tout pour suivre"
            titleHighlight="votre enfant"
            subtitle="Un espace dédié aux parents pour rester connectés à la vie scolaire de leur enfant en temps réel."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {parentFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1} direction="up">
                <div className="group bg-cream border border-cream-dark rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-card-hover">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${f.color.split(" ")[1]} mb-5`}>
                    <f.icon size={28} className={f.color.split(" ")[0]} />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-3">{f.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Student + Admin */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Students */}
            <div>
              <SectionHeader
                badge="Pour les Élèves"
                title="Apprendre"
                titleHighlight="partout"
                centered={false}
              />
              <div className="space-y-4 mt-8">
                {studentFeatures.map((f, i) => (
                  <AnimatedSection key={f.title} delay={i * 0.1} direction="left">
                    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                      <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                        <f.icon size={22} className="text-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">{f.title}</h4>
                        <p className="text-navy/60 text-sm">{f.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Admin */}
            <div>
              <SectionHeader
                badge="Pour l'Administration"
                title="Gérer l'école"
                titleHighlight="efficacement"
                centered={false}
              />
              <div className="space-y-4 mt-8">
                {adminFeatures.map((f, i) => (
                  <AnimatedSection key={f.title} delay={i * 0.1} direction="right">
                    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                      <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                        <f.icon size={22} className="text-navy" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">{f.title}</h4>
                        <p className="text-navy/60 text-sm">{f.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield size={40} className="text-teal" />
              <h2 className="font-serif text-3xl font-bold text-white">Vos données sont protégées</h2>
            </div>
            <p className="text-white/70 mb-8">
              ScolApp utilise un chiffrement de bout en bout et respecte les normes les plus strictes
              de protection des données. Les informations de votre famille ne sont jamais partagées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portail" className="btn-teal">
                Accéder à ScolApp <ArrowRight size={18} />
              </Link>
              <a href="mailto:support@petitsfutes.com" className="btn-outline !border-white/30 !text-white hover:!bg-white/10">
                Support technique
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
