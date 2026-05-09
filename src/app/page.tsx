import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Estudio from "@/components/Estudio";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Equipo from "@/components/Equipo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Estudio />
      <Servicios />
      <Proyectos />
      <Equipo />
      <Contacto />
      <Footer />
    </main>
  );
}
