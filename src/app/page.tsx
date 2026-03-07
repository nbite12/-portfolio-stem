"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaYoutube, FaGithub, FaEnvelope, FaServer, FaCode, FaTachometerAlt, FaGamepad, FaGraduationCap, FaLanguage } from "react-icons/fa";
import { Cpu, Network, Terminal, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto flex flex-col items-center text-center min-h-screen justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-slate-800 via-sky-500/50 to-slate-800 shadow-2xl shadow-sky-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
              <Image
                src="/profile.png"
                alt="Eric Munive"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Eric Munive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">García</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-slate-400 mb-8 max-w-2xl"
        >
          Futuro Ingeniero de Telecomunicaciones | Emprendedor
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl leading-relaxed"
        >
          Combino una visión estratégica de negocio con capacidad analítica para resolver retos complejos en electrónica, redes y scripting. Transformando hardware y código en latencia cero.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#proyectos" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/30 transform hover:-translate-y-1">
            Ver Proyectos
          </a>
          <a href="https://linkedin.com/in/eric-munive-garcía-0119901a0" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/50 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
            <FaLinkedin className="text-xl text-[#0a66c2]" /> LinkedIn
          </a>
          <a href="https://github.com/nbite12" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-400 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 group">
            <FaGithub className="text-xl text-slate-300 group-hover:text-white transition-colors" /> GitHub
          </a>
        </motion.div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-32 bg-slate-900/30 border-y border-slate-800/50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Ambición por la <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Innovación</span></h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light text-justify">
                <p>
                  Estudiante de <strong className="font-semibold text-slate-200">Ingeniería de Telecomunicaciones (Mención en Electrónica)</strong> en la UAB, con un sólido perfil técnico forjado en el emprendimiento. Combino una visión estratégica de negocio con capacidad analítica para resolver retos complejos en electrónica, redes y scripting.
                </p>
                <p>
                  Busco integrarme en un entorno corporativo de primer nivel para evolucionar mis capacidades hacia la vanguardia de la <strong className="font-semibold text-slate-200">I+D</strong>, aportando valor en sectores de máxima exigencia tecnológica como el <strong className="font-semibold text-slate-200">aeroespacial y la microelectrónica</strong> entre otros.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Cpu, title: "Electrónica", desc: "Diseño y análisis de sistemas integrados." },
                  { icon: Network, title: "Infraestructura", desc: "Arquitecturas de red de latencia ultra baja." },
                  { icon: Terminal, title: "Desarrollo OS", desc: "Scripts y automatización en Windows." },
                  { icon: Rocket, title: "I+D", desc: "Búsqueda constante de la eficiencia pura." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group"
                  >
                    <item.icon className="w-10 h-10 text-sky-400 mb-5 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white tracking-tight">Competencias Técnicas</h2>
            <p className="text-slate-500 mt-4 text-lg">El stack que impulsa el rendimiento</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {[
              "Electrónica",
              "Microelectrónica",
              "Sistemas Críticos",
              "Optimización de Sistemas",
              "Automatizaciones",
              "Reducción Latencia DPC",
              "Scripting / Programación",
              "Infraestructura de Red",
              "Hardware High-End",
              "AI Expert"
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-sky-500/50 rounded-full text-slate-300 hover:text-sky-400 font-medium transition-colors cursor-default shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formación y Experiencia */}
      <section id="proyectos" className="py-32 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Educación */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <FaGraduationCap className="text-2xl text-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Formación Académica</h2>
            </div>

            <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 md:p-8 hover:border-sky-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Grado en Ingeniería de Telecomunicaciones <span className="text-sky-400">(Electrónica)</span></h3>
                  <p className="text-slate-400 font-medium mt-1">Universitat Autònoma de Barcelona (UAB) - Escola d'Enginyeria</p>
                </div>
                <span className="inline-block bg-sky-500/10 text-sky-400 font-bold px-4 py-1.5 rounded-full text-sm border border-sky-500/20 whitespace-nowrap self-start">
                  Actual
                </span>
              </div>
              <ul className="text-slate-400 space-y-2 ml-4 list-disc font-light">
                <li><strong className="text-slate-300 font-semibold">Progreso:</strong> 3r curso en proceso, 144/240 ECTS superados.</li>
              </ul>
            </div>
          </motion.div>


          {/* Proyectos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <FaCode className="text-2xl text-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experiencia y Proyectos</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-20">
            {/* GamerHubStudio */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col"
            >
              <div className="h-2 w-full bg-gradient-to-r from-sky-500 to-blue-600"></div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">GAMER HUBSTUDIO S.L</h3>
                    <p className="text-sky-400 font-medium text-sm">CTO & Co-fundador (2025 - Pres.)</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl group-hover:bg-sky-500/10 transition-colors">
                    <FaServer className="text-2xl text-slate-400 group-hover:text-sky-400 transition-colors" />
                  </div>
                </div>
                <ul className="text-slate-400 mb-8 leading-relaxed font-light list-disc ml-4 space-y-3 flex-1">
                  <li>Liderazgo técnico y diseño integral de infraestructura de red y automatización domótica y de sistemas, para estudios gaming premium y de alto rendimiento.</li>
                  <li>Selección y configuración de hardware logrando reducir la latencia de sistema y red en un 60% respecto a configuraciones estándar.</li>
                  <li>Integraciones con IA (chatbot automatizado) via API y director de desarrollo de gamerhubstudio.es donde tuve a 3 desarrolladores bajo mi cargo, utilizando React y Tailwind para el frontend y Supabase en el backend.</li>
                </ul>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {["Redes", "Hardware", "React", "Supabase", "Liderazgo"].map(tag => (
                    <span key={tag} className="text-xs font-medium bg-slate-900 text-slate-300 px-4 py-1.5 rounded-full border border-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* TuningCore */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col"
            >
              <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-600"></div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">TuningCore.com</h3>
                    <p className="text-emerald-400 font-medium text-sm">Fundador & Consultor de Optimización (2022 - 2024)</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                    <FaTachometerAlt className="text-2xl text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                </div>
                <ul className="text-slate-400 mb-8 leading-relaxed font-light list-disc ml-4 space-y-3 flex-1">
                  <li>Consultoría técnica avanzada atendiendo a más de 200 clientes internacionales, especializada en arquitectura Windows y ajustes de BIOS.</li>
                  <li>Desarrollo de scripts de automatización (PowerShell/Batch) para la reducción extrema de latencia DPC.</li>
                  <li>Creación integra de un dispositivo hardware/software, "LatencyTool", ideado para medir con precisión cambios empíricos de latencia, utilizando un sensor basado en un fototransistor y C++ como lenguaje.</li>
                </ul>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {["OS Tuning", "PowerShell", "C++", "Hardware"].map(tag => (
                    <span key={tag} className="text-xs font-medium bg-slate-900 text-slate-300 px-4 py-1.5 rounded-full border border-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* WheelCopy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
            >
              <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">WheelCopy (Software)</h3>
                    <p className="text-purple-400 font-medium text-sm">Director de Desarrollo y Creador (2020)</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl group-hover:bg-purple-500/10 transition-colors">
                    <FaCode className="text-2xl text-slate-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
                <ul className="text-slate-400 mb-8 leading-relaxed font-light list-disc ml-4 space-y-3 flex-1">
                  <li>Líder de desarrollo integral de una aplicación nativa para Windows orientada a la eficiencia productiva, gestionando un equipo de 4 personas.</li>
                  <li>Implementación de un novedoso sistema de gestión de portapapeles que incrementaron la velocidad de flujos de trabajo de los usuarios en un 80%.</li>
                </ul>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {["Software Windows", "Gestión Equipos", "Desarrollo Nativo"].map(tag => (
                    <span key={tag} className="text-xs font-medium bg-slate-900 text-slate-300 px-4 py-1.5 rounded-full border border-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* El Templo eSports */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col"
            >
              <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">El Templo eSports</h3>
                    <p className="text-orange-400 font-medium text-sm">Coadministrador de Sistemas e Infraestructura (2020 - Pres.)</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                    <FaGamepad className="text-2xl text-slate-400 group-hover:text-orange-400 transition-colors" />
                  </div>
                </div>
                <ul className="text-slate-400 mb-8 leading-relaxed font-light list-disc ml-4 space-y-3 flex-1">
                  <li>Administración de red local y parcheo a nivel de sistema operativo para uno de los centros gaming de alto rendimiento referentes en España, equipado con +40 ordenadores High-End, salas de competición y streaming.</li>
                  <li>Resolución proactiva de bugs y optimización de latencia, garantizando la máxima estabilidad para jugadores competitivos y eventos presenciales en colaboración con marcas como Riot o Gamergy.</li>
                </ul>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {["Diskless Networks", "Troubleshooting", "Networking"].map(tag => (
                    <span key={tag} className="text-xs font-medium bg-slate-900 text-slate-300 px-4 py-1.5 rounded-full border border-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Idiomas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <FaLanguage className="text-2xl text-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Idiomas</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-950/80 border border-slate-800 px-6 py-4 rounded-xl flex-1 min-w-[200px] flex items-center justify-between hover:border-sky-500/30 transition-colors">
                <span className="text-white font-bold text-lg">Español</span>
                <span className="bg-slate-900 text-sky-400 px-3 py-1 rounded-lg text-sm font-semibold border border-slate-800">Nativo (C2)</span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 px-6 py-4 rounded-xl flex-1 min-w-[200px] flex items-center justify-between hover:border-sky-500/30 transition-colors">
                <span className="text-white font-bold text-lg">Catalán</span>
                <span className="bg-slate-900 text-sky-400 px-3 py-1 rounded-lg text-sm font-semibold border border-slate-800">Nativo (C2)</span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 px-6 py-4 rounded-xl flex-1 min-w-[200px] flex items-center justify-between hover:border-sky-500/30 transition-colors">
                <span className="text-white font-bold text-lg">Inglés</span>
                <span className="bg-slate-900 text-sky-400 px-3 py-1 rounded-lg text-sm font-semibold border border-slate-800">Avanzado Técnico</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-black py-20 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              ¿Listo para sumar talento a tu equipo de I+D?
            </h2>
            <p className="text-slate-400 mb-12 text-lg font-light">
              Disponible para oportunidades corporativas, prácticas formativas y proyectos de ingeniería.
            </p>

            <div className="flex justify-center gap-8 mb-16">
              <a href="mailto:emuniveg@gmail.com" className="bg-slate-900 p-4 rounded-full border border-slate-800 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/eric-munive-garcía-0119901a0" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-4 rounded-full border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/nbite12" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-4 rounded-full border border-slate-800 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                <FaGithub className="text-2xl" />
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800/50 flex flex-col items-center">
              <div className="text-2xl font-bold tracking-wider text-white mb-4">
                EM<span className="text-sky-400">.</span>
              </div>
              <p className="text-sm text-slate-600">
                &copy; {new Date().getFullYear()} Eric Munive García. Barcelona, Spain.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
