import React from 'react';

export default function StatsBar() {
  return (
    <section className="bg-[#0a0f1c] text-white py-20 px-6">
      <div className="container-custom max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          <div className="flex flex-col items-start md:px-8 first:px-0 pt-8 md:pt-0 first:pt-0">
            <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-4">Experiencia</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-sans font-extrabold text-5xl md:text-6xl tracking-tight">+8</span>
            </div>
            <p className="font-bold text-lg mb-1">Productos en Producción</p>
            <p className="text-sm text-slate-400">Impacto real en negocios B2B, herramientas operativas y SaaS.</p>
          </div>

          <div className="flex flex-col items-start md:px-8 pt-8 md:pt-0">
            <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-4">Equipo Core</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-sans font-extrabold text-5xl md:text-6xl tracking-tight">3</span>
            </div>
            <p className="font-bold text-lg mb-1">Ingenieros UTN</p>
            <p className="text-sm text-slate-400">Desarrollo ejecutado exclusivamente por ingenieros de software senior.</p>
          </div>

          <div className="flex flex-col items-start md:px-8 pt-8 md:pt-0">
            <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-4">Metodología</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-sans font-extrabold text-5xl md:text-6xl tracking-tight">0%</span>
            </div>
            <p className="font-bold text-lg mb-1">Intermediarios</p>
            <p className="text-sm text-slate-400">Comunicación técnica directa, cero ruido en la toma de decisiones.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
