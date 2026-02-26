"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
  Smartphone,
} from "lucide-react";

const footerLinks = {
  niveaux: [
    { label: "Maternelle (2 ans et demi -5 ans)", href: "/niveaux/maternelle" },
    { label: "Primaire (6-11 ans)", href: "/niveaux/primaire" },
    { label: "Collège (12-15 ans)", href: "/niveaux/college" },
  ],
  ecole: [
    { label: "Notre Équipe", href: "/equipe" },
    { label: "Vie Scolaire", href: "/vie-scolaire" },
    { label: "Actualités", href: "/actualites" },
    { label: "Témoignages", href: "/#testimonials" },
  ],
  services: [
    { label: "ScolApp", href: "/scolapp" },
    { label: "Admissions", href: "/admissions" },
    { label: "Portail Parents", href: "/portail" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V60Z"
            fill="#FFFAF2"
          />
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shadow-glow">
                  <span className="text-3xl">🦉</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-white text-xl leading-tight">
                    Les Petits Futés
                  </div>
                  <div className="text-teal text-xs font-semibold tracking-widest uppercase">
                    Groupe Scolaire
                  </div>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                <em className="font-serif text-gold not-italic">
                  &ldquo;Enseigner · Grandir · Inspirer&rdquo;
                </em>
                <br />
                <br />
                L&apos;avenir commence ici — un enfant à la fois. Plus de 10 ans
                d&apos;excellence pédagogique au service des familles.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                  { icon: Instagram, href: "#", color: "hover:bg-pink-500" },
                  { icon: Youtube, href: "#", color: "hover:bg-red-600" },
                ].map(({ icon: Icon, href, color }) => (
                  <motion.a
                    key={href + color}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 ${color}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">
                Niveaux
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.niveaux.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-teal transition-colors text-sm flex items-center gap-1 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -ml-1 transition-all"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">
                L&apos;École
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.ecole.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-teal transition-colors text-sm flex items-center gap-1 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -ml-1 transition-all"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-white/70 text-sm">
                  <MapPin size={16} className="text-teal mt-0.5 shrink-0" />
                  <span>Gabode 5, Djibouti-Ville<br />République de Djibouti</span>
                </li>
                <li className="flex items-center gap-2.5 text-white/70 text-sm">
                  <Phone size={16} className="text-teal shrink-0" />
                  <a href="tel:+25321348696" className="hover:text-teal transition-colors">
                    +253 21 34 86 96
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-white/70 text-sm">
                  <Smartphone size={16} className="text-teal shrink-0" />
                  <a href="tel:+25377198027" className="hover:text-teal transition-colors">
                    +253 77 19 80 27
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-white/70 text-sm">
                  <Mail size={16} className="text-teal shrink-0" />
                  <a href="mailto:contact@petitsfutes.com" className="hover:text-teal transition-colors">
                    contact@petitsfutes.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-white/70 text-sm">
                  <Clock size={16} className="text-teal mt-0.5 shrink-0" />
                  <span>
                    Dim–Jeudi : 7:00 – 13h00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2025 Groupe Scolaire Les Petits Futés. Tous droits réservés.
            </p>
            <div className="flex items-center gap-1 text-white/50 text-sm">
              Conçu avec{" "}
              <Heart size={14} className="text-orange fill-orange mx-1" />
              pour l&apos;excellence éducative
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}