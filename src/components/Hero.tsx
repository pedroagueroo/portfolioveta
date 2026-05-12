import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-36 overflow-hidden bg-[#0a0f1c]">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-brand) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-start">
        <p className="eyebrow mb-6">01 &mdash; Mar del Plata, Argentina</p>

        <h1 className="font-sans font-bold text-7xl md:text-[104px] leading-[0.9] text-white mb-8 tracking-tight">
          Veta.
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 font-medium leading-relaxed">
          Webs, sistemas y plataformas SaaS construidos por tres ingenieros UTN.
          Comunicación directa, entrega real, sin intermediarios.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-20 w-full sm:w-auto">
          <Link
            href="#proyectos"
            className="px-8 py-4 bg-brand text-white rounded-lg font-bold hover:bg-brand-dark hover:shadow-[0_0_24px_rgba(0,69,139,0.5)] transition-all flex items-center justify-center gap-2 group"
          >
            Ver proyectos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-4 bg-transparent text-white border border-slate-600 rounded-lg font-medium hover:bg-slate-800 hover:border-slate-500 transition-colors flex items-center justify-center"
          >
            Hablemos
          </Link>
        </div>

        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-medium text-slate-400">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          Disponible para nuevos proyectos &middot; 2026
        </div>
      </div>
    </section>
  );
}
