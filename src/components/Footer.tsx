import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#0a0f1c] text-center border-t border-slate-800">
      <div className="container-custom flex flex-col items-center gap-8">
        <Logo isDark={true} className="opacity-70 hover:opacity-100 transition-opacity" />
        <p className="text-sm font-medium text-slate-400 font-mono tracking-wide">
          Estudio de desarrollo &middot; Mar del Plata &middot; 2026
        </p>
      </div>
    </footer>
  );
}
