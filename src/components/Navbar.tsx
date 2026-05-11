"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

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
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Logo isDark={!scrolled} />
        </Link>

        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>
          <Link href="#estudio" className={`transition-colors ${scrolled ? 'hover:text-brand' : 'hover:text-white'}`}>Estudio</Link>
          <Link href="#proyectos" className={`transition-colors ${scrolled ? 'hover:text-brand' : 'hover:text-white'}`}>Proyectos</Link>
          <Link href="#equipo" className={`transition-colors ${scrolled ? 'hover:text-brand' : 'hover:text-white'}`}>Equipo</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className={`group flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-slate-900 hover:text-brand' : 'text-white hover:text-slate-200'}`}
          >
            Hablemos
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
