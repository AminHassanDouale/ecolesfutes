"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const news = [
  {
    tag: "ScolApp",
    tagColor: "bg-gold/10 text-gold",
    date: "Février 2026",
    sortDate: new Date("2026-02-01"),
    title: "Nouvelle version de ScolApp disponible",
    excerpt:
      "Téléchargez la nouvelle version et profitez du paiement en ligne, des notifications en temps réel et d'une interface repensée.",
    emoji: "📱",
    href: "/actualites/scolapp-update",
  },
  {
    tag: "Fête de Noël",
    tagColor: "bg-red-500/10 text-red-600",
    date: "Décembre 2025",
    sortDate: new Date("2025-12-01"),
    title: "Spectacle de Noël : magie et émerveillement",
    excerpt:
      "Les enfants ont présenté un magnifique spectacle de Noël, mettant en scène chants et pièces de théâtre devant des parents ravis.",
    emoji: "🎄",
    href: "/actualites/noel-2025",
  },
  {
    tag: "Fête de l'Année",
    tagColor: "bg-gold/10 text-gold",
    date: "Décembre 2025",
    sortDate: new Date("2025-12-15"),
    title: "Fête de l'Année : célébrons ensemble !",
    excerpt:
      "Retrouvez-nous pour une soirée festive pleine de surprises, de musique et de partage pour accueillir la nouvelle année en famille.",
    emoji: "🎆",
    href: "/actualites/fete-annee-2025",
  },
  {
    tag: "Résultats",
    tagColor: "bg-teal/10 text-teal",
    date: "Juin 2025",
    sortDate: new Date("2025-06-20"),
    title: "98% de réussite aux examens de fin d'année 2024-2025",
    excerpt:
      "Nos élèves ont brillé lors des examens nationaux. Un résultat qui témoigne de l'excellence pédagogique de notre équipe enseignante.",
    emoji: "🏆",
    href: "/actualites/resultats-2025",
  },
  {
    tag: "Fête de Fin d'École",
    tagColor: "bg-teal/10 text-teal",
    date: "Juin 2025",
    sortDate: new Date("2025-06-10"),
    title: "Fête de fin d'école : une soirée inoubliable",
    excerpt:
      "Chants, danses, saynètes et remises de diplômes... La fête de fin d'école a réuni toute la communauté scolaire dans la joie et l'émotion.",
    emoji: "🎓",
    href: "/actualites/fete-fin-ecole-2025",
  },
  {
    tag: "Halloween",
    tagColor: "bg-orange/10 text-orange",
    date: "Octobre 2024",
    sortDate: new Date("2024-10-31"),
    title: "Halloween à l'école : frissons et déguisements !",
    excerpt:
      "Sorcières, vampires et fantômes ont envahi l'école ! Les élèves ont rivalisé de créativité pour leurs costumes lors de cette journée spéciale.",
    emoji: "🎃",
    href: "/actualites/halloween-2024",
  },
];

// Sorted from most recent to oldest
const sortedNews = [...news].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());

export default function NewsPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeader
            badge="Actualités"
            title="Restez connectés"
            titleHighlight="à l'école"
            subtitle="Les dernières nouvelles, événements et annonces de notre communauté scolaire."
            centered={false}
          />
          <Link
            href="/actualites"
            className="flex items-center gap-2 text-teal font-bold hover:gap-3 transition-all whitespace-nowrap"
          >
            Toutes les actualités
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedNews.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={item.href} className="group block h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-card h-full transition-all duration-400 group-hover:shadow-card-hover group-hover:-translate-y-2">
                  {/* Visual header */}
                  <div className="h-48 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <motion.span
                      className="text-7xl relative z-10 filter drop-shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      {item.emoji}
                    </motion.span>
                    {/* Tag overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-white/90 text-navy">
                        <Tag size={10} />
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                    <h3 className="font-serif font-bold text-navy text-lg mb-3 group-hover:text-teal transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}