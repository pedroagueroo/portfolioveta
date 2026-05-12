import Image from "next/image";

const projects = [
  {
    authors: "Nicolás Petito",
    name: "Once Unidos",
    status: "1.200+ turnos/mes",
    statusColor: "bg-green-100 text-green-800",
    description: "Plataforma integral deportiva. Automatiza la reserva de canchas y espacios, integra pagos y provee un panel de administración centralizado.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    demo: "https://gestorturnos.vercel.app/",
    image: "/images/once-unidos.png"
  },
  {
    authors: "Nicolás Petito",
    name: "Kaizer",
    status: "En producción",
    statusColor: "bg-blue-100 text-blue-800",
    description: "Sitio institucional y CMS a medida de alto rendimiento, permitiendo al equipo interno actualizar información en tiempo real.",
    stack: ["Next.js", "Tailwind", "PostgreSQL"],
    demo: "https://kaizer-servicios-three.vercel.app/",
    image: "/images/kaizer.png"
  },
  {
    authors: "Nicolás Petito",
    name: "Equals",
    status: "Tesis UTN",
    statusColor: "bg-indigo-100 text-indigo-800",
    description: "Plataforma completa de finanzas personales con gestión de billeteras, gráficos, objetivos y seguimiento del dólar en tiempo real.",
    stack: ["React", "Next.js", "Supabase"],
    demo: "https://equalsgestion.com/",
    image: "/images/equals.jpg"
  },
  {
    authors: "Nicolás Petito",
    name: "Sector B",
    status: "En producción",
    statusColor: "bg-yellow-100 text-yellow-800",
    description: "Sitio web para hamburguesería con menú interactivo optimizado y botón de pedido directo por WhatsApp.",
    stack: ["React", "Tailwind"],
    image: "/images/sector-b.png"
  },
  {
    authors: "Pedro",
    name: "Traveris",
    status: "Operativo",
    statusColor: "bg-orange-100 text-orange-800",
    description: "SaaS B2B multi-tenant que centraliza la operación de reservas, facturación y seguimiento. Actualmente en uso por la agencia VickaTurismo.",
    stack: ["Next.js", "AWS S3", "Prisma"],
    demo: "https://traverispro.vercel.app/",
    repo: "https://github.com/pedroagueroo/traveris2-front.git",
    image: "/images/traveris.png"
  },
  {
    authors: "Aguero + Chino",
    name: "HoopStats",
    status: "+20 usuarios",
    statusColor: "bg-purple-100 text-purple-800",
    description: "Aplicación analítica que consume APIs deportivas en tiempo real, presentando los datos de la NBA en dashboards dinámicos.",
    stack: ["React", "Node.js", "Redis"],
    demo: "https://www.hoopstats.com.ar/",
    repo: "https://github.com/augussto12/HoopStats.git",
    image: "/images/hoopstats.png"
  },
  {
    authors: "Aguero + Chino",
    name: "DirectOrder",
    status: "Lanzamiento",
    statusColor: "bg-slate-100 text-slate-800",
    description: "Ecosistema gastronómico con POS interno, tienda online propia y gestión de comandas sin comisiones de terceros.",
    stack: ["Next.js", "Supabase", "Zustand"],
    demo: "https://directorder-two.vercel.app/",
    repo: "https://github.com/pedroagueroo/directorder.git",
    image: "/images/directorder.png"
  },
  {
    authors: "Pedro",
    name: "ImportadosMDP",
    status: "Mobile-First",
    statusColor: "bg-rose-100 text-rose-800",
    description: "Catálogo interactivo con diseño oscuro inmersivo, buscador en tiempo real y transiciones optimizadas para móvil.",
    stack: ["Next.js", "Tailwind"],
    demo: "https://importadosmdp.vercel.app/",
    repo: "https://github.com/nicopetito/importadosmdp.git",
    image: "/images/importadosmdp.png"
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <p className="eyebrow mb-8">04 &mdash; Proyectos</p>
        
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-16">
          Productos en producción.<br />No ejercicios.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-brand/20 transition-all group flex flex-col h-full hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video w-full relative flex items-center justify-center border-b border-slate-100 overflow-hidden bg-slate-100">
                <Image 
                  src={project.image} 
                  alt={`Preview de ${project.name}`} 
                  fill 
                  className="object-cover object-top hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col items-start gap-3 mb-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${project.statusColor}`}>
                    {project.status}
                  </span>
                  <h3 className="font-sans font-bold text-2xl text-slate-900 leading-tight">
                    {project.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  {project.repo ? (
                    <a 
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Repo
                    </a>
                  ) : <span className="text-xs text-transparent">No Repo</span>}
                  
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand hover:text-brand-dark transition-colors flex items-center gap-1 group"
                    >
                      Ver demo
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
