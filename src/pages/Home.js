import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/HeroSection";
import AboutmeSection from "../components/sections/AboutmeSection";
import ProjectGallery from "../components/sections/ProjectGallery";
import ProjectShowcase from "../components/sections/ProjectShowcase";

function Home() {
  return (
    <>
      <Header></Header>
      <Hero />
      <AboutmeSection />
      <ProjectGallery />
      <ProjectShowcase />
      <Footer></Footer>
    </>
  );
}
export default Home;
