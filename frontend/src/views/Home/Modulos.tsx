import Image from "next/image";
import type { IconType } from "react-icons";
import {
  LuCalendarCheck,
  LuChartColumn,
  LuClipboardList,
  LuShieldCheck,
  LuUserRound,
  LuUsers,
} from "react-icons/lu";

interface Modulo {
  title: string;
  icon: IconType;
  description: string;
}

// Módulos del sistema definidos en el alcance del trabajo de grado
const MODULOS: Modulo[] = [
  {
    title: "Autenticación y seguridad",
    icon: LuShieldCheck,
    description:
      "Acceso solo para el personal autorizado, con recuperación de contraseña por correo.",
  },
  {
    title: "Reportes e indicadores",
    icon: LuChartColumn,
    description:
      "Pacientes atendidos, citas pendientes y canceladas, y médicos activos en tiempo real.",
  },
  {
    title: "Configuración de médicos",
    icon: LuUserRound,
    description:
      "Registro de médicos con código MPPS, especialidad y horario de atención.",
  },
  {
    title: "Gestión de citas",
    icon: LuCalendarCheck,
    description:
      "Agendamiento por fecha y médico, con estado pendiente, atendida o cancelada.",
  },
  {
    title: "Registro de pacientes",
    icon: LuUsers,
    description:
      "Búsqueda por cédula y distinción entre pacientes regulares y pediátricos.",
  },
  {
    title: "Historias clínicas",
    icon: LuClipboardList,
    description:
      "Formularios digitales de consulta para Medicina General y Pediatría.",
  },
];

export default function Modulos() {
  return (
    <section id="modulos" className="section relative overflow-hidden">
      {/* Foto de fondo oscurecida para que el texto se lea bien */}
      <Image
        src="/images/modulos-fondo.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="container-x relative z-10">
        <div className="mb-14 border-b border-white/10 pb-8">
          <p className="eyebrow mb-4 text-brand-light">Módulos</p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            Todo el flujo de
            <br />
            la consulta, conectado
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {MODULOS.map((m, i) => (
            <article key={m.title} className="group bg-black/50 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-black/30">
              <div className="mb-8 flex items-center justify-between">
                <span className="icon-box h-12 w-12 border-brand-light/40 text-brand-light">
                  <m.icon size={20} />
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="headline mb-3 text-lg text-white transition-colors duration-300 group-hover:text-brand-light">
                {m.title}
              </h3>
              <p className="body-text text-ink-300">{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
