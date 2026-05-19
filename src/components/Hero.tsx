import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-36 bg-white overflow-hidden">
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col items-start max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-slate-300 block"></span>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Estudio de desarrollo de software
            </p>
          </div>

          <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-slate-900 mb-8 tracking-tight">
            Construimos sistemas web a medida, plataformas SaaS y productos digitales escalables.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-12 font-medium leading-relaxed">
            Sin intermediarios ni promesas vacías. Tres ingenieros UTN trabajando directo con el código y la arquitectura de cada proyecto.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="#proyectos"
              className="px-8 py-4 bg-[#0a0f1c] text-white rounded-md font-semibold text-sm tracking-wide hover:bg-brand hover:shadow-[0_4px_20px_rgba(0,69,139,0.2)] transition-all flex items-center justify-center gap-2 group"
            >
              Ver proyectos
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-md font-semibold text-sm tracking-wide hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center"
            >
              Hablemos
            </Link>
          </div>
        </div>

        {/* Right Column - Mockup */}
        <div className="flex-1 w-full lg:w-auto mt-12 lg:mt-0 relative">
          <div className="relative w-full aspect-[4/3] max-w-2xl ml-auto rounded-xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(10,15,28,0.08)] border border-slate-100 transform transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute top-0 left-0 w-full h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <div className="mx-auto bg-white border border-slate-200 rounded-md px-4 py-0.5 flex items-center gap-2">
                <span className="text-[10px] text-slate-400 font-mono">importadosmdp.com.ar</span>
              </div>
            </div>
            <img 
              src="/images/importadosmdp.png" 
              alt="ImportadosMDP Dashboard Mockup" 
              className="w-full h-full object-cover object-top pt-8"
            />
          </div>
          
          {/* Decorator element similar to Stitch floating card */}
          <div className="absolute -bottom-8 -left-12 bg-white p-6 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 hidden md:flex items-center gap-4 animate-fade-in-up">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase mb-1">Stack de desarrollo</p>
              <p className="text-sm font-semibold text-slate-900">React · Next.js · Supabase</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
