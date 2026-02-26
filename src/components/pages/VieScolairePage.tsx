"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
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
  { emoji: "🎭", title: "Fete de fin d'année", desc: "La grande fête scolaire : spectacles, danses, remises de diplômes et récompenses.", date: "Juin", color: "bg-gold/10 border-gold/30", photo: "/fete1.jpeg" },
  { emoji: "🚪", title: "Journées Portes Ouvertes", desc: "Visites guidées de l'école, rencontres avec les enseignants, présentation des programmes.", date: "Aout", color: "bg-teal/10 border-teal/30", photo: "/journee.jpeg" },
  { emoji: "🌍", title: "journée culturelle", desc: "Expositions culturelles, saynètes théâtrales, quiz linguistiques — célébration de la diversité.", date: "Novembre", color: "bg-orange/10 border-orange/30", photo: "/culture.jpeg" },
  { emoji: "🏆", title: "Tournois Sportifs", desc: "Compétitions inter-classes en football, basketball et athlétisme. Fair-play et esprit d'équipe.", date: "Avril", color: "bg-blue-50 border-blue-200", photo: "/councour1.jpeg" },
  { emoji: "📖", title: "Concours de Lecture", desc: "Les meilleurs lecteurs récompensés lors d'une cérémonie festive avec leurs familles.", date: "Février", color: "bg-pink-50 border-pink-200", photo: "/images/events/lecture.jpg" },
  { emoji: "✈️", title: "Sorties Éducatives", desc: "Musées, parcs naturels, sites historiques — apprendre en dehors des murs de l'école.", date: "Tout l'an", color: "bg-purple-50 border-purple-200", photo: "/lacassal.jpeg" },
];

// Gallery items — replace src with your actual image paths
const gallery = [
  { src: "/maternelle.jpeg", label: "Classe Maternelle", category: "École", span: "col-span-2 row-span-2" },
  { src: "/ecoless.jpeg", label: "Atelier Arts Plastiques", category: "Activités", span: "" },
  { src: "/tournoi-théâtre.jpeg", label: "tournoi-théâtre", category: "Sport", span: "" },
  { src: "/Labo.jpeg", label: "Labo Sciences", category: "Activités", span: "" },
  { src: "/tournoi-théâtre.jpeg", label: "Spectacle Théâtre", category: "Événements", span: "col-span-2" },
 
];

const galleryCategories = ["Tous", "École", "Activités", "Sport", "Événements"];

// Fallback gradient backgrounds when images aren't loaded yet
const fallbackColors = [
  "from-pink-400 to-rose-500",
  "from-teal-400 to-cyan-500",
  "from-amber-400 to-orange-500",
  "from-blue-400 to-indigo-500",
  "from-green-400 to-emerald-500",
  "from-purple-400 to-violet-500",
  "from-red-400 to-pink-500",
  "from-sky-400 to-blue-500",
  "from-lime-400 to-green-500",
  "from-fuchsia-400 to-pink-500",
  "from-orange-400 to-amber-500",
  "from-cyan-400 to-teal-500",
];

export default function VieScolairePage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("Tous");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxLabel, setLightboxLabel] = useState("");

  const filters = ["Tous", "Maternelle", "Primaire", "Collège"];

  const filteredClubs = activeFilter === "Tous"
    ? clubs
    : clubs.filter(c => c.level.includes(activeFilter));

  const filteredGallery = activeGalleryFilter === "Tous"
    ? gallery
    : gallery.filter(g => g.category === activeGalleryFilter);

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

        {/* Scroll-down preview strip of 4 photos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-10 max-w-5xl mx-auto px-4 mt-14 grid grid-cols-4 gap-3"
        >
          {[
            "/newsss.jpeg",
            "/news.jpeg",
            "/gala.jpeg",
            "/newsssss.jpeg",
          ].map((src, i) => (
            <div key={i} className="relative h-28 rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColors[i]} opacity-80`} />
              <Image
                src={src}
                alt=""
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 15C1100 45 700 5 300 35C150 50 60 20 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Photo highlight — school life banner */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-96">
              {/* Large featured photo */}
              <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer h-64 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-navy opacity-70" />
                <Image
                  src="/images/school/main-building.jpg"
                  alt="École Les Petits Futés"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Notre École</span>
                  <h3 className="font-serif text-white text-2xl font-bold mt-1">Les Petits Futés — Gabode 5</h3>
                </div>
              </div>

              {/* Two stacked smaller photos */}
              <div className="flex flex-col gap-4">
                <div className="relative rounded-3xl overflow-hidden group cursor-pointer flex-1 h-44 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 opacity-70" />
                  <Image
                    src="/images/school/cour-recreation.jpg"
                    alt="Cour de récréation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-bold text-white text-sm">Cour de récréation</span>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden group cursor-pointer flex-1 h-44 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-teal-500 opacity-70" />
                  <Image
                    src="/images/school/salle-classe.jpg"
                    alt="Salle de classe"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-bold text-white text-sm">Nos salles de classe</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Clubs & Activités"
            title="Des passions à"
            titleHighlight="découvrir"
            subtitle="7 clubs dynamiques pour que chaque élève trouve sa passion et développe ses talents."
          />

          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  activeFilter === f
                    ? "bg-teal text-white shadow-glow"
                    : "bg-cream text-navy hover:bg-teal/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredClubs.map((club, i) => (
                <motion.div
                  key={club.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-cream rounded-3xl p-8 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 group"
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

      {/* Events with photos */}
      <section className="py-20 bg-cream">
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
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 group h-full flex flex-col">
                  {/* Photo header */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColors[i]} opacity-80`} />
                    <Image
                      src={event.photo}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy/20" />
                    {/* Date badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-bold px-3 py-1.5 rounded-full">
                      📅 {event.date}
                    </div>
                    {/* Emoji */}
                    <div className="absolute bottom-4 left-4 text-4xl filter drop-shadow-lg">
                      {event.emoji}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-navy text-xl mb-2 group-hover:text-teal transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed flex-1">{event.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Galerie Photos"
            title="Moments capturés"
            light
            subtitle="Un aperçu de la vie animée de notre école — cliquez pour agrandir."
          />

          {/* Gallery filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryFilter(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  activeGalleryFilter === cat
                    ? "bg-teal text-white shadow-glow"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            <AnimatePresence>
              {filteredGallery.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
                  onClick={() => { setLightboxSrc(item.src); setLightboxLabel(item.label); }}
                >
                  {/* Fallback gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColors[i % fallbackColors.length]}`} />
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    />
                  </div>
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fallback bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal to-navy" />
              <Image
                src={lightboxSrc}
                alt={lightboxLabel}
                width={1200}
                height={800}
                className="relative z-10 w-full h-full object-contain max-h-[80vh]"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-navy/90 to-transparent p-6">
                <span className="text-white font-bold text-lg">{lightboxLabel}</span>
              </div>
              {/* Close button */}
              <button
                onClick={() => setLightboxSrc(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}