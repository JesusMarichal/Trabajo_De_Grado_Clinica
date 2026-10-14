import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// El mismo flujo de la franja del hero, explicado paso a paso
const PASOS = [
  {
    title: "Registro del paciente",
    description:
      "En taquilla se busca al paciente por su cédula. Si es nuevo, se registra y el sistema le asigna su número de historia.",
  },
  {
    title: "Agendamiento de la cita",
    description:
      "Se elige el servicio, la fecha y un médico disponible. La cita queda pendiente y se imprime el comprobante.",
  },
  {
    title: "Consulta e historia clínica",
    description:
      "El médico abre la historia digital, registra la consulta y la cita pasa a atendida. Sin buscar carpetas.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Foto a sangre en la mitad izquierda */}
        <div className="group relative min-h-[340px] overflow-hidden lg:min-h-[640px]">
          <Image
            src="/images/consulta-digital.jpg"
            alt="Médico consultando información en un dispositivo móvil"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink-950/20" />
        </div>

        <div className="flex items-center px-6 py-20 md:px-16 md:py-28">
          <div className="max-w-lg">
            <p className="eyebrow mb-5">Cómo funciona</p>
            <h2 className="headline mb-7 text-4xl text-ink-900 sm:text-5xl">
              De la taquilla
              <br />
              a la consulta
            </h2>
            <p className="body-text mb-10">
              Tres pasos reemplazan el libro de actas, la carpeta de citas y la búsqueda
              de expedientes en los ficheros.
            </p>

            <ol className="mb-10 space-y-5">
              {PASOS.map((p, i) => (
                <li
                  key={p.title}
                  className="group/item flex items-start gap-5 border-b border-ink-200 pb-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-brand text-[13px] font-black text-white transition-transform duration-300 group-hover/item:-rotate-6 group-hover/item:scale-110">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-900">
                      {p.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-ink-500">{p.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link href="/login" className="btn-primary">
              Iniciar sesión <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
