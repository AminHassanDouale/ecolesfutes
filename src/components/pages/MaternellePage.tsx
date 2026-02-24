"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Heart, Sun, Music, Palette, BookOpen, Users } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const activities = [
  { emoji: "🎨", title: "Arts & Créativité", desc: "Peinture, dessin, modelage — l'expression libre au quotidien" },
  { emoji: "🎵", title: "Musique & Éveil", desc: "Chants, instruments, rythme pour développer la sensibilité" },
  { emoji: "🏃", title: "Motricité", desc: "Jeux d'équilibre, coordination et développement physique" },
  { emoji: "📖", title: "Langage & Lecture", desc: "Histoires, albums, jeux de mots pour préparer la lecture" },
  { emoji: "🌱", title: "Jardin d'Éveil", desc: "Découverte de la nature, petits jardins, observation" },
  { emoji: "🧩", title: "Jeux de Construction", desc: "Logique, espace, créativité à travers les jeux" },
];

const schedule = [
  { time: "7h30", activity: "Accueil des enfants", icon: "🌅" },
  { time: "8h15", activity: "Atelier du matin (dessin, coloriage)", icon: "🎨" },
  { time: "9h30", activity: "Activités dirigées (langage, maths)", icon: "📚" },
  { time: "10h30", activity: "Récréation & motricité", icon: "🏃" },
  { time: "11h00", activity: "Atelier artistique ou musical", icon: "🎵" },
  { time: "12h00", activity: "Déjeuner & repos", icon: "😴" },
  { time: "14h00", activity: "Lecture & histoires", icon: "📖" },
  { time: "15h00", activity: "Ateliers libres", icon: "🎯" },
  { time: "17h30", activity: "Accueil périscolaire / retour maison", icon: "🏠" },
];

const skills = [
  { icon: Heart, label: "Autonomie", color: "text-pink-500 bg-pink-50" },
  { icon: Users, label: "Socialisation", color: "text-blue-500 bg-blue-50" },
  { icon: BookOpen, label: "Pré-lecture", color: "text-teal bg-teal/10" },
  { icon: Sun, label: "Langage oral", color: "text-yellow-500 bg-yellow-50" },
  { icon: Music, label: "Musicalité", color: "text-purple-500 bg-purple-50" },
  { icon: Palette, label: "Créativité", color: "text-orange bg-orange/10" },
];

export default function MaternellePage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-pink-500 via-rose-500 to-orange overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        {/* Floating emojis */}
        {["🌸", "🎨", "🌈", "⭐", "🎵", "🦋"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-30"
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          >
            {emoji}
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
                🌸 Maternelle · 2 – 5 ans
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Les premiers pas
                <span className="block text-yellow-200 italic">vers la curiosité</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/85 text-xl mb-8 leading-relaxed"
              >
                Un univers coloré et bienveillant où chaque enfant s&apos;épanouit à son rythme,
                découvre le monde et développe sa curiosité naturelle.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <Link href="/admissions" className="btn-primary">
                  Inscrire mon enfant <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-outline !border-white !text-white hover:!bg-white/20">
                  Nous visiter
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-slow" />
                <div className="absolute inset-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-9xl">🌸</span>
                </div>
                {["🎨", "🎵", "📚", "🌈"].map((e, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180);
                  const r = 130;
                  return (
                    <motion.div
                      key={e}
                      className="absolute w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl shadow-lg"
                      style={{
                        left: `calc(50% + ${r * Math.cos(angle)}px)`,
                        top: `calc(50% + ${r * Math.sin(angle)}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    >
                      {e}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none">
            <path d="M0 80L1440 80L1440 30C1200 60 960 20 720 35C480 50 240 10 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-cream" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Développement"
            title="Compétences développées"
            subtitle="Notre programme maternelle favorise un développement global et harmonieux de l'enfant."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {skills.map(({ icon: Icon, label, color }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} direction="scale">
                <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-card hover:-translate-y-2 transition-transform text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color.split(" ")[1]}`}>
                    <Icon size={28} className={color.split(" ")[0]} />
                  </div>
                  <span className="font-bold text-navy text-sm">{label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Activités"
            title="Une journée riche et"
            titleHighlight="stimulante"
            subtitle="Des activités variées et adaptées pour éveiller toutes les intelligences de votre enfant."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {activities.map((act, i) => (
              <AnimatedSection key={act.title} delay={i * 0.1} direction="up">
                <div className="group bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-card-hover">
                  <div className="text-5xl mb-4">{act.emoji}</div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{act.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{act.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Organisation"
            title="La journée type"
            subtitle="Un emploi du temps équilibré pour un enfant épanoui."
          />
          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-200 hidden md:block" />
            {schedule.map((item, i) => (
              <AnimatedSection key={item.time} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex gap-4 md:gap-8 mb-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 ? (
                      <div className="bg-white rounded-2xl p-4 shadow-card">
                        <div className="font-bold text-pink-500 text-sm mb-1">{item.time}</div>
                        <div className="flex items-center gap-2 md:justify-end">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-navy font-medium text-sm">{item.activity}</span>
                        </div>
                      </div>
                    ) : <div />}
                  </div>
                  <div className="flex-shrink-0 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-400 ring-4 ring-pink-100" />
                  </div>
                  <div className="flex-1">
                    {i % 2 !== 0 ? (
                      <div className="bg-white rounded-2xl p-4 shadow-card">
                        <div className="font-bold text-pink-500 text-sm mb-1">{item.time}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-navy font-medium text-sm">{item.activity}</span>
                        </div>
                      </div>
                    ) : <div />}
                    {/* Mobile: always show */}
                    <div className="md:hidden bg-white rounded-2xl p-4 shadow-card">
                      <div className="font-bold text-pink-500 text-sm mb-1">{item.time}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-navy font-medium text-sm">{item.activity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-6xl mb-6">🌸</div>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Offrez à votre enfant le meilleur départ
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Venez visiter notre section maternelle et rencontrer notre équipe passionnée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all">
                Inscrire mon enfant maintenant
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all">
                Planifier une visite
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
