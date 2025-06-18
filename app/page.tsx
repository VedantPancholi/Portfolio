"use client";
import Hero from "./components/hero-section/Hero";
import About from "./components/about-section/About";
import Works from "./components/work-section/Works";
import Experiences from "./components/experiences-section/Experiences";
import Skills from "./components/skills-section/Skills";
import Education from "./components/education-section/Education";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";

export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <About />
      <Works />
      <Experiences />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
