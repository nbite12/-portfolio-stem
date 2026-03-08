"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaCode, FaChartLine } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-950 py-32 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver al Portfolio
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Análisis Técnico</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Explorando el desarrollo, arquitectura y aprendizajes detrás de mis proyectos más destacados.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Article 1: Gestor Total Autónomo */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors shrink-0">
              <FaChartLine className="text-4xl text-indigo-400" />
            </div>
            <div>
              <div className="flex gap-3 mb-3">
                <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">React & TypeScript</span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">AI Integration</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                <Link href="/blog/gestor-autonomo" className="after:absolute after:inset-0">
                  Gestor Total Autónomo (LifeOS): Finanzas Inteligentes
                </Link>
              </h2>
              <p className="text-slate-400 leading-relaxed font-light line-clamp-2">
                Un análisis profundo sobre el desarrollo de una aplicación integral de gestión financiera para profesionales autónomos, con asistente de Inteligencia Artificial integrado.
              </p>
            </div>
          </motion.article>

          {/* Article 2: WheelCopy */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col md:flex-row gap-8 items-start relative"
          >
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors shrink-0">
              <FaCode className="text-4xl text-sky-400" />
            </div>
            <div>
              <div className="flex gap-3 mb-3">
                <span className="text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">JavaFX</span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Desktop App</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                <Link href="/blog/wheelcopy" className="after:absolute after:inset-0">
                  WheelCopy: Reinventando el Portapapeles con JavaFX
                </Link>
              </h2>
              <p className="text-slate-400 leading-relaxed font-light line-clamp-2">
                Descubre cómo construí "Carusel", un gestor avanzado de portapapeles visual que utiliza una interfaz rotatoria para revolucionar la productividad en entornos de escritorio.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </main>
  );
}