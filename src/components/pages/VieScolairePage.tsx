"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const clubs = [
  { emoji: "📚", title: "Club Lecture", desc: "Bibliothèque richement fournie, ateliers d'expression, concours de lecture inter-classes.", level: "Tous niveaux" },
  { emoji: "🔬", title: "Club Sciences", desc: "Expériences pratiques, visites de labos, préparation aux olympiades de sciences.", level: "Primaire & Collège" },
  { emoji: "🎨", title: "Arts Plastiques", desc: "Peinture, sculpture, collage, land art — l'expression créative sans limite.", level: "Tous niveaux" },
  { emoji: "🎤", title: "Club Éloquence", desc: "Théâtre, improvisation, joutes oratoires pour gagner confiance et s'exprimer.", level: "Primaire & Collège" },
  { emoji: "⚽", title: "Sports", desc: "Football, basketball, athlétisme, danse — tournois inter-classes et compétitions.", level: "Tous niveaux" },
  { emoji: "💻", title: "Informatique & Robotique", desc: "Programmation, conception de robots, projets numériques innovants.", level: "Collège" },
  { emoji: "📰", title: "Journal de l'École", desc: "Rédigé entièrement par les élèves : articles, interviews, reportages, photos.", level: "Collège" },
];

const events = [
  { emoji: "🎭", title: "Gala de fin d'année", desc: "La grande fête scolaire : spectacles, danses, remises de diplômes et récompenses.", date: "Juin", color: "bg-gold/10 border-gold/30" },
  { emoji: "🚪", title: "Journées Portes Ouvertes", desc: "Visites guidées de l'école, rencontres avec les enseignants, présentation des programmes.", date: "Mars", color: "bg-teal/10 border-teal/30" },
  { emoji: "🌍", title: "Semaine des Langues", desc: "Expositions culturelles, saynètes théâtrales, quiz linguistiques — célébration de la diversité.", date: "Novembre", color: "bg-orange/10 border-orange/30" },
  { emoji: "🏆", title: "Tournois Sportifs", desc: "Compétitions inter-classes en football, basketball et athlétisme. Fair-play et esprit d'équipe.", date: "Avril", color: "bg-blue-50 border-blue-200" },
  { emoji: "📖", title: "Concours de Lecture", desc: "Les meilleurs lecteurs récompensés lors d'une cérémonie festive avec leurs familles.", date: "Février", color: "bg-pink-50 border-pink-200" },
  { emoji: "✈️", title: "Sorties Éducatives", desc: "Musées, parcs naturels, sites historiques — apprendre en dehors des murs de l'école.", date: "Tout l'an", color: "bg-purple-50 border-purple-200" },
];

const gallery = [
  { emoji: "🎨", label: "Atelier Arts", color: "bg-pink-100" },
  { emoji: "⚽", label: "Tournoi foot", color: "bg-green-100" },
  { emoji: "🔬", label: "Labo sciences", color: "bg-blue-100" },
  { emoji: "🎭", label: "Spectacle théâtre", color: "bg-purple-100" },
  { emoji: "📚", label: "Club lecture", color: "bg-yellow-100" },
  { emoji: "🏃", label: "Journée sport", color: "bg-orange/20" },
  { emoji: "🎵", label: "Chorale", color: "bg-teal/20" },
  { emoji: "🌍", label: "Sortie musée", color: "bg-rose-100" },
  { emoji: "🎓", label: "Remise diplômes", color: "bg-navy/10" },
];

export default function VieScolairePage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filters = ["Tous", "Maternelle", "Primaire", "Collège"];

  const filtered = activeFilter === "Tous"
    ? clubs
    : clubs.filter(c => c.level.includes(activeFilter));

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-teal via-teal-dark to-navy overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        {["🎭", "⚽", "📚", "🔬", "🎨", "🎵"].map((e, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{ left: `${8 + i * 16}%`, top: `${10 + (i % 3) * 35}%` }}
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          >
            {e}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white rounded-full px-5 py-2 text-sm font-bold mb-6"
          >
            🌟 Vie Scolaire
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Une école qui vit,
            <span className="block text-gold italic">qui vibre et qui inspire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-xl leading-relaxed"
          >
            Clubs, activités parascolaires, événements et traditions qui enrichissent
            le quotidien de nos élèves au-delà des cours.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 15C1100 45 700 5 300 35C150 50 60 20 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Clubs & Activités"
            title="Des passions à"
            titleHighlight="découvrir"
            subtitle="7 clubs dynamiques pour que chaque élève trouve sa passion et développe ses talents."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  activeFilter === f
                    ? "bg-teal text-white shadow-glow"
                    : "bg-white text-navy hover:bg-teal/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((club, i) => (
                <motion.div
                  key={club.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-8 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {club.emoji}
                  </motion.div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{club.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-4">{club.desc}</p>
                  <span className="inline-block bg-teal/10 text-teal text-xs font-bold px-3 py-1 rounded-full">
                    {club.level}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Événements"
            title="Nos traditions"
            titleHighlight="& célébrations"
            subtitle="Des moments forts qui créent des souvenirs inoubliables pour toute la communauté scolaire."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {events.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.1} direction="up">
                <div className={`${event.color} border rounded-3xl p-8 h-full hover:-translate-y-2 transition-all duration-300 hover:shadow-card`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{event.emoji}</span>
                    <span className="bg-white/70 text-navy text-xs font-bold px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{event.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Galerie"
            title="Moments capturés"
            light
            subtitle="Un aperçu de la vie animée de notre école à travers des photos et événements."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-12">
            {gallery.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.06} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`${item.color} rounded-3xl h-48 flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden relative group`}
                >
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                  <span className="text-5xl relative z-10">{item.emoji}</span>
                  <span className="font-bold text-navy/80 text-sm relative z-10">{item.label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
