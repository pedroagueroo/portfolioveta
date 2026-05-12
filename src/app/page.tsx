import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Estudio from "@/components/Estudio";
import Servicios from "@/components/Servicios";
import PorQueVeta from "@/components/PorQueVeta";
import Proyectos from "@/components/Proyectos";
import Equipo from "@/components/Equipo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div aria-hidden="true" className="h-16 bg-gradient-to-b from-[#0a0f1c] to-slate-50" />
      <Estudio />
      <Servicios />
      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-slate-50 to-white" />
      <PorQueVeta />
      <Proyectos />
      <Equipo />
      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-white to-slate-50" />
      <Contacto />
      <Footer />
    </main>
  );
}
