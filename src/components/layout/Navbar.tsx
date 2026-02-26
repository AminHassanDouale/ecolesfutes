"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Phone,
  Smartphone,
} from "lucide-react";
import clsx from "clsx";

const navLinks = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Niveaux",
    href: "#",
    dropdown: [
      { label: "🌸 Maternelle", href: "/niveaux/maternelle", desc: "2 ans et demi – 5 ans" },
      { label: "📚 Primaire", href: "/niveaux/primaire", desc: "6 – 11 ans" },
      { label: "🚀 Collège", href: "/niveaux/college", desc: "12 – 15 ans" },
    ],
  },
  {
    label: "ScolApp",
    href: "/scolapp",
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Vie Scolaire",
    href: "/vie-scolaire",
  },
  {
    label: "Notre Équipe",
    href: "/equipe",
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-DEFAULT text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              +XXX XX XX XX XX
            </span>
            <span className="flex items-center gap-1">
              <Smartphone size={12} />
              WhatsApp disponible
            </span>
          </span>
          <span className="font-semibold tracking-wide">
            ✨ Inscriptions ouvertes pour l&apos;année 2025-2026
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-2xl overflow-hidden shadow-glow bg-white flex items-center justify-center"
              >
                <img
                  src="/logos.png"
                  alt="Les Petits Futés logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <div className="font-serif font-bold text-navy leading-tight text-lg">
                  Les Petits Futés
                </div>
                <div className="text-xs text-teal-400 font-semibold tracking-widest uppercase">
                  Groupe Scolaire
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                      pathname === link.href
                        ? "text-teal-400 bg-teal-50"
                        : "text-navy hover:text-teal-400 hover:bg-teal-50"
                    )}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className={clsx(
                          "transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-card-hover border border-teal-100 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between px-4 py-3 hover:bg-teal-50 transition-colors group"
                          >
                            <span className="font-semibold text-navy text-sm group-hover:text-teal-400 transition-colors">
                              {item.label}
                            </span>
                            <span className="text-xs text-gray-400">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/portail"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-teal-400 border-2 border-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
              >
                <GraduationCap size={16} />
                ScolApp
              </Link>
              <Link
                href="/admissions"
                className="hidden sm:block btn-primary text-sm !px-5 !py-2.5"
              >
                Préinscrire
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-teal-50 transition-colors"
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-navy" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-navy" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-teal-100"
            >
              <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.dropdown ? (
                      <div className="space-y-1">
                        <div className="px-3 py-2 text-sm font-bold text-navy uppercase tracking-wide">
                          {link.label}
                        </div>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-teal-50 hover:text-teal-400 transition-colors pl-6"
                          >
                            {item.label}
                            <span className="text-xs text-gray-400">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={clsx(
                          "block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                          pathname === link.href
                            ? "bg-teal-50 text-teal-400"
                            : "text-navy hover:bg-teal-50 hover:text-teal-400"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 pb-2 flex flex-col gap-3">
                  <Link href="/admissions" className="btn-primary text-center justify-center">
                    Préinscrire mon enfant
                  </Link>
                  <Link href="/portail" className="btn-teal text-center justify-center">
                    Accéder à ScolApp
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}