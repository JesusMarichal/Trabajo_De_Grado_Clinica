import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Popular Dr. José María Vargas — Citas e Historias Clínicas",
  description:
    "Sistema automatizado para el control de citas e historias clínicas de los servicios de Medicina General y Pediatría.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
