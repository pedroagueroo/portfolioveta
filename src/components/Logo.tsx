export default function Logo({ className = "", isDark = false }: { className?: string, isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Icon */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Solid Blue Square */}
        <rect width="40" height="40" fill="var(--color-brand)" />
        {/* Stylized White Slash/Triangle */}
        <polygon points="10,40 19,10 21,10 17,40" fill="white" />
      </svg>
      
      {/* Text */}
      <span 
        className={`font-sans font-bold text-3xl tracking-[0.2em] leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}
        style={{ letterSpacing: '0.15em' }}
      >
        VETA
      </span>
    </div>
  );
}
