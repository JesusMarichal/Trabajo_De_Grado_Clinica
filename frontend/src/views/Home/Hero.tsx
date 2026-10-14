import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const PASOS = [
  { n: "1.", t: "Registro del paciente" },
  { n: "2.", t: "Agendamiento de la cita" },
  { n: "3.", t: "Consulta e historia clínica" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* Foto a sangre */}
      <Image
        src="/images/hero-recepcion.jpg"
        alt="Recepción de un centro de salud"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Velos: oscurecen la foto para que el titular blanco tenga contraste */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-16 pt-32 sm:pb-20">
        <div className="container-x text-center">
          <p className="mb-6 animate-fade-up text-[11px] font-bold uppercase tracking-[0.32em] text-white/70">
            Clínica Popular Tipo I “Dr. José María Vargas”
          </p>

          <h1 className="headline mx-auto max-w-4xl animate-fade-up text-[12vw] text-white [animation-delay:50ms] sm:text-6xl lg:text-7xl">
            Citas e historias
            <br />
            clínicas <span className="text-brand-light">sin papel</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl animate-fade-up text-[16px] leading-relaxed text-white/75 [animation-delay:150ms]">
            Sistema automatizado para el control de citas e historias clínicas de los
            servicios de Medicina General y Pediatría del Departamento de Información y
            Estadística de Salud.
          </p>
        </div>
      </div>

      <a
        href="#servicios"
        aria-label="Bajar a servicios"
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white lg:block"
      >
        <FiChevronDown className="animate-nudge" size={26} />
      </a>

      {/* Flujo de atención anclado al pie del hero; lleva a la explicación de cada paso */}
      <div className="relative z-10 border-t border-white/15 bg-black/35 backdrop-blur-sm">
        <div className="container-x grid grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PASOS.map((p, i) => (
            <a
              key={p.n}
              href="#como-funciona"
              className="group flex animate-fade-up items-center gap-4 py-5 sm:justify-center sm:py-7"
              style={{ animationDelay: `${400 + i * 120}ms` }}
            >
              <span className="text-lg font-black text-brand-light transition-transform duration-300 group-hover:scale-125">
                {p.n}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 group-hover:text-white">
                {p.t}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
