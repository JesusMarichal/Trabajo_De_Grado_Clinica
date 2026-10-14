import Image from "next/image";
import { FiCheck } from "react-icons/fi";

interface Servicio {
  title: string;
  publico: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
}

const SERVICIOS: Servicio[] = [
  {
    title: "Medicina General",
    publico: "Adultos",
    image: "/images/medicina-general.jpg",
    alt: "Médica tomando la tensión arterial a una paciente adulta",
    description:
      "Consulta para pacientes adultos, registrados con su cédula de identidad.",
    features: [
      "Motivo de consulta y enfermedad actual",
      "Antecedentes personales y familiares",
      "Examen funcional por sistemas corporales",
    ],
  },
  {
    title: "Pediatría",
    publico: "Menores de edad",
    image: "/images/pediatria.jpg",
    alt: "Pediatra atendiendo a un bebé en brazos de su madre",
    description:
      "Consulta para menores de edad, vinculados a la cédula de su representante legal.",
    features: [
      "Higiene pre y perinatal y datos del parto",
      "Hitos del desarrollo del niño",
      "Antecedentes patológicos específicos",
    ],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section bg-ink-100">
      <div className="container-x">
        <div className="mb-14 border-b border-ink-200 pb-8">
          <p className="eyebrow mb-4">Servicios</p>
          <h2 className="headline text-4xl text-ink-900 sm:text-5xl">
            Dos consultas,
            <br />
            un solo sistema
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICIOS.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink-950/25 transition-colors duration-500 group-hover:bg-ink-950/5" />
                <span className="absolute bottom-0 left-0 bg-brand px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-500 group-hover:px-7">
                  {s.publico}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <h3 className="headline mb-4 text-2xl text-ink-900 transition-colors duration-300 group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="body-text mb-7">{s.description}</p>

                <ul className="space-y-3 border-t border-ink-200 pt-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <FiCheck className="mt-0.5 shrink-0 text-brand" size={15} />
                      <span className="text-[13px] font-medium text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
