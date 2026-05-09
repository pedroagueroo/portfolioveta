const services = [
  {
    title: "Landings y webs institucionales",
    description: "Sitios de alto rendimiento optimizados para conversión, SEO y velocidad.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  },
  {
    title: "Sistemas web a medida",
    description: "Gestión de turnos, paneles de administración y herramientas operativas para PyMEs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    title: "Plataformas SaaS B2B",
    description: "Arquitecturas multi-tenant, facturación recurrente y sistemas escalables.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45" />
      </svg>
    )
  },
  {
    title: "Apps con datos en tiempo real",
    description: "Dashboards en vivo, websockets y sincronización instantánea de información.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: "Integraciones con IA",
    description: "Chatbots automatizados, procesamiento de datos y flujos con OpenAI o Claude.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M5.25 12h13.5m-13.5 3.75h13.5m-13.5 3.75h13.5M16.5 21v-1.5m-9 1.5v-1.5m12-11.25a3 3 0 00-3-3h-9a3 3 0 00-3 3v10.5a3 3 0 003 3h9a3 3 0 003-3V8.25z" />
      </svg>
    )
  },
  {
    title: "Mantenimiento y evolución",
    description: "Auditoría de código, migración de tecnologías y refactorización de sistemas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <p className="eyebrow mb-8">03 &mdash; Servicios</p>
        
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-16">
          Lo que construimos.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-sm hover:bg-blue-50/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="text-slate-400 group-hover:text-blue-600 transition-colors mb-6">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-2xl text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <span className="font-mono uppercase tracking-[0.1em] text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  Consultar precio
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
