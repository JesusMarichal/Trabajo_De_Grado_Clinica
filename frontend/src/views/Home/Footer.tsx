import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="container-x flex flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-center text-[11px] text-ink-500 sm:text-right">
          Universidad de Oriente · Núcleo de Nueva Esparta
          <br />
          Departamento de Información y Estadística de Salud
        </p>
      </div>
    </footer>
  );
}
