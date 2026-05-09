const team = [
  {
    name: "Nico Petito",
    role: "Ingeniero de Software",
    expertise: "Next.js + Supabase. Webs y sistemas para PyMEs.",
    link: "#", // Placeholder for actual portfolio link
  },
  {
    name: "Pedro Agüero",
    role: "Ingeniero de Software",
    expertise: "Backend, SaaS B2B, arquitectura multi-tenant.",
    link: "#",
  },
  {
    name: "Valentino Giungi",
    role: "Ingeniero de Software",
    expertise: "Full Stack + IA + datos en tiempo real.",
    link: "#",
  }
];

export default function Equipo() {
  return (
    <section id="equipo" className="section-padding bg-white">
      <div className="container-custom">
        <p className="eyebrow mb-8">05 &mdash; Equipo</p>
        
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-16">
          Quiénes somos.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group p-8 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
            >
              <h3 className="font-serif text-2xl text-slate-900 mb-2">
                {member.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-6">
                {member.role}
              </p>
              
              <p className="text-slate-700 leading-relaxed font-medium mb-8">
                {member.expertise}
              </p>
              
              <a 
                href={member.link}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors gap-2 group-hover:underline underline-offset-4"
              >
                Ver portfolio personal
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
