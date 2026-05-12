import AnimateIn from "./AnimateIn";

export default function Contacto() {
  const whatsappMessage = encodeURIComponent(
    "Hola Veta, me gustaría hablar sobre un proyecto."
  );

  const members = [
    {
      name: "Nicolás Petito",
      phone: "54922361724294",
      email: "videlapetito@gmail.com",
    },
    {
      name: "Pedro Agüero",
      phone: "5492234233487",
      email: "aguerop47@gmail.com",
    },
    {
      name: "Valentino Giungi",
      phone: "5492235049768",
      email: "giungivalen@gmail.com",
    },
  ];

  return (
    <section id="contacto" className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container-custom max-w-5xl mx-auto flex flex-col items-center text-center">
        <AnimateIn>
          <p className="eyebrow mb-8">07 &mdash; Contacto</p>
          <h2 className="font-sans font-bold text-5xl md:text-7xl text-slate-900 mb-6 leading-tight">
            ¿Tenés un proyecto?<br />
            <span className="text-brand italic">Hablemos.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-14 font-medium max-w-2xl leading-relaxed">
            Contanos qué necesitás construir, mejorar o automatizar.
            Te respondemos con una propuesta clara en menos de 24 horas.
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-14">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center hover:border-brand/30 hover:shadow-[0_8px_32px_rgba(0,69,139,0.08)] transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6">{member.name}</h3>
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={`https://wa.me/${member.phone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand/8 text-brand rounded-lg font-semibold hover:bg-brand hover:text-white transition-all w-full text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm w-full hover:border-brand hover:text-brand transition-colors truncate"
                  title={member.email}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </div>
          ))}
          </div>
        </AnimateIn>

        <p className="text-sm text-slate-400 font-medium">
          Respondemos en el día &middot; Presupuesto sin compromiso
        </p>
      </div>
    </section>
  );
}
