import AnimateIn from "./AnimateIn";

const methods = [
  {
    num: "01",
    title: "Auditoría & Diagnóstico",
    body: "No escribimos una sola línea de código hasta entender el negocio, el usuario y el objetivo real de tu empresa.",
  },
  {
    num: "02",
    title: "Diseño de Arquitectura",
    body: "Tomamos decisiones técnicas con propósito. Diseñamos sistemas robustos y escalables preparados para crecer.",
  },
  {
    num: "03",
    title: "Construcción Continua",
    body: "Demos accesibles desde la primera semana. Cero cajas negras, siempre sabés en qué estado está tu proyecto.",
  },
];

export default function PorQueVeta() {
  return (
    <section className="py-24 md:py-32 bg-[#f8fafc] border-y border-slate-100">
      <div className="container-custom">
        <AnimateIn>
          <div className="flex flex-col items-center text-center mb-20">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-brand mb-4">
              Metodología Veta
            </p>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
              El proceso de ingeniería.
            </h2>
            <p className="text-slate-500 font-medium max-w-xl">
              Metodología de trabajo diseñada para eliminar riesgos y asegurar entregas exitosas.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            {methods.map(({ num, title, body }) => (
              <div
                key={num}
                className="relative p-10 md:p-12 overflow-hidden group"
              >
                {/* Large faded number */}
                <div className="absolute top-0 right-4 text-[120px] font-sans font-black leading-none text-slate-50 select-none group-hover:text-slate-100 transition-colors pointer-events-none -z-0">
                  {num}
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pt-12">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
