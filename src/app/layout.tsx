import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Munive | Portfolio",
  description: "Ingeniería de Telecomunicaciones | Especialista en Rendimiento, Sistemas Críticos & I+D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-300 antialiased selection:bg-sky-500 selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
