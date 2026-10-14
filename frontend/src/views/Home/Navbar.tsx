"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "@/components/ui/Logo";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Módulos", href: "#modulos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sobre el hero la barra es transparente; al bajar se vuelve sólida
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between px-6">
        <Link href="/">
          <Logo light={!solid} />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${solid ? "text-ink-700 hover:text-brand" : "text-white/80 hover:text-white"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden bg-brand px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 sm:inline-flex"
          >
            Iniciar sesión
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center lg:hidden ${solid ? "text-ink-900" : "text-white"}`}
          >
            {open ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-200 bg-white px-6 pb-6 pt-2 lg:hidden">
          {[...LINKS, { label: "Iniciar sesión", href: "/login" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-100 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-ink-700 transition-colors duration-200 last:border-0 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
