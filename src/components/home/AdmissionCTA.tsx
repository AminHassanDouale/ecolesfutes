"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  "Remplissez le formulaire en ligne",
  "Recevez une confirmation par email",
  "Planifiez une visite de l'école",
  "Finalisez votre dossier d'inscription",
];

export default function AdmissionCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden bg-gradient-to-br from-cream to-cream-dark"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-navy rounded-[2.5rem] overflow-hidden shadow-card-hover"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 lg:p-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6">
                  🎒 Admissions 2025-2026
                </span>
                <h2 className="font-serif text-4xl font-bold text-white mb-4 leading-tight">
                  Rejoignez la famille des{" "}
                  <span className="gradient-text">Petits Futés</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Les inscriptions pour l&apos;année 2025-2026 sont ouvertes pour tous
                  les niveaux. Faites le premier pas vers l&apos;excellence !
                </p>

                <ul className="space-y-3 mb-10">
                  {steps.map((step, i) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 text-white/80 text-sm"
                    >
                      <CheckCircle size={18} className="text-teal shrink-0" />
                      {step}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/admissions" className="btn-primary">
                    Préinscrire maintenant
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/contact" className="btn-outline !border-white/30 !text-white hover:!bg-white/10">
                    Nous contacter
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right — Decorative */}
            <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-teal/20 to-gold/10 p-14">
              <div className="absolute inset-0 dot-pattern opacity-20" />

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-8xl mb-6"
                >
                  🦉
                </motion.div>

                <div className="space-y-4">
                  {[
                    { emoji: "🌸", text: "Maternelle ouverte", color: "text-pink-400" },
                    { emoji: "📚", text: "Primaire disponible", color: "text-teal" },
                    { emoji: "🚀", text: "Collège accessible", color: "text-gold" },
                  ].map(({ emoji, text, color }) => (
                    <motion.div
                      key={text}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 glass-card-dark rounded-xl px-4 py-3"
                    >
                      <span className="text-2xl">{emoji}</span>
                      <span className={`font-bold text-sm ${color}`}>{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-white/60 text-xs mb-1">Places restantes</div>
                  <div className="text-white font-bold text-2xl">Limitées</div>
                  <div className="text-gold text-xs font-semibold mt-1">Inscrivez-vous vite !</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
