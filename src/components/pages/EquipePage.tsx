"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X, Send, Paperclip } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const directors = [
  {
    emoji: "👨‍💼",
    name: "M. Abdoulfatah",
    role: "Directeur Général",
    experience: "15 ans d'expérience",
    quote: "Notre mission est de former des êtres complets — intellectuellement curieux, émotionnellement équilibrés et socialement responsables.",
    speciality: "Pédagogie & Management",
  },
];

const values = [
  { emoji: "❤️", title: "Bienveillance", desc: "Chaque enfant mérite un enseignant qui croit en lui." },
  { emoji: "📚", title: "Excellence", desc: "Nous nous formons continuellement pour donner le meilleur à nos élèves." },
  { emoji: "🤝", title: "Collaboration", desc: "L'école et la famille travaillent main dans la main." },
  { emoji: "🌱", title: "Croissance", desc: "Nous grandissons avec nos élèves, chaque jour." },
];

type CandidatureForm = {
  nomComplet: string;
  email: string;
  telephone: string;
  poste: string;
  message: string;
  cv: FileList;
  diplomes: FileList;
};

function CandidatureModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CandidatureForm>();

  const onSubmit = (data: CandidatureForm) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white rounded-t-3xl px-8 pt-8 pb-4 border-b border-cream-dark z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif font-bold text-navy text-2xl">Candidature spontanée</h2>
                <p className="text-navy/50 text-sm mt-1">Rejoignez l&apos;équipe des Petits Futés</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-cream-dark transition-colors"
              >
                <X size={18} className="text-navy" />
              </button>
            </div>
          </div>

          <div className="px-8 pb-8 pt-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Candidature envoyée !
                </h3>
                <p className="text-navy/60 text-sm">
                  Nous reviendrons vers vous dans les meilleurs délais. Merci de votre intérêt pour notre école.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 btn-primary"
                >
                  Fermer
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Nom complet */}
                <div>
                  <label className="block text-sm font-bold text-navy mb-1.5">Nom complet *</label>
                  <input
                    {...register("nomComplet", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.nomComplet ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal outline-none transition-colors`}
                    placeholder="Votre nom et prénom"
                  />
                </div>

                {/* Email & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1.5">Email *</label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal outline-none transition-colors`}
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1.5">Téléphone *</label>
                    <input
                      {...register("telephone", { required: true })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.telephone ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal outline-none transition-colors`}
                      placeholder="+253 XX XX XX XX"
                    />
                  </div>
                </div>

                {/* Poste */}
                <div>
                  <label className="block text-sm font-bold text-navy mb-1.5">Poste souhaité *</label>
                  <select
                    {...register("poste", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.poste ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal outline-none transition-colors`}
                  >
                    <option value="">Choisir un poste</option>
                    <option value="maternelle">👶 Enseignant(e) Maternelle</option>
                    <option value="primaire">📚 Enseignant(e) Primaire</option>
                    <option value="college">🚀 Enseignant(e) Collège</option>
                    <option value="administration">🏢 Administration</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-navy mb-1.5">Message de présentation *</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal outline-none transition-colors resize-none`}
                    placeholder="Parlez-nous de vous, de votre expérience et de votre motivation..."
                  />
                </div>

                {/* Fichiers */}
                <div className="space-y-4">
                  <h4 className="font-bold text-navy text-sm flex items-center gap-2">
                    <Paperclip size={16} className="text-teal" /> Pièces jointes
                    <span className="text-navy/40 font-normal">(PDF, JPG, PNG — 5 Mo max)</span>
                  </h4>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-1.5">CV *</label>
                    <div className={`w-full px-4 py-3 rounded-xl border ${errors.cv ? "border-red-400" : "border-cream-dark"} bg-cream`}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register("cv", { required: true })}
                        className="w-full text-sm text-navy/70 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-teal/10 file:text-teal hover:file:bg-teal/20 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-1.5">Diplômes & Attestations</label>
                    <div className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        {...register("diplomes")}
                        className="w-full text-sm text-navy/70 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-gold/20 file:text-gold hover:file:bg-gold/30 cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-navy/40 mt-1">Vous pouvez joindre plusieurs fichiers</p>
                  </div>
                </div>

                <button type="submit" className="w-full btn-primary justify-center !py-4 text-base">
                  Envoyer ma candidature
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function EquipePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy to-navy-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal rounded-full px-5 py-2 text-sm font-bold mb-6"
          >
            👨‍🏫 Notre Équipe
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Des passionnés au service
            <span className="block gradient-text">de vos enfants</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-xl leading-relaxed"
          >
            Une équipe qualifiée, formée et passionnée qui donne le meilleur
            d&apos;elle-même pour l&apos;épanouissement de chaque élève.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 20C1000 50 600 10 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Directeur */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {directors.map((dir) => (
            <AnimatedSection key={dir.name} direction="scale">
              <div className="bg-white rounded-3xl p-10 shadow-card-hover flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center text-6xl shadow-glow">
                    {dir.emoji}
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-serif font-bold text-navy text-2xl">{dir.name}</h3>
                    <span className="bg-teal/10 text-teal text-xs font-bold px-3 py-1 rounded-full">{dir.role}</span>
                    <span className="bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full">{dir.experience}</span>
                  </div>
                  <blockquote className="text-navy/70 italic text-lg leading-relaxed border-l-4 border-teal pl-4 mb-4">
                    &ldquo;{dir.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-navy/50">Spécialité : {dir.speciality}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Notre Philosophie"
            title="Ce qui nous anime"
            titleHighlight="chaque jour"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1} direction="scale">
                <div className="bg-cream rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
                  <div className="text-4xl mb-3">{v.emoji}</div>
                  <h4 className="font-bold text-navy mb-2">{v.title}</h4>
                  <p className="text-navy/60 text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join team CTA */}
      <section className="py-20 bg-gradient-to-r from-teal to-teal-dark text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-5xl mb-6">🤝</div>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Rejoignez notre équipe
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Vous êtes enseignant passionné ? Nous recrutons régulièrement des talents
              engagés pour notre mission éducative.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-teal font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              Envoyer ma candidature →
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* Modal */}
      {showModal && <CandidatureModal onClose={() => setShowModal(false)} />}
    </div>
  );
}