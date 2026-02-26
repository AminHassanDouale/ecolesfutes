"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const subjects = [
  { emoji: "🇫🇷", label: "Français", color: "from-blue-400 to-blue-600" },
  { emoji: "🔢", label: "Mathématiques", color: "from-teal to-cyan-600" },
  { emoji: "🔬", label: "Sciences", color: "from-green-400 to-emerald-600" },
  { emoji: "🌍", label: "Hist.-Géo.", color: "from-yellow-400 to-amber-600" },
  { emoji: "AR", label: "Arab", color: "from-red-400 to-rose-600" },
  { emoji: "💻", label: "Informatique", color: "from-purple-400 to-violet-600" },
  { emoji: "⚽", label: "EPS", color: "from-orange to-orange-dark" },
];

const methods = [
  {
    emoji: "👥",
    title: "Travail en groupes",
    description: "Collaboration, entraide et développement des compétences sociales à travers des projets communs.",
  },
  {
    emoji: "🔭",
    title: "Projets interdisciplinaires",
    description: "Des thèmes transversaux qui relient les différentes disciplines pour une compréhension globale.",
  },
  {
    emoji: "🎤",
    title: "Exposés & débats",
    description: "Expression orale, confiance en soi et capacité d'argumentation développées régulièrement.",
  },
  {
    emoji: "🧪",
    title: "Labo Sciences Junior",
    description: "Expériences pratiques en laboratoire pour une science vivante et passionnante.",
  },
  {
    emoji: "📊",
    title: "Suivi personnalisé",
    description: "Détection précoce des difficultés et soutien scolaire intégré pour ne laisser personne derrière.",
  },
  {
    emoji: "📱",
    title: "ScolApp Bulletins",
    description: "Bulletins trimestriels accessibles en ligne, réunions parents-profs planifiées via l'appli.",
  },
];

export default function PrimairePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-teal via-cyan-600 to-navy overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {["📚", "✏️", "🔬", "🌍", "💡", "🎯"].map((e, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-25"
            style={{ left: `${8 + i * 16}%`, top: `${15 + (i % 3) * 30}%` }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
          >
            {e}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white rounded-full px-5 py-2 text-sm font-bold mb-6"
              >
                📚 Primaire · 6 – 11 ans
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Cultiver la passion
                <span className="block text-yellow-300 italic">d&apos;apprendre</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/85 text-xl mb-8 leading-relaxed"
              >
                Un programme riche et stimulant avec 7 disciplines, pédagogie active et suivi
                personnalisé pour chaque élève du CP au CM2.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <Link href="/admissions" className="btn-primary">
                  S&apos;inscrire <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white/20">
                  Nous contacter
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-white/5" />
                <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-8xl">📚</span>
                </div>
                {subjects.slice(0, 6).map((s, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const r = 120;
                  return (
                    <motion.div
                      key={s.label}
                      className={`absolute w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl shadow-lg`}
                      style={{
                        left: `calc(50% + ${r * Math.cos(angle)}px)`,
                        top: `calc(50% + ${r * Math.sin(angle)}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {s.emoji}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none">
            <path d="M0 80L1440 80L1440 20C1100 60 800 10 500 40C300 60 150 20 0 50Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Programme"
            title="7 disciplines"
            titleHighlight="pour un socle solide"
            subtitle="Un enseignement complet couvrant toutes les matières essentielles du programme national."
          />
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {subjects.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08} direction="scale">
                <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r ${s.color} text-white font-bold shadow-lg hover:-translate-y-1 transition-transform cursor-default`}>
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-sm">{s.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Pédagogie"
            title="Des méthodes"
            titleHighlight="actives et innovantes"
            subtitle="Nous favorisons l'apprentissage par l'expérience, le projet et la collaboration."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {methods.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.1} direction="up">
                <div className="group bg-gradient-to-br from-teal/5 to-cyan-50 border border-teal/20 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-card-hover">
                  <div className="text-5xl mb-4">{m.emoji}</div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-3">{m.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{m.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal to-cyan-600 text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-6xl mb-6">📚</div>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Un avenir brillant commence ici
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Inscrivez votre enfant dans notre section primaire et offrez-lui les meilleures bases.
            </p>
            <Link href="/admissions" className="bg-white text-teal font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all inline-flex items-center gap-2">
              Inscrire maintenant <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
