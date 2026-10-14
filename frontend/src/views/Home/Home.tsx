import Navbar from "./Navbar";
import Hero from "./Hero";
import Servicios from "./Servicios";
import ComoFunciona from "./ComoFunciona";
import Modulos from "./Modulos";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <ComoFunciona />
        <Modulos />
      </main>
      <Footer />
    </>
  );
}
