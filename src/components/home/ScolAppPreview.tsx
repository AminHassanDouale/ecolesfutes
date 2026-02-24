"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Bell,
  MessageSquare,
  CreditCard,
  Calendar,
  TrendingUp,
} from "lucide-react";

const features = [
  { icon: FileText, label: "Bulletins en ligne", color: "text-teal bg-teal/10" },
  { icon: Bell, label: "Absences & alertes", color: "text-orange bg-orange/10" },
  { icon: MessageSquare, label: "Messagerie directe", color: "text-blue-500 bg-blue-500/10" },
  { icon: CreditCard, label: "Paiements sécurisés", color: "text-green-500 bg-green-500/10" },
  { icon: Calendar, label: "Agenda scolaire", color: "text-gold bg-gold/10" },
  { icon: TrendingUp, label: "Suivi des progrès", color: "text-purple-500 bg-purple-500/10" },
];

export default function ScolAppPreview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-gold to-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6">
              📱 ScolApp
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              L&apos;école dans votre{" "}
              <span className="gradient-text">poche</span>
              <br />
              <span className="text-gold italic">24h/24</span>
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              ScolApp connecte l&apos;école, les enseignants et les familles en temps réel.
              Tout est centralisé, simple et sécurisé.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-cream border border-cream-dark text-center"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${f.color.split(" ")[1]}`}>
                    <f.icon size={20} className={f.color.split(" ")[0]} />
                  </div>
                  <span className="text-xs font-semibold text-navy">{f.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/scolapp" className="btn-teal">
                Découvrir ScolApp
              </Link>
              <Link href="/portail" className="btn-outline">
                Se connecter
              </Link>
            </div>
          </motion.div>

          {/* Right — App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-64 bg-navy rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-navy-light"
              >
                {/* Status bar */}
                <div className="bg-navy-dark px-6 py-3 flex justify-between items-center">
                  <span className="text-white/60 text-xs">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-teal" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                </div>

                {/* App header */}
                <div className="bg-gradient-to-r from-teal to-teal-dark px-5 py-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <span className="text-xl">🦉</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">ScolApp</div>
                      <div className="text-white/70 text-xs">Bonjour, Parent 👋</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3">
                    <div className="text-white text-xs mb-1 font-medium">Mon enfant</div>
                    <div className="text-white font-bold text-sm">Yasmine K. — CM1</div>
                    <div className="flex justify-between mt-2">
                      <span className="text-white/80 text-xs">Moyenne: 16.5/20</span>
                      <span className="text-green-300 text-xs font-bold">↑ +0.8</span>
                    </div>
                  </div>
                </div>

                {/* App content */}
                <div className="bg-cream p-4 space-y-3 min-h-72">
                  {[
                    { icon: "📊", title: "Bulletin T1", sub: "Disponible", color: "bg-teal/10" },
                    { icon: "✅", title: "Présent aujourd&apos;hui", sub: "8h00 · Arrivée", color: "bg-green-50" },
                    { icon: "📅", title: "Devoir — Maths", sub: "Pour demain", color: "bg-orange/10" },
                    { icon: "💬", title: "Message — Mme. Koné", sub: "Il y a 2h", color: "bg-blue-50" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-xl ${item.color}`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-navy font-semibold text-xs">{item.title}</div>
                        <div className="text-navy/50 text-xs">{item.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-6 -right-10 glass-card rounded-2xl px-4 py-3 shadow-card"
              >
                <div className="text-sm font-bold text-navy">🔔 Nouvelle note</div>
                <div className="text-teal font-bold text-lg">18/20</div>
                <div className="text-xs text-navy/50">Sciences</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-12 glass-card rounded-2xl px-4 py-3 shadow-card"
              >
                <div className="text-xs text-navy/50 mb-1">Paiement reçu ✅</div>
                <div className="text-navy font-bold text-sm">Frais T2</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
