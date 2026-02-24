"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const news = [
  {
    tag: "Résultats",
    tagColor: "bg-teal/10 text-teal",
    date: "Janvier 2025",
    title: "98% de réussite aux examens de fin d'année 2024",
    excerpt:
      "Nos élèves ont brillé lors des examens nationaux. Un résultat qui témoigne de l'excellence pédagogique de notre équipe enseignante.",
    emoji: "🏆",
    href: "/actualites/resultats-2024",
  },
  {
    tag: "Événement",
    tagColor: "bg-orange/10 text-orange",
    date: "Décembre 2024",
    title: "Gala de fin d'année : une soirée inoubliable",
    excerpt:
      "Chants, danses, saynètes et remises de diplômes... La fête de fin d'année a réuni toute la communauté scolaire dans la joie.",
    emoji: "🎭",
    href: "/actualites/gala-2024",
  },
  {
    tag: "ScolApp",
    tagColor: "bg-gold/10 text-gold",
    date: "Novembre 2024",
    title: "Nouvelle version de ScolApp disponible",
    excerpt:
      "Téléchargez la nouvelle version et profitez du paiement en ligne, des notifications en temps réel et d'une interface repensée.",
    emoji: "📱",
    href: "/actualites/scolapp-update",
  },
];

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
          {news.map((item, i) => (
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
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-white/90 text-navy`}>
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
                    <div className="flex items-center gap-2 text-teal font-bold text-sm group-hover:gap-3 transition-all">
                      Lire la suite
                      <ArrowRight size={14} />
                    </div>
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
