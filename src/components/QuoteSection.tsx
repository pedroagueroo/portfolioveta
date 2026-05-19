import React from 'react';

export default function QuoteSection() {
  return (
    <section className="bg-slate-50 py-32 px-6 border-b border-slate-100 relative overflow-hidden">
      {/* Decorative large quote marks in background */}
      <div className="absolute top-12 left-12 md:left-32 text-[200px] leading-none font-serif text-slate-200/50 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="container-custom max-w-4xl relative z-10 flex flex-col items-center text-center">
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl lg:text-[56px] leading-[1.2] tracking-tight text-slate-900 mb-12">
          "La diferencia entre un software que funciona y uno que <span className="text-brand italic font-serif font-semibold">impulsa</span> el negocio está en la estrategia técnica subyacente."
        </h2>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
            {/* Can add Veta logo or a founder's photo here */}
            <span className="font-bold text-slate-500 font-mono">VETA</span>
          </div>
          <div className="text-left">
            <p className="font-bold text-slate-900">Veta Studio</p>
            <p className="text-sm font-medium text-slate-500">Ingeniería de Software</p>
          </div>
        </div>
      </div>
    </section>
  );
}
