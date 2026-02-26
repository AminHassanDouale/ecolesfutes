"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle, Download, Calendar, FileText, ArrowRight, Send, Paperclip } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const levels = [
  {
    emoji: "🌸",
    title: "Maternelle",
    ages: "2 ans et demi – 5 ans",
    requirements: ["Âge minimum : 2 ans et demi révolus à la rentrée", "Entretien avec les parents", "Visite de découverte obligatoire"],
    docs: ["Acte de naissance", "Photo d'identité (2 exemplaires)", "Carnet de vaccination", "Carnets scolaires (si scolarisé précédemment)"],
    color: "from-pink-50 to-rose-50",
    border: "border-pink-200",
  },
  {
    emoji: "📚",
    title: "Primaire",
    ages: "6 – 11 ans",
    requirements: ["Dossier scolaire de l'année précédente", "Test de niveau (optionnel)", "Entretien avec un enseignant"],
    docs: ["Acte de naissance", "Photo d'identité (2 exemplaires)", "Carnets scolaires des 2 dernières années", "Certificat de scolarité précédent"],
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
  },
  {
    emoji: "🚀",
    title: "Collège",
    ages: "12 – 15 ans",
    requirements: ["Bulletins des 2 dernières années", "Test d'admission obligatoire", "Entretien de motivation"],
    docs: ["Acte de naissance", "Photo d'identité (2 exemplaires)", "Carnets scolaires des 2 dernières années", "Certificat de scolarité précédent"],
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
  },
];

const pricing = [
  { level: "Maternelle", annual: "XXX XXX", trimestrial: "XXX XXX", monthly: "XXX XXX" },
  { level: "Primaire", annual: "XXX XXX", trimestrial: "XXX XXX", monthly: "XXX XXX" },
  { level: "Collège", annual: "XXX XXX", trimestrial: "XXX XXX", monthly: "XXX XXX" },
];

type FormData = {
  parentNomComplet: string;
  email: string;
  telephone: string;
  enfantNomComplet: string;
  enfantAge: string;
  niveau: string;
  autreEcole: string;
  message: string;
  acteNaissance: FileList;
  photoIdentite: FileList;
  carnets: FileList;
};

export default function AdmissionsPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [autreEcole, setAutreEcole] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy to-navy-dark overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal rounded-full px-5 py-2 text-sm font-bold mb-6"
          >
            🎒 Admissions 2025-2026 — Places limitées
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Rejoignez la famille des
            <span className="block gradient-text">Petits Futés</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/75 text-xl mb-8"
          >
            Inscriptions ouvertes pour la Maternelle, le Primaire et le Collège.
            Commencez dès aujourd&apos;hui votre demande en ligne.
          </motion.p>
          <motion.a
            href="#form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="btn-primary inline-flex"
          >
            Remplir le formulaire <ArrowRight size={18} />
          </motion.a>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 20C1000 50 600 10 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Calendrier"
            title="Dates importantes"
            subtitle="Planifiez votre démarche d'inscription dès maintenant."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "📅", title: "Ouverture préinscriptions", date: "5 Août 2025", color: "bg-teal/10 border-teal/30" },
              { icon: "🏫", title: "Journées Portes Ouvertes", date: "Février & Août 2025", color: "bg-gold/10 border-gold/30" },
              { icon: "🎒", title: "Rentrée scolaire", date: "5 Septembre 2025", color: "bg-orange/10 border-orange/30" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} direction="scale">
                <div className={`${item.color} border rounded-2xl p-6 flex items-start gap-4`}>
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-navy">{item.title}</div>
                    <div className="text-navy/60 text-sm flex items-center gap-1 mt-1">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Level requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Admissions"
            title="Conditions d'admission"
            titleHighlight="par niveau"
            subtitle="Chaque niveau a ses propres critères d'admission. Consultez les détails ci-dessous."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {levels.map((level, i) => (
              <AnimatedSection key={level.title} delay={i * 0.15} direction="up">
                <div className={`bg-gradient-to-br ${level.color} border ${level.border} rounded-3xl p-8 h-full`}>
                  <div className="text-5xl mb-4">{level.emoji}</div>
                  <h3 className="font-serif font-bold text-navy text-2xl mb-1">{level.title}</h3>
                  <span className="text-sm text-navy/50 mb-6 block">{level.ages}</span>

                  <div className="mb-6">
                    <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                      <CheckCircle size={16} className="text-teal" /> Conditions
                    </h4>
                    <ul className="space-y-2">
                      {level.requirements.map((r) => (
                        <li key={r} className="text-navy/70 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                      <FileText size={16} className="text-orange" /> Documents requis
                    </h4>
                    <ul className="space-y-2">
                      {level.docs.map((d) => (
                        <li key={d} className="text-navy/70 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-teal font-bold text-sm hover:gap-3 transition-all">
                    <Download size={16} /> Télécharger le dossier PDF
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Tarifs"
            title="Frais de scolarité"
            subtitle="Des options de paiement flexibles pour s'adapter à votre situation."
          />
          <div className="mt-12 bg-white rounded-3xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-bold">Niveau</th>
                  <th className="text-center px-6 py-4 font-bold">Annuel</th>
                  <th className="text-center px-6 py-4 font-bold">Trimestriel</th>
                  <th className="text-center px-6 py-4 font-bold">Mensuel</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? "bg-cream/50" : "bg-white"}>
                    <td className="px-6 py-4 font-bold text-navy">{row.level}</td>
                    <td className="px-6 py-4 text-center text-navy/70">{row.annual} FDJ</td>
                    <td className="px-6 py-4 text-center text-navy/70">{row.trimestrial} FDJ</td>
                    <td className="px-6 py-4 text-center text-navy/70">{row.monthly} FDJ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white" id="form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Formulaire"
            title="Préinscription"
            titleHighlight="en ligne"
            subtitle="Remplissez ce formulaire et nous vous contacterons dans les 48h pour confirmer votre dossier."
          />

          {submitted ? (
            <AnimatedSection direction="scale" className="mt-12">
              <div className="bg-teal/10 border border-teal/30 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  Demande envoyée avec succès !
                </h3>
                <p className="text-navy/70">
                  Nous vous contacterons dans les 48h pour vous donner suite à votre demande
                  de préinscription. Consultez vos emails !
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Parent info */}
                <div className="md:col-span-2">
                  <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
                    👨‍👩‍👧 Informations du parent
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">Nom complet du parent *</label>
                  <input
                    {...register("parentNomComplet", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.parentNomComplet ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal transition-colors`}
                    placeholder="Nom et prénom complets"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Email *</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal transition-colors`}
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Téléphone *</label>
                  <input
                    {...register("telephone", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.telephone ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal transition-colors`}
                    placeholder="+253 XX XX XX XX"
                  />
                </div>

                {/* Child info */}
                <div className="md:col-span-2">
                  <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2 mt-2">
                    🎒 Informations de l&apos;enfant
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">Nom complet de l&apos;enfant *</label>
                  <input
                    {...register("enfantNomComplet", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.enfantNomComplet ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal transition-colors`}
                    placeholder="Nom et prénom complets de l'enfant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Âge *</label>
                  <input
                    {...register("enfantAge", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.enfantAge ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal transition-colors`}
                    placeholder="Âge en années"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Niveau souhaité *</label>
                  <select
                    {...register("niveau", { required: true })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.niveau ? "border-red-400" : "border-cream-dark"} bg-cream focus:border-teal transition-colors`}
                  >
                    <option value="">Choisir un niveau</option>
                    <option value="maternelle">🌸 Maternelle (2 ans et demi – 5 ans)</option>
                    <option value="primaire">📚 Primaire (6 – 11 ans)</option>
                    <option value="college">🚀 Collège (12 – 15 ans)</option>
                  </select>
                </div>

                {/* Previous school */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">
                    L&apos;enfant était-il scolarisé dans une autre école auparavant ? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="oui"
                        {...register("autreEcole", { required: true })}
                        onChange={() => setAutreEcole(true)}
                        className="accent-teal w-4 h-4"
                      />
                      <span className="text-navy text-sm font-medium">Oui</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="non"
                        {...register("autreEcole", { required: true })}
                        onChange={() => setAutreEcole(false)}
                        className="accent-teal w-4 h-4"
                      />
                      <span className="text-navy text-sm font-medium">Non</span>
                    </label>
                  </div>
                </div>

                {/* Documents */}
                <div className="md:col-span-2">
                  <h3 className="font-bold text-navy text-lg mb-4 flex items-center gap-2 mt-2">
                    <Paperclip size={20} className="text-teal" /> Pièces jointes
                  </h3>
                  <p className="text-navy/50 text-sm mb-4">Formats acceptés : PDF, JPG, PNG — 5 Mo max par fichier</p>
                </div>

                {/* Acte de naissance */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">
                    Acte de naissance *
                  </label>
                  <div className={`w-full px-4 py-3 rounded-xl border ${errors.acteNaissance ? "border-red-400" : "border-cream-dark"} bg-cream`}>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      {...register("acteNaissance", { required: true })}
                      className="w-full text-sm text-navy/70 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-teal/10 file:text-teal hover:file:bg-teal/20 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Photo d'identité */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">
                    Photo d&apos;identité de l&apos;enfant *
                  </label>
                  <div className={`w-full px-4 py-3 rounded-xl border ${errors.photoIdentite ? "border-red-400" : "border-cream-dark"} bg-cream`}>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      {...register("photoIdentite", { required: true })}
                      className="w-full text-sm text-navy/70 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-teal/10 file:text-teal hover:file:bg-teal/20 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Carnets scolaires — conditionnel */}
                {autreEcole && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-navy mb-2">
                      Carnets scolaires (ancienne école) *
                    </label>
                    <div className={`w-full px-4 py-3 rounded-xl border ${errors.carnets ? "border-red-400" : "border-cream-dark"} bg-amber-50 border-amber-200`}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        {...register("carnets", { required: autreEcole })}
                        className="w-full text-sm text-navy/70 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-gold/20 file:text-gold hover:file:bg-gold/30 cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-navy/50 mt-1.5">Vous pouvez joindre plusieurs fichiers (bulletins, relevés de notes, etc.)</p>
                  </div>
                )}

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">Message (optionnel)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:border-teal transition-colors resize-none"
                    placeholder="Questions particulières, informations complémentaires..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center text-lg !py-4"
              >
                Envoyer ma demande de préinscription
                <Send size={20} />
              </button>
              <p className="text-center text-navy/50 text-xs">
                Vos données sont protégées et ne seront jamais partagées avec des tiers.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}