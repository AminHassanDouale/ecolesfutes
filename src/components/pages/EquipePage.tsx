"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

const directors = [
  {
    emoji: "👩‍💼",
    name: "Mme. Directrice Principale",
    role: "Directrice Générale",
    experience: "15 ans d'expérience",
    quote: "Notre mission est de former des êtres complets — intellectuellement curieux, émotionnellement équilibrés et socialement responsables.",
    speciality: "Pédagogie & Management",
  },
];

const departments = [
  {
    dept: "Maternelle",
    emoji: "🌸",
    color: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    accent: "text-pink-600",
    teachers: [
      { emoji: "👩‍🏫", name: "Mme. Koné A.", role: "Enseignante Petite Section", exp: "8 ans", specialty: "Éveil & Motricité" },
      { emoji: "👩‍🏫", name: "Mme. Diallo F.", role: "Enseignante Grande Section", exp: "6 ans", specialty: "Langage & Pré-lecture" },
      { emoji: "👩", name: "Mme. Bah S.", role: "Auxiliaire de puériculture", exp: "10 ans", specialty: "Soin & Bien-être" },
    ],
  },
  {
    dept: "Primaire",
    emoji: "📚",
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    accent: "text-teal",
    teachers: [
      { emoji: "👨‍🏫", name: "M. Traoré B.", role: "Enseignant CP-CE1", exp: "12 ans", specialty: "Français & Maths" },
      { emoji: "👩‍🏫", name: "Mme. Soumaré I.", role: "Enseignante CE2-CM1", exp: "9 ans", specialty: "Sciences & Histoire" },
      { emoji: "👨‍🏫", name: "M. Camara K.", role: "Enseignant CM2", exp: "7 ans", specialty: "Mathématiques & Anglais" },
      { emoji: "👩‍🏫", name: "Mme. Fofana L.", role: "Enseignante EPS & Arts", exp: "5 ans", specialty: "Sport & Créativité" },
    ],
  },
  {
    dept: "Collège",
    emoji: "🚀",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    accent: "text-blue-700",
    teachers: [
      { emoji: "👨‍🏫", name: "M. Coulibaly D.", role: "Prof. Mathématiques", exp: "14 ans", specialty: "Algèbre & Géométrie" },
      { emoji: "👩‍🏫", name: "Mme. N&apos;Diaye A.", role: "Prof. Français & Littérature", exp: "11 ans", specialty: "Expression & Analyse" },
      { emoji: "👨‍🏫", name: "M. Barry O.", role: "Prof. Sciences", exp: "8 ans", specialty: "SVT & Chimie" },
      { emoji: "👩‍🏫", name: "Mme. Sylla M.", role: "Prof. Anglais", exp: "10 ans", specialty: "Communication & TOEFL" },
    ],
  },
  {
    dept: "Administration & Soutien",
    emoji: "🏢",
    color: "from-cream to-cream-dark",
    border: "border-cream-dark",
    accent: "text-navy",
    teachers: [
      { emoji: "👩", name: "Mme. Keïta R.", role: "Secrétaire principale", exp: "7 ans", specialty: "Accueil & Organisation" },
      { emoji: "👩‍⚕️", name: "Mme. Sow H.", role: "Infirmière scolaire", exp: "5 ans", specialty: "Santé & Prévention" },
      { emoji: "👨", name: "M. Diané C.", role: "Conseiller pédagogique", exp: "9 ans", specialty: "Orientation & Soutien" },
    ],
  },
];

const values = [
  { emoji: "❤️", title: "Bienveillance", desc: "Chaque enfant mérite un enseignant qui croit en lui." },
  { emoji: "📚", title: "Excellence", desc: "Nous nous formons continuellement pour donner le meilleur à nos élèves." },
  { emoji: "🤝", title: "Collaboration", desc: "L'école et la famille travaillent main dans la main." },
  { emoji: "🌱", title: "Croissance", desc: "Nous grandissons avec nos élèves, chaque jour." },
];

export default function EquipePage() {
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
            👩‍🏫 Notre Équipe
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
            +40 enseignants qualifiés, formés et passionnés qui donnent le meilleur
            d&apos;eux-mêmes pour l&apos;épanouissement de chaque élève.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 20C1000 50 600 10 0 40Z" fill="#FFFAF2" />
          </svg>
        </div>
      </section>

      {/* Message direction */}
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

      {/* Team by dept */}
      {departments.map((dept, di) => (
        <section key={dept.dept} className={`py-16 ${di % 2 === 0 ? "bg-cream" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl">{dept.emoji}</span>
                <div>
                  <h2 className={`font-serif font-bold text-3xl ${dept.accent}`}>{dept.dept}</h2>
                  <p className="text-navy/50 text-sm">{dept.teachers.length} membres</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dept.teachers.map((teacher, i) => (
                <AnimatedSection key={teacher.name} delay={i * 0.1} direction="up">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`bg-gradient-to-br ${dept.color} border ${dept.border} rounded-3xl p-6 text-center`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center text-4xl mx-auto mb-4 shadow-card">
                      {teacher.emoji}
                    </div>
                    <h4 className="font-bold text-navy mb-1">{teacher.name}</h4>
                    <p className={`text-xs font-semibold ${dept.accent} mb-2`}>{teacher.role}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      <span className="bg-white/70 text-navy text-xs px-2 py-1 rounded-full">{teacher.exp}</span>
                      <span className="bg-white/70 text-navy text-xs px-2 py-1 rounded-full">{teacher.specialty}</span>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

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
            <a href="mailto:rh@petitsfutes.com" className="bg-white text-teal font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all inline-flex items-center gap-2">
              Envoyer ma candidature →
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
