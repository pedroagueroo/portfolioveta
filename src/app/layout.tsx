import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"], // Added 600 just in case
});

export const metadata: Metadata = {
  title: "Veta | Estudio de desarrollo en Mar del Plata",
  description: "Construimos productos digitales con precisión. Tres ingenieros con manejo profundo de algoritmos y arquitectura.",
  keywords: ["Desarrollo web", "Mar del Plata", "Software", "Sistemas web", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
