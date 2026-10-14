"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface Modulo {
  title: string;
  ciclo: number;
  // Proceso manual que reemplaza (descrito en el planteamiento del problema)
  antes: string;
  ahora: string;
  datos: string[];
}

const MODULOS: Modulo[] = [
  {
    title: "Autenticación y seguridad",
    ciclo: 1,
    antes: "Los expedientes reposan en gavetas al alcance de cualquiera.",
    ahora: "Solo el personal del departamento entra al sistema, con su usuario y contraseña.",
    datos: ["Contraseñas ocultas", "Recuperación por correo", "Acceso por usuario"],
  },
  {
    title: "Reportes e indicadores",
    ciclo: 1,
    antes: "Diagnósticos y tratamientos se transcriben a mano al formato de Morbilidad.",
    ahora: "La pantalla principal muestra las estadísticas del día en tiempo real.",
    datos: ["Atendidos por día y semana", "Citas pendientes", "Citas canceladas", "Médicos activos"],
  },
  {
    title: "Configuración de médicos",
    ciclo: 2,
    antes: "La disponibilidad de cada especialista se verifica a mano.",
    ahora: "Cada médico tiene su horario y estatus; si falta, se ven las citas afectadas.",
    datos: ["Código MPPS", "Especialidad", "Horario de entrada y salida", "Activo / inactivo"],
  },
  {
    title: "Gestión de citas",
    ciclo: 2,
    antes: "Las citas se anotan en una carpeta de primera vez y sucesivas.",
    ahora: "La cita se agenda por fecha y médico, y su estado se actualiza al instante.",
    datos: ["Pendiente", "Atendida", "Cancelada", "Síntomas preliminares"],
  },
  {
    title: "Registro de pacientes",
    ciclo: 3,
    antes: "El número de historia sale de un libro de actas y el expediente se ubica con tarjetas índice.",
    ahora: "Se escribe la cédula y aparece el paciente con todos sus antecedentes.",
    datos: ["Búsqueda por cédula", "Regular / pediátrico", "Cédula del representante", "Antecedentes"],
  },
  {
    title: "Historias clínicas",
    ciclo: 3,
    antes: "El médico llena a bolígrafo planillas impresas que se anexan a la carpeta.",
    ahora: "Un formulario digital para Medicina General y otro para Pediatría.",
    datos: ["Motivo de consulta", "Diagnóstico", "Examen por sistemas", "Datos perinatales"],
  },
];

export default function Modulos() {
  const [activo, setActivo] = useState(0);
  const m = MODULOS[activo];

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
      <div className="absolute inset-0 bg-black/80" />

      <div className="container-x relative z-10">
        <div className="mb-14 border-b border-white/10 pb-8">
          <p className="eyebrow mb-4 text-brand-light">Módulos</p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            Lo que hoy se hace
            <br />
            en papel, digital
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Lista de módulos */}
          <ol className="border-t border-white/10">
            {MODULOS.map((mod, i) => (
              <li key={mod.title}>
                <button
                  onClick={() => setActivo(i)}
                  aria-pressed={activo === i}
                  className={`group flex w-full items-center gap-5 border-b border-white/10 py-5 text-left transition-colors duration-300 ${
                    activo === i ? "text-white" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold tracking-[0.2em] transition-colors duration-300 ${
                      activo === i ? "text-brand-light" : ""
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="headline flex-1 text-lg sm:text-xl">{mod.title}</span>
                  <FiArrowRight
                    size={16}
                    className={`shrink-0 transition-all duration-300 ${
                      activo === i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ol>

          {/* Detalle del módulo seleccionado */}
          <div key={activo} className="animate-fade-up border border-white/10 bg-black/40 p-8 backdrop-blur-sm sm:p-10">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
              Ciclo {m.ciclo} de desarrollo
            </p>
            <h3 className="headline mb-10 text-3xl text-white sm:text-4xl">{m.title}</h3>

            <div className="mb-10 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-black/60 p-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                  Antes
                </p>
                <p className="text-[14px] leading-relaxed text-white/55">{m.antes}</p>
              </div>
              <div className="bg-black/60 p-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-light">
                  Con el sistema
                </p>
                <p className="text-[14px] leading-relaxed text-white">{m.ahora}</p>
              </div>
            </div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
              Qué registra
            </p>
            <ul className="flex flex-wrap gap-2">
              {m.datos.map((d) => (
                <li
                  key={d}
                  className="border border-white/20 px-3.5 py-2 text-[12px] font-medium text-white/85"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
