import AnimateIn from "./AnimateIn";

const reasons = [
  {
    title: "Hablás directo con quien construye",
    body: "Sin account managers ni teléfono descompuesto. Los ingenieros que escriben tu código son los mismos que atienden tus mensajes.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Primero el problema, después el código",
    body: "Antes de escribir una línea entendemos el negocio, el usuario y el objetivo real. Cada decisión técnica tiene un propósito concreto.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Sistemas que van a durar",
    body: "Diseñamos arquitecturas mantenibles y escalables desde el inicio. No hacemos parches que se caen a los seis meses.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "Sin humo ni promesas vacías",
    body: "Plazos reales, presupuestos claros, y honestidad si algo no es viable. Si no podemos cumplirlo, lo decimos antes de arrancar.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Avances visibles desde el día uno",
    body: "Demo accesible desde la primera semana y actualizaciones constantes. Nunca estás a oscuras sobre el estado de tu proyecto.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Probado en producción real",
    body: "Más de 8 productos activos usados por negocios y usuarios reales. No vendemos potencial; mostramos resultados.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function PorQueVeta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* Heading */}
        <AnimateIn>
          <p className="eyebrow mb-8">— Por qué elegirnos</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 leading-tight mb-4">
                Un equipo chico.<br />Un trabajo serio.
              </h2>
              <span aria-hidden="true" className="block h-0.5 w-10 bg-brand rounded-full" />
            </div>
            <div className="flex items-center">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                No somos una agencia con decenas de proyectos en paralelo.
                Trabajamos en pocos proyectos a la vez, con foco y compromiso
                real en cada uno.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Cards — AnimateIn wraps the entire grid */}
        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ title, body, icon }) => (
              <div
                key={title}
                className="group p-7 bg-white border border-slate-200 rounded-2xl hover:border-brand/25 hover:shadow-[0_6px_28px_rgba(0,69,139,0.07)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/8 flex items-center justify-center text-brand mb-5 group-hover:bg-brand/12 transition-colors">
                  {icon}
                </div>
                <h3 className="font-sans font-semibold text-base text-slate-900 mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
