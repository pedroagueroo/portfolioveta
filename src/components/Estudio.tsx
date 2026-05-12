import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const stats = [
  { end: 8,    suffix: "+", label: "Productos y sistemas entregados" },
  { end: 1200, suffix: "+", label: "Operaciones gestionadas por mes" },
  { end: 3,    suffix: "",  label: "Ingenieros UTN"                  },
  { end: 0,    suffix: "",  label: "Intermediarios"                  },
];

const pillars = [
  {
    title: "Profundidad técnica",
    body: "No armamos plantillas. Diseñamos bases de datos, arquitecturas y sistemas pensados para el problema específico de cada cliente.",
  },
  {
    title: "Resultado medible",
    body: "Nuestros sistemas gestionan turnos, usuarios y transacciones reales a diario. El impacto no es una promesa; es visible desde el primer sprint.",
  },
  {
    title: "Trato directo",
    body: "Hablás con los ingenieros que construyen. Sin capas, sin demoras, sin mensajes que se pierden. Velocidad y claridad en cada etapa.",
  },
];

export default function Estudio() {
  return (
    <section id="estudio" className="section-padding bg-slate-50">
      <div className="container-custom">

        {/* Heading */}
        <AnimateIn>
          <p className="eyebrow mb-8">02 &mdash; Estudio</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-14">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-4">
                Tres ingenieros.<br />Un estudio serio.
              </h2>
              <span aria-hidden="true" className="block h-0.5 w-10 bg-brand rounded-full" />
            </div>
            <div className="flex items-center">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                Formados en UTN con base sólida en algoritmos y arquitectura de
                software. Construimos productos reales que viven en producción,
                no demos desechables.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Stats — AnimateIn wraps the entire grid, not each card */}
        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-16">
            {stats.map(({ end, suffix, label }) => (
              <div
                key={label}
                className="bg-white border border-slate-200 rounded-2xl px-8 py-9 hover:border-brand/30 hover:shadow-[0_4px_24px_rgba(0,69,139,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="font-sans font-bold text-[clamp(1.875rem,2.5vw,2.5rem)] text-brand leading-none mb-3">
                  <CountUp end={end} suffix={suffix} />
                </p>
                <p className="text-sm text-slate-500 font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Pillars — AnimateIn wraps the entire grid */}
        <AnimateIn delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
            {pillars.map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-serif text-2xl text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
