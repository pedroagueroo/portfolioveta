import Image from "next/image";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    authors: "Nicolás Petito",
    name: "Once Unidos",
    status: "1.200+ turnos/mes",
    statusColor: "bg-emerald-600 text-white",
    description: "Sistema de gestión para el club Once Unidos. Centraliza la reserva de canchas, integra pagos en línea y da al staff un panel propio para administrar toda la operación.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    demo: "https://gestorturnos.vercel.app/",
    image: "/images/once-unidos.png"
  },
  {
    authors: "Nicolás Petito",
    name: "Kaizer",
    status: "En producción",
    statusColor: "bg-blue-600 text-white",
    description: "Web institucional con CMS propio para que el equipo de Kaizer actualice contenido sin depender de un desarrollador. Construida con foco en rendimiento y SEO.",
    stack: ["Next.js", "Tailwind", "PostgreSQL"],
    demo: "https://kaizer-servicios-three.vercel.app/",
    image: "/images/kaizer.png"
  },
  {
    authors: "Nicolás Petito",
    name: "Equals",
    status: "Tesis UTN",
    statusColor: "bg-indigo-600 text-white",
    description: "Plataforma de finanzas personales desarrollada como proyecto final de carrera en UTN. Gestión de billeteras, gráficos históricos, objetivos y dólar en tiempo real.",
    stack: ["React", "Next.js", "Supabase"],
    demo: "https://equalsgestion.com/",
    image: "/images/equals.jpg"
  },
  {
    authors: "Nicolás Petito",
    name: "Sector B",
    status: "En producción",
    statusColor: "bg-amber-500 text-white",
    description: "Web para hamburguesería artesanal con menú interactivo y pedido directo por WhatsApp. Diseño mobile-first, sin app ni comisiones de intermediarios.",
    stack: ["React", "Tailwind"],
    image: "/images/sector-b.png"
  },
  {
    authors: "Pedro",
    name: "Traveris",
    status: "Operativo",
    statusColor: "bg-orange-500 text-white",
    description: "SaaS B2B multi-tenant para agencias de viaje. Centraliza reservas, facturación y seguimiento de clientes en una sola plataforma. En uso real por VickaTurismo.",
    stack: ["Next.js", "AWS S3", "Prisma"],
    demo: "https://traverispro.vercel.app/",
    repo: "https://github.com/pedroagueroo/traveris2-front.git",
    image: "/images/traveris.png"
  },
  {
    authors: "Aguero + Chino",
    name: "HoopStats",
    status: "+20 usuarios",
    statusColor: "bg-violet-600 text-white",
    description: "Dashboard de estadísticas NBA con datos en tiempo real. Consume APIs deportivas y presenta visualizaciones dinámicas para fanáticos y analistas del juego.",
    stack: ["React", "Node.js", "Redis"],
    demo: "https://www.hoopstats.com.ar/",
    repo: "https://github.com/augussto12/HoopStats.git",
    image: "/images/hoopstats.png"
  },
  {
    authors: "Aguero + Chino",
    name: "DirectOrder",
    status: "Lanzamiento",
    statusColor: "bg-slate-600 text-white",
    description: "Ecosistema gastronómico completo: POS interno, tienda online propia y gestión de comandas. Elimina la dependencia de apps de terceros y sus comisiones.",
    stack: ["Next.js", "Supabase", "Zustand"],
    demo: "https://directorder-two.vercel.app/",
    repo: "https://github.com/pedroagueroo/directorder.git",
    image: "/images/directorder.png"
  },
  {
    authors: "Pedro",
    name: "ImportadosMDP",
    status: "Mobile-First",
    statusColor: "bg-rose-600 text-white",
    description: "Catálogo digital para tienda de ropa importada. Dark mode, buscador en tiempo real y experiencia mobile-first diseñada para convertir visitas en consultas directas.",
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
        <AnimateIn>
          <p className="eyebrow mb-8">05 &mdash; Proyectos</p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 leading-tight mb-4">
                Productos reales.<br />No ejercicios.
              </h2>
              <span aria-hidden="true" className="block h-0.5 w-10 bg-brand rounded-full" />
            </div>
            <div className="flex items-center">
              <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
                Cada proyecto resuelve un problema de negocio concreto. Estos
                son algunos de los sistemas y productos que construimos y que
                hoy están en uso real.
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.08)] hover:border-brand/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`Preview de ${project.name}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-sans font-bold text-xl text-slate-900 leading-tight mb-1">
                      {project.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {project.authors}
                    </p>
                  </div>
                  <span className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Repo
                    </a>
                  ) : <span />}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand hover:text-brand-dark transition-colors flex items-center gap-1 group/link"
                    >
                      Ver demo
                      <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
