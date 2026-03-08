"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaCode } from "react-icons/fa";

export default function WheelCopyBlog() {
  return (
    <main className="min-h-screen bg-slate-950 py-32 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <article className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 mb-8 transition-colors group no-underline">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver al Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-sky-500/10 p-4 rounded-2xl border border-sky-500/30">
              <FaCode className="text-4xl text-sky-400" />
            </div>
            <div>
              <div className="flex gap-2 mb-2">
                <span className="text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">Java</span>
                <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">JavaFX</span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Desktop App</span>
              </div>
              <p className="text-slate-400 m-0 text-sm font-medium">Por Eric Munive García</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            WheelCopy: Reinventando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Portapapeles Visual</span>
          </h1>

          <div className="text-lg text-slate-300 leading-relaxed font-light space-y-6">
            <p className="lead text-xl text-sky-200/80 font-normal">
              Como desarrolladores y profesionales técnicos, el portapapeles es probablemente la herramienta más utilizada y menos valorada de nuestro sistema operativo. Copiamos y pegamos docenas de veces al día. <strong>Carusel (WheelCopy)</strong> es mi respuesta para transformar esta herramienta invisible en una interfaz visual de alta productividad.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">La Problemática del Portapapeles Tradicional</h2>
            <p>
              El portapapeles nativo de la mayoría de sistemas operativos sufre de un problema fundamental: la <strong>amnesia</strong>. Al copiar un nuevo elemento, sobrescribes inmediatamente el anterior. Aunque existen gestores de portapapeles de terceros, suelen presentar listas de texto planas y poco intuitivas.
            </p>
            <p>
              La idea de WheelCopy nace de la necesidad de acceder al historial de recortes no sólo de forma rápida, sino de forma visual y ergonómica.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">La Solución: Una Interfaz en Carrusel</h2>
            <p>
              Carusel es una aplicación de escritorio avanzada desarrollada en <strong>Java</strong> que organiza los elementos copiados en una interfaz dinámica en forma de "rueda" o "carrusel rotatorio".
            </p>

            <ul className="list-disc pl-6 space-y-4 marker:text-sky-500">
              <li>
                <strong className="text-sky-300">Soporte Multiformato:</strong> No se limita a texto plano. El gestor almacena texto enriquecido, imágenes, vídeos y documentos.
              </li>
              <li>
                <strong className="text-sky-300">Previsualizaciones (Thumbnails):</strong> Para facilitar la identificación visual, el sistema genera automáticamente miniaturas del contenido multimedia almacenado.
              </li>
              <li>
                <strong className="text-sky-300">Navegación Ergonómica:</strong> Integración profunda con el sistema mediante atajos de teclado globales. La interfaz rotatoria se controla de forma fluida utilizando la rueda del ratón (scroll wheel).
              </li>
              <li>
                <strong className="text-sky-300">Daemon en Segundo Plano:</strong> La aplicación opera de forma silenciosa e ininterrumpida como un proceso en segundo plano, siempre alerta a las interrupciones del portapapeles del sistema operativo.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">Desarrollo y Tecnologías Clave</h2>
            <p>
              Técnicamente, este ha sido uno de los proyectos de escritorio más desafiantes en los que he trabajado, requiriendo conocimientos de programación gráfica e interacción a bajo nivel:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
              <li>
                <strong className="text-white">JavaFX:</strong> El motor gráfico principal. Construir la interfaz rotatoria ("rueda") requirió cálculos matemáticos (trigonometría) para posicionar correctamente los elementos en un espacio 2D y animarlos con fluidez en tiempo real.
              </li>
              <li>
                <strong className="text-white">ClipboardFX:</strong> Para poder interceptar el portapapeles a nivel del sistema operativo sin interrumpir el flujo del usuario, desarrollé una biblioteca personalizada que maneja las complejas APIs nativas del SO.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-4">Conclusión</h2>
            <p>
              WheelCopy (Carusel) no es solo una herramienta, es una demostración técnica de cómo la arquitectura de software en Java puede utilizarse para crear interfaces de usuario no convencionales y altamente eficientes, mejorando directamente la productividad del usuario final.
            </p>

            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Explora el código fuente</h3>
              <p className="text-slate-400 mb-6 font-light">
                Este proyecto ha sido desarrollado enteramente como parte de mi portfolio técnico para empresas y su código está disponible.
              </p>
              <a
                href="https://github.com/nbite12/wheelcopy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors no-underline"
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