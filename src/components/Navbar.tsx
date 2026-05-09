"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-semibold text-slate-900 tracking-tight">
          Veta.
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#estudio" className="hover:text-blue-600 transition-colors">Estudio</Link>
          <Link href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</Link>
          <Link href="#equipo" className="hover:text-blue-600 transition-colors">Equipo</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="group flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
          >
            Hablemos
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
