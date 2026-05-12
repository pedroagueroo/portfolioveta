"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "#estudio", label: "Estudio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Hablemos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo isDark={!scrolled} />
          </Link>

          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-slate-600" : "text-slate-300"}`}>
            <Link href="#estudio" className={`transition-colors ${scrolled ? "hover:text-brand" : "hover:text-white"}`}>Estudio</Link>
            <Link href="#proyectos" className={`transition-colors ${scrolled ? "hover:text-brand" : "hover:text-white"}`}>Proyectos</Link>
            <Link href="#equipo" className={`transition-colors ${scrolled ? "hover:text-brand" : "hover:text-white"}`}>Equipo</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className={`hidden md:flex group items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-slate-900 hover:text-brand" : "text-white hover:text-slate-200"}`}
            >
              Hablemos
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 ${scrolled ? "text-slate-900" : "text-white"}`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0a0f1c] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 pb-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-brand transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
