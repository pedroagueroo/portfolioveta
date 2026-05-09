import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      <div className="container-custom relative z-10 flex flex-col items-start">
        <p className="eyebrow mb-6">01 &mdash; Mar del Plata, Arg</p>
        
        <h1 className="font-serif text-7xl md:text-[104px] leading-[0.9] text-slate-900 mb-8 tracking-tight">
          Veta.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-12 font-medium leading-relaxed">
          Estudio de desarrollo en Mar del Plata. Construimos productos digitales con precisión.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Link
            href="#proyectos"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
          >
            Ver proyectos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center"
          >
            Hablemos
          </Link>
        </div>
        
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-medium text-slate-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Disponible para proyectos &middot; 2026
        </div>
      </div>
    </section>
  );
}
