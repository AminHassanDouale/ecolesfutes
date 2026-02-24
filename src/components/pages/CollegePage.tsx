"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Microscope, Globe, Cpu, Users, Target } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const levels = [
  { level: "6ème", desc: "Consolidation des fondamentaux et adaptation au collège" },
  { level: "5ème", desc: "Approfondissement et développement de l'autonomie" },
  { level: "4ème", desc: "Orientation et renforcement des disciplines" },
  { level: "3ème", desc: "Préparation intensive au BEPC/Brevet" },
];

const clubs = [
  { emoji: "🔬", title: "Club Sciences", desc: "Expériences, concours scientifiques, projets de recherche" },
  { emoji: "🎤", title: "Club Débat", desc: "Éloquence, argumentation, confiance en soi" },
  { emoji: "📰", title: "Journal de l'école", desc: "Rédaction, photographie, mise en page — rédigé par les élèves" },
  { emoji: "🏅", title: "Olympiades", desc: "Compétitions inter-établissements en maths, français, sciences" },
  { emoji: "💻", title: "Club Robotique", desc: "Programmation, conception et assemblage de robots" },
  { emoji: "🎭", title: "Club Théâtre", desc: "Expression artistique, improvisation, représentations" },
];

const devPoints = [
  { icon: Trophy, label: "Leadership", color: "text-gold bg-gold/10" },
  { icon: Target, label: "Confiance", color: "text-orange bg-orange/10" },
  { icon: Users, label: "Travail d'équipe", color: "text-teal bg-teal/10" },
  { icon: Globe, label: "Ouverture monde", color: "text-blue-500 bg-blue-50" },
  { icon: Microscope, label: "Esprit critique", color: "text-green-500 bg-green-50" },
  { icon: Cpu, label: "Digital skills", color: "text-purple-500 bg-purple-50" },
];

export default function CollegePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-navy via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {["🚀", "🏆", "💡", "🌍", "⚡", "🎯"].map((e, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{ left: `${5 + i * 17}%`, top: `${10 + (i % 3) * 35}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5 + i * 0.6, repeat: Infinity, delay: i * 0.4 }}
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
                className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white rounded-full px-5 py-2 text-sm font-bold mb-6"
              >
                🚀 Collège · 12 – 15 ans
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Préparer les
                <span className="block text-gold italic">leaders de demain</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/85 text-xl mb-8 leading-relaxed"
              >
                Programme officiel national, clubs dynamiques, préparation BEPC et
                développement personnel pour forger les citoyens et leaders de demain.
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
                <Link href="/contact" className="btn-outline !border-gold !text-gold hover:!bg-gold hover:!text-white">
                  Nous visiter
                </Link>
              </motion.div>
            </div>

            {/* Levels visual */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {levels.map((l, i) => (
                <motion.div
                  key={l.level}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 glass-card-dark rounded-2xl p-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-white font-bold text-xl font-serif shadow-glow-gold">
                    {l.level}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{l.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none">
            <path d="M0 80L1440 80L1440 25C1200 55 900 15 600 40C350 60 180 20 0 45Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Dev personnel */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Développement Personnel"
            title="Former des"
            titleHighlight="personnalités complètes"
            subtitle="Au-delà des notes, nous formons des individus confiants, curieux et capables de s'épanouir dans la société."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {devPoints.map(({ icon: Icon, label, color }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} direction="scale">
                <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-card hover:-translate-y-2 transition-transform text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color.split(" ")[1]}`}>
                    <Icon size={28} className={color.split(" ")[0]} />
                  </div>
                  <span className="font-bold text-navy text-xs">{label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Activités Parascolaires"
            title="Clubs &"
            titleHighlight="Projets"
            subtitle="Des clubs dynamiques pour explorer les passions, développer les talents et créer des souvenirs inoubliables."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {clubs.map((club, i) => (
              <AnimatedSection key={club.title} delay={i * 0.1} direction="up">
                <div className="group bg-gradient-to-br from-navy/5 to-blue-50 border border-navy/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-card-hover">
                  <div className="text-5xl mb-4">{club.emoji}</div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{club.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{club.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BEPC Prep */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Préparation BEPC & Brevet
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Des sessions de révision intensives, des concours blancs, un accompagnement
              personnalisé et 98% de taux de réussite témoignent de notre excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { value: "98%", label: "Taux de réussite BEPC" },
                { value: "+50%", label: "Mentions au Brevet" },
                { value: "3 ans", label: "Préparation progressive" },
              ].map((s) => (
                <div key={s.label} className="glass-card-dark rounded-2xl p-6">
                  <div className="text-gold font-bold text-3xl font-serif mb-2">{s.value}</div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/admissions" className="btn-primary">
              Inscrire en 6ème <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
