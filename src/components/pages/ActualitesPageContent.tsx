"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ArrowRight, Search } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const allNews = [
  {
    tag: "Résultats",
    emoji: "🏆",
    date: "Janvier 2025",
    title: "98% de réussite aux examens nationaux 2024",
    excerpt: "Nos élèves ont brillé lors des examens de fin d'année. Félicitations à tous nos lauréats et à leurs familles !",
    category: "Résultats",
    featured: true,
  },
  {
    tag: "Événement",
    emoji: "🎭",
    date: "Décembre 2024",
    title: "Gala de fin d'année 2024 : une soirée mémorable",
    excerpt: "Chants, danses, sketchs et remises de diplômes... Le gala annuel a réuni toute la communauté dans la joie et l'émotion.",
    category: "Événements",
    featured: false,
  },
  {
    tag: "ScolApp",
    emoji: "📱",
    date: "Novembre 2024",
    title: "Nouvelle version de ScolApp disponible dès maintenant",
    excerpt: "Téléchargez la v3.0 avec paiement en ligne, notifications améliorées et nouveau design épuré.",
    category: "ScolApp",
    featured: false,
  },
  {
    tag: "Pédagogie",
    emoji: "💡",
    date: "Octobre 2024",
    title: "Lancement du programme de tutorat entre élèves",
    excerpt: "Les grands élèves du collège aident les plus jeunes : une initiative qui renforce la solidarité et améliore les résultats.",
    category: "Pédagogie",
    featured: false,
  },
  {
    tag: "Sport",
    emoji: "⚽",
    date: "Septembre 2024",
    title: "Tournoi inter-classes : l'équipe de 5ème championne !",
    excerpt: "La 5ème B s'est imposée en finale lors du tournoi annuel de football. Bravo pour l'esprit sportif de tous !",
    category: "Événements",
    featured: false,
  },
  {
    tag: "Conseil",
    emoji: "📖",
    date: "Août 2024",
    title: "5 conseils pour aider votre enfant à la rentrée",
    excerpt: "L'équipe pédagogique partage ses meilleurs conseils pour accompagner votre enfant dans les premiers jours de l'année scolaire.",
    category: "Conseils",
    featured: false,
  },
];

const categories = ["Tous", "Résultats", "Événements", "ScolApp", "Pédagogie", "Conseils"];

export default function ActualitesPageContent() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = allNews.filter((n) => {
    const matchesCategory = activeCategory === "Tous" || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = allNews.find((n) => n.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy to-navy-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold rounded-full px-5 py-2 text-sm font-bold mb-6"
          >
            📰 Actualités & Blog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Restez connectés
            <span className="block gradient-text">à la vie de l&apos;école</span>
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 20C1000 50 600 10 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="bg-navy rounded-3xl overflow-hidden shadow-card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-teal/20 to-gold/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <span className="text-9xl relative z-10 filter drop-shadow-lg">{featured.emoji}</span>
                    <span className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ À la une
                    </span>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-teal text-sm mb-4">
                      <Tag size={14} />
                      {featured.tag}
                      <span className="mx-2 text-white/30">·</span>
                      <Calendar size={14} />
                      {featured.date}
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-white mb-4 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">{featured.excerpt}</p>
                    <button className="btn-teal self-start">
                      Lire l&apos;article complet <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* All articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between items-start">
            <SectionHeader
              badge="Blog"
              title="Toutes les"
              titleHighlight="actualités"
              centered={false}
            />
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal transition-colors"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white shadow-lg"
                    : "bg-cream text-navy hover:bg-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-cream border border-cream-dark rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="h-44 bg-navy flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <span className="text-6xl relative z-10">{article.emoji}</span>
                    <span className="absolute top-3 left-3 bg-white/90 text-navy text-xs font-bold px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-xs text-navy/40 mb-3">
                      <Calendar size={12} />
                      {article.date}
                    </div>
                    <h3 className="font-serif font-bold text-navy text-lg mb-3 group-hover:text-teal transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-teal font-bold text-sm group-hover:gap-3 transition-all">
                      Lire <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-navy/50">
              <div className="text-5xl mb-4">🔍</div>
              <p>Aucun article trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
