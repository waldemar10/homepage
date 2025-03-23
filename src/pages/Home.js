import React from "react";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero/HeroSection";
import AboutmeSection from "../components/sections/Aboutme/AboutmeSection";
import ProjectGallery from "../components/sections/ProjectGallery/ProjectGallery";
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
