"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="font-bold text-2xl tracking-wider text-white">
              EM<span className="text-sky-400">.</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#sobre-mi"
                className="text-slate-300 hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre Mí
              </a>
              <a
                href="#habilidades"
                className="text-slate-300 hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Competencias
              </a>
              <a
                href="#proyectos"
                className="text-slate-300 hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/20"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
