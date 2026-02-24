"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Amina K.",
    role: "Maman de Yasmine, CM1",
    avatar: "👩",
    rating: 5,
    text: "Depuis que ma fille est aux Petits Futés, j'ai vu une transformation incroyable. Elle adore l'école, est épanouie et ses résultats sont excellents. L'application ScolApp me permet de suivre ses progrès en temps réel !",
    highlight: "Transformation incroyable",
  },
  {
    name: "Ibrahim M.",
    role: "Papa de deux enfants",
    avatar: "👨",
    rating: 5,
    text: "J'ai inscrit mes deux enfants l'année dernière. Le professionnalisme des enseignants et la communication avec les parents via ScolApp m'ont vraiment impressionné. Je recommande les yeux fermés !",
    highlight: "Communication parfaite",
  },
  {
    name: "Fatou D.",
    role: "Ancienne élève, maintenant au lycée",
    avatar: "👩‍🎓",
    rating: 5,
    text: "Les bases solides que j'ai acquises au collège des Petits Futés m'ont permis d'exceller au lycée. Les professeurs m'ont appris à aimer apprendre, ce qui est le plus précieux cadeau que l'on puisse offrir.",
    highlight: "Bases solides pour la vie",
  },
  {
    name: "Moussa B.",
    role: "Papa de Kofi, 6ème",
    avatar: "👨",
    rating: 5,
    text: "La transition du primaire au collège s'est passée merveilleusement bien grâce à l'accompagnement de l'équipe. Mon fils est confiant, motivé et prépare déjà son projet d'avenir !",
    highlight: "Accompagnement remarquable",
  },
  {
    name: "Salimatou T.",
    role: "Maman de jumeaux en maternelle",
    avatar: "👩",
    rating: 5,
    text: "Pour mes jumeaux de 3 ans, j'avais peur de les confier à une école. Mais l'environnement chaleureux des Petits Futés et la bienveillance de l'équipe nous ont conquis dès le premier jour.",
    highlight: "Environnement chaleureux",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-navy via-navy-dark to-[#0d2440] relative overflow-hidden"
    >
      {/* Decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <SectionHeader
            badge="Témoignages"
            title="Ce que disent"
            titleHighlight="les familles"
            subtitle="Découvrez les témoignages des parents et anciens élèves qui ont fait confiance aux Petits Futés."
            light
          />
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={28} className="text-gold fill-gold" />
            ))}
          </div>
          <div className="text-center">
            <span className="text-white font-bold text-4xl">5.0</span>
            <span className="text-white/50 text-sm ml-2">/ 5.0</span>
            <p className="text-white/50 text-sm">Basé sur 120+ avis</p>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="relative">
          {/* Desktop: 3-card view */}
          <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
            {visible.map((t, i) => (
              <motion.div
                key={t.name + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: i === 1 ? 1 : 0.6,
                  scale: i === 1 ? 1 : 0.95,
                  y: i === 1 ? -10 : 0,
                }}
                transition={{ duration: 0.4 }}
                className={`glass-card-dark rounded-3xl p-8 relative overflow-hidden transition-all ${
                  i === 1 ? "shadow-glow ring-2 ring-teal/40" : ""
                }`}
              >
                <Quote size={40} className="text-teal/20 mb-4" />
                <p className="text-white/80 leading-relaxed mb-6 italic text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                </div>
                {i === 1 && (
                  <div className="absolute top-4 right-4 bg-teal/20 rounded-full px-3 py-1 text-teal text-xs font-bold">
                    ⭐ {t.highlight}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Single card */}
          <div className="md:hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
                className="glass-card-dark rounded-3xl p-8 relative overflow-hidden"
              >
                <Quote size={40} className="text-teal/20 mb-4" />
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-2xl">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{testimonials[current].name}</div>
                    <div className="text-white/50 text-xs">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-teal/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2.5 bg-teal"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-teal/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
