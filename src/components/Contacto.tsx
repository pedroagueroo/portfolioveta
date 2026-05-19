"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

export default function Contacto() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("veta.mdp@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-32 md:py-48 bg-white border-t border-slate-100">
      <div className="container-custom max-w-4xl mx-auto flex flex-col items-center text-center">
        <AnimateIn>
          <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-brand mb-8">
            Next steps
          </p>
          <h2 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-12 leading-[1.1] tracking-tight">
            Construyamos el futuro de tu plataforma.
          </h2>
        </AnimateIn>

        <AnimateIn delay={100} className="w-full">
          <div className="flex flex-col items-center justify-center gap-8 mt-4">
            
            {/* Email (Click to copy) */}
            <button 
              onClick={handleCopyEmail}
              className="group flex flex-col items-center gap-2 cursor-pointer relative"
              title="Copiar dirección de email"
            >
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-400">
                Email Directo
              </span>
              <div className="flex items-center gap-3 relative">
                <span className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 group-hover:text-brand transition-colors">
                  veta.mdp@gmail.com
                </span>
                
                {/* Copied Feedback */}
                <div 
                  className={`absolute -right-24 bg-[#0a0f1c] text-white text-xs font-bold px-3 py-1.5 rounded transition-all duration-300 ${copied ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}
                >
                  ¡Copiado!
                </div>
              </div>
            </button>
            
            {/* Phones (Static text) */}
            <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-20 mt-8 pt-10 border-t border-slate-100 w-full justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  Nicolás
                </span>
                <span className="font-sans font-bold text-xl text-slate-700 tracking-wide">
                  +54 9 2236 17-4294
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  Pedro
                </span>
                <span className="font-sans font-bold text-xl text-slate-700 tracking-wide">
                  +54 9 2234 23-3487
                </span>
              </div>
            </div>

          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
