import Home from "@/components/landing/Home";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Projects from "@/components/landing/Realisation";
import Contact from "@/components/landing/Contact";

export default function LandingPage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="realisations"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
