"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaChartLine } from "react-icons/fa";

export default function GestorAutonomoBlog() {
  return (
    <main className="min-h-screen bg-slate-950 py-32 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <article className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-8 transition-colors group no-underline">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver al Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-500/10 p-4 rounded-2xl border border-indigo-500/30">
              <FaChartLine className="text-4xl text-indigo-400" />
            </div>
            <div>
              <div className="flex gap-2 mb-2">
                <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">React</span>
                <span className="text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">TypeScript</span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">AI</span>
              </div>
              <p className="text-slate-400 m-0 text-sm font-medium">Por Eric Munive García</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Gestor Total Autónomo (LifeOS): <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Finanzas Inteligentes</span>
          </h1>

          <div className="text-lg text-slate-300 leading-relaxed font-light space-y-6">
            <p className="lead text-xl text-indigo-200/80 font-normal">
              Desarrollar herramientas para el día a día siempre ha sido una de mis motivaciones principales. Hoy quiero hablar de un proyecto clave en mi portfolio: <strong>Gestor Total Autónomo (LifeOS)</strong>, una aplicación integral diseñada para resolver el rompecabezas financiero al que se enfrentan miles de profesionales autónomos.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">El Problema: La doble vida financiera del Autónomo</h2>
            <p>
              Uno de los mayores retos para un trabajador por cuenta propia es la constante fricción entre las finanzas personales y profesionales. A menudo, estos dos mundos colisionan, generando confusión en la gestión del IVA, el IRPF, los gastos deducibles y el ahorro personal. El Gestor Total Autónomo nace para separar y administrar eficientemente ambos mundos desde un único panel de control (Dashboard).
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">Arquitectura y Áreas Clave</h2>
            <p>
              La aplicación, construida sobre un sólido stack de <strong>React</strong> y <strong>TypeScript</strong>, se divide en dos módulos principales integrados mediante una "Visión Global":
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-indigo-500">
              <li>
                <strong className="text-indigo-300">Área Profesional:</strong> Un módulo dedicado estrictamente al negocio. Gestiona la facturación, el control exhaustivo de ingresos y gastos deducibles, el cálculo automático de impuestos (IVA e IRPF) y el seguimiento de las cuotas de la Seguridad Social.
              </li>
              <li>
                <strong className="text-indigo-300">Área Personal:</strong> Diseñada para la vida cotidiana. Permite un control granular de los movimientos bancarios, la asignación de presupuestos mensuales por categorías y la definición de metas de ahorro a largo plazo.
              </li>
              <li>
                <strong className="text-indigo-300">Visión Global:</strong> Un centro de mando que unifica la situación financiera total, ofreciendo proyecciones a futuro y analíticas visuales claras.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">Inteligencia Artificial: El valor añadido</h2>
            <p>
              Lo que realmente eleva a LifeOS por encima de un simple gestor de hojas de cálculo es la integración de un <strong>Asistente de IA impulsado por Google Gemini</strong>. A través de la API de Gemini, la aplicación permite:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
              <li>Automatizar tareas rutinarias de clasificación de gastos.</li>
              <li>Generar comandos financieros inteligentes basados en el contexto del usuario.</li>
              <li>Proporcionar asistencia conversacional sobre la salud financiera del negocio.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">Desarrollo Técnico y Aprendizajes</h2>
            <p>
              Técnicamente, este proyecto fue un excelente campo de pruebas para demostrar mis habilidades en el desarrollo de <strong>Frontend avanzado</strong>. La necesidad de manejar estados complejos (múltiples flujos de datos cruzados entre finanzas personales y profesionales) requirió una arquitectura de estado robusta y tipada estrictamente con TypeScript.
            </p>
            <p>
              Además, se implementó un sistema de diseño moderno, soportando de forma nativa temas oscuros y claros, garantizando una experiencia de usuario (UX) fluida, privada y profesional.
            </p>

            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl mt-12">
              <h3 className="text-xl font-bold text-white mb-4">¿Quieres ver el código?</h3>
              <p className="text-slate-400 mb-6 font-light">
                El código fuente de este proyecto forma parte de mi portfolio técnico y está disponible en GitHub.
              </p>
              <a
                href="https://github.com/nbite12/Gestor-Total-Autonomo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors no-underline"
              >
                <FaGithub className="text-xl" /> Ver Repositorio en GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </article>
    </main>
  );
}