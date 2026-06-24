import { About } from "@/components/About";
import { AcademicResearch } from "@/components/AcademicResearch";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AcademicResearch />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
