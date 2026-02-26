"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    emoji: "🎓",
    value: 200,
    prefix: "+",
    suffix: "",
    label: "Élèves accompagnés",
    sublabel: "chaque année",
    color: "from-teal to-teal-dark",
    glow: "shadow-glow",
  },
  {
    emoji: "👩‍🏫",
    value: 10,
    prefix: "+",
    suffix: "",
    label: "Enseignants qualifiés",
    sublabel: "et passionnés",
    color: "from-orange to-orange-dark",
    glow: "shadow-glow-orange",
  },
  {
    emoji: "🏆",
    value: 98,
    prefix: "",
    suffix: "%",
    label: "Taux de réussite",
    sublabel: "aux examens nationaux",
    color: "from-gold to-gold-dark",
    glow: "shadow-glow-gold",
  },
  {
    emoji: "📅",
    value: 10,
    prefix: "+",
    suffix: " ans",
    label: "D'excellence",
    sublabel: "pédagogique",
    color: "from-teal to-navy",
    glow: "shadow-glow",
  },
  {
    emoji: "🌍",
    value: 3,
    prefix: "",
    suffix: "",
    label: "Niveaux",
    sublabel: "Maternelle · Primaire · Collège",
    color: "from-navy to-navy-dark",
    glow: "shadow-glow",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-navy overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 stripe-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-4">
            ✨ Nos Chiffres Clés
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            L&apos;excellence en{" "}
            <span className="gradient-text">chiffres</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative glass-card-dark rounded-3xl p-6 text-center overflow-hidden cursor-default"
            >
              {/* Gradient accent */}
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Emoji icon */}
              <motion.div
                className="text-4xl mb-3 relative z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              >
                {stat.emoji}
              </motion.div>

              {/* Counter */}
              <div className="relative z-10">
                <div className="font-serif font-bold text-4xl md:text-5xl text-white mb-1">
                  {stat.prefix}
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={i * 0.2}
                      useEasing={true}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </div>

                <div className="text-white font-bold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-white/40 text-xs">{stat.sublabel}</div>
              </div>

              {/* Bottom gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
