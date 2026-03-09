"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Mí", href: "/#sobre-mi" },
    { name: "Competencias", href: "/#habilidades" },
    { name: "Proyectos", href: "/#proyectos" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-[60] transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => { window.scrollTo(0,0); setIsOpen(false); }}>
              <span className="font-bold text-2xl tracking-wider text-white">
                EM<span className="text-sky-400">.</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/#contacto"
                  className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/20 transform hover:-translate-y-0.5"
                >
                  Contactar
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 pt-20 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center justify-center min-h-[60vh]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-sky-400 block px-3 py-4 rounded-md text-xl font-medium w-full text-center transition-colors border-b border-slate-800/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 w-full px-4">
                <a
                  href="/#contacto"
                  onClick={() => setIsOpen(false)}
                  className="bg-sky-600 hover:bg-sky-500 text-white block px-5 py-4 rounded-full text-xl font-semibold text-center transition-all shadow-lg shadow-sky-500/20"
                >
                  Contactar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
