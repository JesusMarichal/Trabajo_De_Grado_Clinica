import { LuHeartPulse } from "react-icons/lu";

interface LogoProps {
  // Color del texto según el fondo donde se muestre
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <span className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
        <LuHeartPulse size={18} />
      </span>
      <span
        className={`text-[13px] font-black uppercase leading-tight tracking-[0.14em] transition-colors duration-300 ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        Clínica
        <span className="block text-brand-light">Dr. J. M. Vargas</span>
      </span>
    </span>
  );
}
