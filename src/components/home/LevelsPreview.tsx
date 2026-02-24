"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const levels = [
  {
    emoji: "🌸",
    title: "Maternelle",
    ages: "2 – 5 ans",
    tagline: "Les premiers pas vers la curiosité",
    description:
      "Un environnement coloré et bienveillant où chaque enfant développe son langage, son autonomie et sa créativité à travers le jeu et les activités sensorielles.",
    highlights: [
      "Apprentissage par le jeu",
      "Encadrement personnalisé",
      "Jardins d'éveil",
      "Préparation progressive au CP",
    ],
    href: "/niveaux/maternelle",
    gradient: "from-pink-400 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "📚",
    title: "Primaire",
    ages: "6 – 11 ans",
    tagline: "Cultiver la passion d'apprendre",
    description:
      "Une pédagogie active avec projets interdisciplinaires, travaux en groupe et suivi personnalisé. Toutes les matières clés pour un socle solide.",
    highlights: [
      "7 disciplines enseignées",
      "Labo sciences junior",
      "Soutien intégré",
      "Bulletins sur ScolApp",
    ],
    href: "/niveaux/primaire",
    gradient: "from-teal-400 to-cyan-500",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    emoji: "🚀",
    title: "Collège",
    ages: "12 – 15 ans",
    tagline: "Préparer les leaders de demain",
    description:
      "Un programme national renforcé avec orientation, clubs, préparation au BEPC/Brevet et développement personnel pour forger les leaders de demain.",
    highlights: [
      "6ème → 3ème officiel",
      "Labo + Numérique",
      "Club débat & éloquence",
      "Prépa BEPC/Brevet",
    ],
    href: "/niveaux/college",
    gradient: "from-navy to-blue-800",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
];

export default function LevelsPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-28 bg-white relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-gold to-orange" />
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-orange/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <SectionHeader
            badge="Nos Niveaux"
            title="Un parcours complet"
            titleHighlight="de la maternelle au collège"
            subtitle="Accompagner l'enfant à chaque étape de sa croissance, avec des méthodes adaptées à chaque âge et des enseignants passionnés."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {levels.map((level, i) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <Link href={level.href}>
                <div
                  className={`relative bg-gradient-to-br ${level.bg} border ${level.border} rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-card-hover group-hover:-translate-y-2`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${level.gradient}`} />

                  {/* Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="text-6xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {level.emoji}
                      </motion.div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${level.badge}`}>
                        {level.ages}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-navy mb-1">
                      {level.title}
                    </h3>
                    <p className={`text-sm font-semibold italic mb-4 bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent`}>
                      &ldquo;{level.tagline}&rdquo;
                    </p>
                    <p className="text-navy/70 text-sm leading-relaxed mb-6">
                      {level.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-8">
                      {level.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-navy/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      className={`flex items-center gap-2 font-bold text-sm bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                    >
                      En savoir plus
                      <ArrowRight
                        size={16}
                        className={`transition-transform group-hover:translate-x-1 bg-gradient-to-r ${level.gradient} text-teal`}
                      />
                    </div>
                  </div>

                  {/* Decorative corner shape */}
                  <div
                    className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${level.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
