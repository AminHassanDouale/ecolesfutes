"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star, BookOpen, Users, Trophy } from "lucide-react";

const floatingElements = [
  { emoji: "📚", x: "8%", y: "20%", delay: 0, size: "text-3xl" },
  { emoji: "🎓", x: "88%", y: "15%", delay: 0.5, size: "text-4xl" },
  { emoji: "✏️", x: "75%", y: "65%", delay: 1, size: "text-2xl" },
  { emoji: "🌟", x: "12%", y: "70%", delay: 1.5, size: "text-3xl" },
  { emoji: "🔬", x: "92%", y: "45%", delay: 0.8, size: "text-2xl" },
  { emoji: "🎨", x: "5%", y: "50%", delay: 1.2, size: "text-2xl" },
  { emoji: "🏆", x: "60%", y: "10%", delay: 0.3, size: "text-3xl" },
];

const quickStats = [
  { icon: BookOpen, value: "+500", label: "Élèves" },
  { icon: Users, value: "+40", label: "Enseignants" },
  { icon: Trophy, value: "98%", label: "Réussite" },
  { icon: Star, value: "+10 ans", label: "Excellence" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-[#0d2440]"
    >
      {/* Animated background shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-teal/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full bg-gold/8 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating emojis */}
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className={`absolute ${el.size}`}
            style={{ left: el.x, top: el.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
          >
            <span className="filter drop-shadow-lg opacity-60">{el.emoji}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left — Text */}
        <motion.div style={{ y: y2 }} className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal rounded-full px-5 py-2 text-sm font-bold mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Inscriptions ouvertes 2026-2027
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            L&apos;avenir
            <span className="block gradient-text">commence ici</span>
            <span className="block text-white/90">— un enfant</span>
            <span className="block text-gold italic">à la fois</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/75 text-lg lg:text-xl max-w-lg mb-4 leading-relaxed"
          >
            Maternelle · Primaire · Collège
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gold font-serif italic text-xl mb-10"
          >
            &ldquo;Enseigner · Grandir · Inspirer&rdquo;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <Link href="/admissions" className="btn-primary text-base !px-8 !py-4 group">
              Préinscrire mon enfant
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
            <Link href="#about" className="btn-outline text-base !px-8 !py-4 !text-gold !border-gold hover:!bg-gold hover:!text-white">
              Découvrir l&apos;école
            </Link>
          </motion.div>

          {/* Quick stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0"
          >
            {quickStats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center glass-card-dark rounded-2xl p-3"
              >
                <Icon size={18} className="text-teal mx-auto mb-1" />
                <div className="text-white font-bold text-lg leading-tight">{value}</div>
                <div className="text-white/50 text-xs">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Decorative visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex items-center justify-center relative"
        >
          {/* Central circular element */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-teal/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-gold/20"
            />

            {/* Central logo */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shadow-glow">
              <span className="text-7xl filter drop-shadow-lg">🦉</span>
            </div>

            {/* Orbiting badges */}
            {[
              { emoji: "🌸", label: "Maternelle", angle: 0 },
              { emoji: "📚", label: "Primaire", angle: 120 },
              { emoji: "🚀", label: "Collège", angle: 240 },
            ].map(({ emoji, label, angle }) => {
              const rad = (angle - 90) * (Math.PI / 180);
              const r = 155;
              const x = r * Math.cos(rad);
              const y = r * Math.sin(rad);
              return (
                <motion.div
                  key={label}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: angle / 100,
                  }}
                >
                  <div className="glass-card-dark rounded-2xl px-3 py-2 text-center shadow-lg">
                    <span className="text-xl">{emoji}</span>
                    <div className="text-white text-xs font-bold mt-0.5 whitespace-nowrap">
                      {label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 55C120 50 240 40 360 40C480 40 600 50 720 55C840 60 960 60 1080 55C1200 50 1320 40 1380 35L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V60Z"
            fill="#FFFAF2"
          />
        </svg>
      </div>
    </section>
  );
}
