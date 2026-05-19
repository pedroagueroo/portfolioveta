"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    id: "01",
    name: "Once Unidos",
    client: "Club Deportivo",
    description: "Sistema web completo de reserva de turnos con dos interfaces: pública para socios y panel de administración para el staff. Integra pagos en línea y elimina conflictos de horarios.",
    metrics: [
      { label: "Turnos gestionados", value: "1.200+" },
      { label: "Conflictos", value: "Cero" }
    ],
    stack: ["Next.js", "Supabase", "Tailwind"],
    image: "/images/once-unidos.png",
    demo: "https://gestorturnos.vercel.app/"
  },
  {
    id: "02",
    name: "Kaizer Servicios",
    client: "Empresa Industrial",
    description: "Web institucional con CMS integrado. Permite al equipo actualizar catálogo, servicios y blog de manera autónoma, posicionando la trayectoria de la empresa con SEO local.",
    metrics: [
      { label: "Trayectoria", value: "+10 Años" },
      { label: "Dependencia externa", value: "Eliminada" }
    ],
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "/images/kaizer.png",
    demo: "https://kaizer-servicios-three.vercel.app/"
  },
  {
    id: "03",
    name: "Equals",
    client: "Finanzas Personales",
    description: "Plataforma web de gestión financiera pensada para el contexto argentino. Gestión de billeteras, gráficos, objetivos de ahorro y dólar en tiempo real (PWA).",
    metrics: [
      { label: "Plataforma", value: "PWA" },
      { label: "Cotizaciones", value: "Tiempo Real" }
    ],
    stack: ["React", "Next.js", "Supabase"],
    image: "/images/equals.jpeg",
    demo: "https://equalsgestion.com/"
  },
  {
    id: "04",
    name: "Traveris",
    client: "SaaS B2B Agencias",
    description: "SaaS multi-tenant para agencias de viaje. Centraliza reservas, clientes y caja contable. Arquitectura diseñada para escalar a múltiples agencias en la nube.",
    metrics: [
      { label: "Arquitectura", value: "Multi-tenant" },
      { label: "Modelo", value: "SaaS B2B" }
    ],
    stack: ["Next.js", "AWS S3", "Prisma"],
    image: "/images/traveris.png",
    demo: "https://traverispro.vercel.app/"
  },
  {
    id: "05",
    name: "HoopStats",
    client: "Dashboard Deportivo",
    description: "Dashboard de estadísticas NBA con datos en vivo. Consumo de APIs deportivas, visualizaciones interactivas y capa de caché para máxima velocidad.",
    metrics: [
      { label: "Usuarios", value: "+20 Activos" },
      { label: "Performance", value: "Redis Cache" }
    ],
    stack: ["React", "Node.js", "Redis"],
    image: "/images/hoopstats.png",
    demo: "https://www.hoopstats.com.ar/"
  },
  {
    id: "06",
    name: "DirectOrder",
    client: "Ecosistema Gastronómico",
    description: "Reemplaza múltiples herramientas costosas. Menú QR, pedidos directos por WhatsApp, cocina en tiempo real (KDS) y analytics propios sin comisiones.",
    metrics: [
      { label: "Comisiones", value: "0%" },
      { label: "Setup", value: "30 segs" }
    ],
    stack: ["Next.js", "Supabase", "Zustand"],
    image: "/images/directorder.png",
    demo: "https://directorder-two.vercel.app/"
  },
  {
    id: "07",
    name: "ImportadosMDP",
    client: "E-Commerce / Catálogo",
    description: "Catálogo digital mobile-first con buscador instantáneo, dark mode y reseñas. Diseñado para maximizar la conversión hacia consultas directas por WhatsApp.",
    metrics: [
      { label: "Ventas", value: "+500" },
      { label: "Calificación", value: "4.9/5.0" }
    ],
    stack: ["Next.js", "Tailwind"],
    image: "/images/importadosmdp.png",
    demo: "https://importadosmdp.vercel.app/"
  },
  {
    id: "08",
    name: "Sector B",
    client: "Gastronomía",
    description: "Web para hamburguesería con menú interactivo y pedidos directo al WhatsApp del local. Experiencia mobile fluida que elimina apps de terceros.",
    metrics: [
      { label: "Canal", value: "WhatsApp" },
      { label: "Intermediarios", value: "Cero" }
    ],
    stack: ["React", "Tailwind"],
    image: "/images/sector-b.png"
  }
];

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-slate-300 block"></span>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Casos de estudio
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight">
              Impacto real en negocios.
            </h2>
            <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">
              No mostramos código; mostramos resultados. Plataformas operativas que ahorran horas y aumentan facturación.
            </p>
          </div>
        </AnimateIn>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimateIn key={project.id} delay={index * 50}>
              <div 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-brand/30 hover:shadow-[0_8px_30px_rgba(0,69,139,0.08)] transition-all duration-300 h-full"
              >
                {/* Image Cover */}
                <div className="relative w-full aspect-[4/3] bg-white overflow-hidden border-b border-slate-100">
                  <Image
                    src={project.image}
                    alt={`Preview de ${project.name}`}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-brand mb-2">
                    {project.client}
                  </p>
                  <h3 className="font-sans font-extrabold text-xl text-slate-900 mb-4">
                    {project.name}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-slate-200/60 flex justify-between items-center">
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-brand transition-colors flex items-center gap-2">
                      Ver detalle
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Modal / Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col h-full overflow-y-auto">
              {/* Image Top */}
              <div className="w-full relative bg-slate-900 flex-shrink-0">
                <div className="relative w-full aspect-video md:aspect-[21/9]">
                  <Image
                    src={selectedProject.image}
                    alt={`Mockup de ${selectedProject.name}`}
                    fill
                    className="object-cover object-top opacity-90"
                  />
                  {/* Gradient Overlay so close button is always visible */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              {/* Info Bottom */}
              <div className="w-full p-8 md:p-10 flex flex-col">
                <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-brand mb-2">
                  {selectedProject.client}
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  {selectedProject.name}
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                  {selectedProject.metrics.map((metric, i) => (
                    <div key={i} className="col-span-1 md:col-span-2">
                      <p className="font-sans font-extrabold text-2xl text-slate-900 mb-1 tracking-tight">{metric.value}</p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-white text-slate-600 font-mono text-[10px] uppercase tracking-wider font-bold rounded-full border border-slate-200 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.demo ? (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0a0f1c] text-white rounded-lg font-bold hover:bg-brand transition-colors text-sm shadow-md"
                    >
                      Visitar Web
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button disabled className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-100 text-slate-400 rounded-lg font-bold text-sm cursor-not-allowed border border-slate-200">
                      Demo Privada
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
