import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/HeroSection";
import AboutMe from "../components/sections/AboutMe";
import ProjectGallery from "../components/sections/ProjectGallery";
import ProjectShowcase from "../components/sections/ProjectShowcase";

function Home() {
  return (
    <>
      <Header></Header>
      <Hero />
      <AboutMe />
      <ProjectGallery />
      <ProjectShowcase />
      <Footer></Footer>
    </>
  );
}
export default Home;
