import AnimateIn from "./AnimateIn";

const services = [
  {
    title: "Sistemas web a medida",
    description: "Gestión de turnos, paneles de administración y herramientas operativas diseñadas exclusivamente para los flujos de tu PyME.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    title: "Plataformas SaaS B2B",
    description: "Arquitecturas multi-tenant, facturación recurrente y sistemas robustos para comercializar tu propio software.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45" />
      </svg>
    )
  },
  {
    title: "Landings e Institucionales",
    description: "Sitios de alto rendimiento optimizados para conversión, SEO y velocidad, diseñados para captar clientes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
      <div className="container-custom">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-slate-300 block"></span>
                <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                  Nuestra especialidad
                </p>
              </div>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
                Ingeniería de software<br className="hidden lg:block"/> que resuelve problemas.
              </h2>
            </div>
            <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">
              Diseñamos arquitecturas robustas y escribimos código limpio para asegurar que tu sistema escale junto con tu negocio, sin dolores de cabeza.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Service - Dark */}
            <div className="lg:col-span-7 bg-[#0a0f1c] text-white p-10 md:p-14 rounded-2xl shadow-[0_20px_50px_rgba(10,15,28,0.15)] flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-10 w-14 h-14 rounded-xl bg-white/10 text-brand flex items-center justify-center">
                {services[0].icon}
              </div>
              <h3 className="font-sans font-extrabold text-3xl md:text-4xl mb-4 text-white">
                {services[0].title}
              </h3>
              <p className="text-lg text-slate-300 mb-12 max-w-lg leading-relaxed font-medium flex-grow">
                {services[0].description}
              </p>
              <a href="#contacto" className="mt-auto font-mono text-xs font-bold tracking-widest uppercase text-brand hover:text-white transition-colors inline-flex items-center gap-2">
                Consultar factibilidad
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>

            {/* Right Column - Secondary Services */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {services.slice(1).map((service, index) => (
                <div key={index} className="flex-1 bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-brand/20 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 text-brand border border-slate-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="font-sans font-extrabold text-xl text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 mb-8 leading-relaxed font-medium flex-grow">
                    {service.description}
                  </p>
                  <a href="#contacto" className="mt-auto font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-brand transition-colors inline-flex items-center gap-2">
                    Conocer más
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
