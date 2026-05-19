import Image from "next/image";
import AnimateIn from "./AnimateIn";

const team = [
  {
    name: "Nicolás Petito",
    photo: "/images/nicolas.png",
    role: "Ingeniero de Software",
    expertise: "Next.js + Supabase. Webs y sistemas para PyMEs.",
    link: "https://portafolio-six-kappa-90.vercel.app/",
    github: "https://github.com/nicopetito",
    linkedin: "https://linkedin.com/in/nicolasvidela"
  },
  {
    name: "Pedro Agüero",
    photo: "/images/pedro.jpeg",
    role: "Ingeniero de Software",
    expertise: "Backend, SaaS B2B, arquitectura multi-tenant.",
    link: "https://portfoliopedroaguero.vercel.app/",
    github: "https://github.com/pedroagueroo",
    linkedin: "https://www.linkedin.com/in/pedro-agüero-1853a92b2"
  },
  {
    name: "Valentino Giungi",
    photo: "/images/valentino.jpeg",
    role: "Ingeniero de Software",
    expertise: "Full Stack + IA + datos en tiempo real.",
    link: "https://portfoliovalentinogiungi.vercel.app/",
    github: "https://github.com/valengiungi",
    linkedin: "https://www.linkedin.com/in/valen-giungi/"
  }
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-slate-300 block"></span>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              El equipo
            </p>
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 mb-20 tracking-tight">
            Nuestra estructura técnica.
          </h2>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-start"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold mb-4">
                {member.role}
              </p>
              
              <p className="text-slate-500 leading-relaxed font-medium mb-6">
                {member.expertise}
              </p>
              
              <div className="flex items-center gap-6 mt-auto">
                <a 
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-brand transition-colors inline-flex items-center gap-2 group/link"
                >
                  Portfolio
                  <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                </a>
                
                <div className="flex items-center gap-4 text-slate-300">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
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
