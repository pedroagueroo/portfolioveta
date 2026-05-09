import Link from "next/link";

const projects = [
  {
    authors: "Nico",
    name: "Once Unidos",
    status: "1.200+ turnos/mes",
    statusColor: "bg-green-100 text-green-800",
    description: "Plataforma integral para gestión deportiva y societaria.",
    problem: "El club gestionaba miles de turnos de forma manual o con sistemas fragmentados, generando cuellos de botella en la atención y desorganización de espacios físicos.",
    solution: "Desarrollamos un sistema a medida que automatiza la reserva de canchas y espacios, integra pagos y provee un panel de administración centralizado.",
    highlights: [
      "Más de 1.200 turnos gestionados mensualmente",
      "Reducción del 80% en tiempo de administración",
      "Panel de control para staff del club"
    ],
    stack: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    authors: "Nico",
    name: "Kaizer",
    status: "En producción",
    statusColor: "bg-blue-100 text-blue-800",
    description: "CMS y sitio institucional para empresa del sector industrial.",
    problem: "Falta de presencia digital moderna y dificultad para actualizar el catálogo de servicios y productos industriales sin depender de terceros.",
    solution: "Sitio web de alto rendimiento con un gestor de contenidos (CMS) a medida, permitiendo al equipo interno actualizar información en tiempo real.",
    highlights: [
      "Carga de página ultra rápida (Lighthouse 95+)",
      "CMS intuitivo para usuarios no técnicos",
      "Diseño adaptado al sector B2B industrial"
    ],
    stack: ["Next.js", "Tailwind", "PostgreSQL"],
  },
  {
    authors: "Aguero + Chino (Valentino)",
    name: "HoopStats",
    status: "+20 usuarios activos",
    statusColor: "bg-purple-100 text-purple-800",
    description: "Estadísticas y análisis de la NBA en tiempo real.",
    problem: "Los aficionados y analistas carecían de una herramienta accesible y rápida para visualizar métricas avanzadas y cruces de datos en vivo durante los partidos.",
    solution: "Aplicación web que consume APIs deportivas en tiempo real, procesa los datos y los presenta a través de dashboards dinámicos y personalizables.",
    highlights: [
      "Sincronización de datos en tiempo real via WebSockets",
      "Visualización de métricas avanzadas",
      "Arquitectura escalable para picos de tráfico"
    ],
    stack: ["React", "Node.js", "Redis", "WebSockets"],
  },
  {
    authors: "Aguero",
    name: "Traveris",
    status: "+600 clientes B2B",
    statusColor: "bg-orange-100 text-orange-800",
    description: "SaaS B2B para la gestión operativa de agencias de viaje.",
    problem: "Las agencias manejaban reservas, pagos y proveedores mediante Excel, resultando en errores humanos, pérdida de datos y falta de escalabilidad.",
    solution: "SaaS multi-tenant robusto que centraliza toda la operación: desde la cotización hasta la facturación y seguimiento de pasajeros.",
    highlights: [
      "Arquitectura multi-tenant segura",
      "Utilizado por 2 agencias y +600 usuarios finales",
      "Generación automática de PDFs y reportes"
    ],
    stack: ["Next.js", "AWS S3", "PostgreSQL", "Prisma"],
  },
  {
    authors: "Aguero + Chino (Valentino)",
    name: "DirectOrder",
    status: "Próximo lanzamiento",
    statusColor: "bg-slate-100 text-slate-800",
    description: "Sistema integral para el sector gastronómico.",
    problem: "Altas comisiones de apps de delivery y sistemas de punto de venta (POS) obsoletos o desconectados de la tienda online.",
    solution: "Ecosistema unificado con POS interno, tienda online propia para el restaurante, y gestión de pedidos unificada sin comisiones de terceros.",
    highlights: [
      "Integración de tienda online y POS físico",
      "Gestión de comandas en tiempo real",
      "Auditoría rigurosa de seguridad y permisos"
    ],
    stack: ["Next.js App Router", "Tailwind", "Supabase", "Zustand"],
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="container-custom">
        <p className="eyebrow mb-8">04 &mdash; Proyectos</p>
        
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-16">
          Productos en producción.<br />No ejercicios.
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-8 border-b border-slate-100 pb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-4">
                  Por: {project.authors}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="font-serif text-3xl md:text-4xl text-slate-900">
                    {project.name}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor} w-fit`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-slate-600 italic mt-4 text-lg">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="font-mono text-sm tracking-wider text-slate-900 mb-4 font-semibold uppercase">
                    El Problema
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-mono text-sm tracking-wider text-slate-900 mb-4 font-semibold uppercase">
                    La Solución
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.solution}
                  </p>
                  
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 font-mono text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
