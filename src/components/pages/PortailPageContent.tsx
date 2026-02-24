"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, ArrowRight, Shield, Smartphone, FileText, Bell, MessageSquare, CreditCard } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const features = [
  { icon: FileText, label: "Bulletins & Notes", color: "text-teal" },
  { icon: Bell, label: "Notifications", color: "text-orange" },
  { icon: MessageSquare, label: "Messagerie", color: "text-blue-500" },
  { icon: CreditCard, label: "Paiements", color: "text-green-600" },
];

export default function PortailPageContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState<"login" | "first">("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-dark to-[#0d2440] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />

      {/* Floating icons */}
      {features.map((f, i) => (
        <motion.div
          key={f.label}
          className="absolute opacity-5"
          style={{ left: `${5 + i * 25}%`, top: `${15 + (i % 2) * 60}%` }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.5 }}
        >
          <f.icon size={60} className={f.color} />
        </motion.div>
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shadow-glow mb-4">
            <span className="text-4xl">🦉</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white">ScolApp</h1>
          <p className="text-teal text-sm font-semibold tracking-widest uppercase">Portail Parents</p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md glass-card-dark rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            {[
              { key: "login", label: "Se connecter" },
              { key: "first", label: "Première connexion" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as "login" | "first")}
                className={`flex-1 py-4 text-sm font-bold transition-all ${
                  tab === t.key
                    ? "text-teal border-b-2 border-teal"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {tab === "login" ? (
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2">
                    Identifiant (email ou ID élève)
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-teal focus:bg-white/15 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-teal focus:bg-white/15 transition-all pr-12"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                    <input type="checkbox" className="rounded accent-teal" />
                    Se souvenir de moi
                  </label>
                  <button type="button" className="text-teal hover:underline font-semibold">
                    Mot de passe oublié ?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full btn-teal justify-center text-base !py-4"
                >
                  Se connecter <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <p className="text-white/70 text-sm leading-relaxed">
                  Pour votre première connexion, vous aurez besoin de votre
                  <span className="text-teal font-semibold"> code d&apos;activation</span> fourni
                  lors de l&apos;inscription de votre enfant.
                </p>
                <div>
                  <label className="block text-sm font-bold text-white/80 mb-2">
                    Code d&apos;activation
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-teal transition-all font-mono tracking-widest text-center text-lg"
                    placeholder="XXXX-XXXX-XXXX"
                    maxLength={14}
                  />
                </div>
                <button className="w-full btn-teal justify-center !py-4">
                  Activer mon compte <Lock size={18} />
                </button>
                <p className="text-white/50 text-xs text-center">
                  Vous n&apos;avez pas reçu votre code ?{" "}
                  <a href="mailto:support@petitsfutes.com" className="text-teal hover:underline">
                    Contactez le support
                  </a>
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Features hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {features.map((f, i) => (
            <div key={f.label} className="flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 text-xs font-medium text-white/70">
              <f.icon size={14} className={f.color} />
              {f.label}
            </div>
          ))}
        </motion.div>

        {/* Security badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex items-center gap-2 text-white/30 text-xs"
        >
          <Shield size={14} />
          Connexion sécurisée · SSL · Données chiffrées
        </motion.div>

        {/* App download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-white/40 text-xs mb-3 flex items-center gap-2 justify-center">
            <Smartphone size={14} />
            Disponible aussi sur mobile
          </p>
          <div className="flex gap-3 justify-center">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 text-white/60 text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer">
              🍎 App Store
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 text-white/60 text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer">
              🤖 Google Play
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
