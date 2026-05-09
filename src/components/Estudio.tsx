export default function Estudio() {
  return (
    <section id="estudio" className="section-padding bg-slate-50">
      <div className="container-custom">
        <p className="eyebrow mb-8">02 &mdash; Estudio</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight">
            Tres ingenieros.<br />Productos en producción.
          </h2>
          
          <div className="flex items-center">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
              Formados en UTN con manejo profundo de algoritmos y arquitectura, no solo frameworks. Construimos productos a medida que viven en producción, no demos.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
          <div>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">Profundidad técnica</h3>
            <p className="text-slate-600 leading-relaxed">
              No armamos plantillas. Diseñamos sistemas robustos, bases de datos optimizadas y arquitecturas escalables preparadas para el crecimiento real.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">Productos reales</h3>
            <p className="text-slate-600 leading-relaxed">
              Nuestros sistemas gestionan miles de turnos, usuarios activos y transacciones B2B a diario. Nos enfocamos en el valor y el impacto medible.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">Trato directo</h3>
            <p className="text-slate-600 leading-relaxed">
              Sin intermediarios ni account managers. Hablás directamente con los ingenieros que construyen tu producto, asegurando claridad y velocidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
