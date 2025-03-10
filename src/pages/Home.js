import React from "react";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/HeroSection";
import AboutmeSection from "../components/sections/AboutmeSection";
import ProjectGallery from "../components/sections/ProjectGallery";
import ProjectShowcase from "../components/sections/ProjectShowcase";

function Home() {
  return (
    <>
      <Hero />
      <AboutmeSection />
      <ProjectGallery />
      <ProjectShowcase />
      <Footer></Footer>
    </>
  );
}
export default Home;
