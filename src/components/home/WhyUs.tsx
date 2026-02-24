"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  {
    emoji: "💝",
    title: "Pédagogie Bienveillante",
    description:
      "Approche centrée sur l'enfant avec un rythme respecté. Chaque élève est unique et mérite une attention personnalisée.",
    color: "from-teal/20 to-teal/5",
    borderColor: "border-teal/30",
    accent: "text-teal",
    delay: 0,
  },
  {
    emoji: "🎯",
    title: "Encadrement de Qualité",
    description:
      "Effectifs réduits par classe garantissant plus d'attention individuelle. Nos enseignants sont hautement qualifiés.",
    color: "from-orange/20 to-orange/5",
    borderColor: "border-orange/30",
    accent: "text-orange",
    delay: 0.1,
  },
  {
    emoji: "🛡️",
    title: "Environnement Sécurisé",
    description:
      "Locaux modernes et sécurisés, cour surveillée, accueil périscolaire. La sécurité de vos enfants est notre priorité.",
    color: "from-gold/20 to-gold/5",
    borderColor: "border-gold/30",
    accent: "text-gold",
    delay: 0.2,
  },
  {
    emoji: "📱",
    title: "Technologie Intégrée",
    description:
      "Gestion scolaire via ScolApp avec suivi en temps réel. Parents et enseignants connectés en permanence.",
    color: "from-navy/20 to-navy/5",
    borderColor: "border-navy/30",
    accent: "text-navy",
    delay: 0.3,
  },
  {
    emoji: "🎭",
    title: "Éveil Culturel & Sportif",
    description:
      "Clubs artistiques, sorties éducatives, compétitions sportives et expression créative pour un développement complet.",
    color: "from-teal/20 to-navy/10",
    borderColor: "border-teal/20",
    accent: "text-teal",
    delay: 0.4,
  },
  {
    emoji: "🤝",
    title: "Communication Transparente",
    description:
      "Parents informés à chaque étape via l'application ScolApp. Un lien fort entre l'école et la famille.",
    color: "from-orange/15 to-gold/10",
    borderColor: "border-gold/20",
    accent: "text-gold",
    delay: 0.5,
  },
];

function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: (typeof features)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: feature.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group relative bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-3xl p-8 overflow-hidden cursor-default`}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-white/5 rounded-3xl" />
      </div>

      {/* Number badge */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/40 flex items-center justify-center text-xs font-bold text-navy/50">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Emoji */}
      <motion.div
        className="text-5xl mb-5 inline-block"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {feature.emoji}
      </motion.div>

      {/* Content */}
      <h3 className={`font-serif font-bold text-xl text-navy mb-3 ${feature.accent}`}>
        <span className="text-navy">{feature.title}</span>
      </h3>
      <p className="text-navy/70 leading-relaxed text-sm">{feature.description}</p>

      {/* Bottom decorative line */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 rounded-b-3xl bg-gradient-to-r ${feature.color.replace("/20", "").replace("/5", "")}`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0, width: "100%" }}
      />
    </motion.div>
  );
}

export default function WhyUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-28 bg-cream relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <SectionHeader
            badge="Notre Différence"
            title="Pourquoi nous"
            titleHighlight="choisir ?"
            subtitle="Une école qui allie excellence académique, bienveillance et innovation pour offrir à chaque enfant le meilleur départ dans la vie."
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-navy rounded-3xl p-8 shadow-card-hover">
            <div className="text-4xl">🌟</div>
            <div className="text-left">
              <h3 className="font-serif font-bold text-white text-xl mb-1">
                Rejoignez la famille Les Petits Futés
              </h3>
              <p className="text-white/60 text-sm">
                Plus de 500 familles nous font confiance. Et vous ?
              </p>
            </div>
            <a href="/admissions" className="btn-primary whitespace-nowrap ml-auto">
              S&apos;inscrire maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
