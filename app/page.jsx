import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProjectSection from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectSection />
      <Contact />
      <Footer />
    </>
  );
}
