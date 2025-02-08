import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Startscreen from "../components/sections/Startscreen";
import AboutMe from "../components/sections/AboutMe";
import ProjectSelection from "../components/sections/ProjectSelection";
import ProjectShowcase from "../components/sections/ProjectShowcase";

function Home() {
  return (
    <>
      <Header></Header>
      <Startscreen />
      <AboutMe />
      <ProjectSelection />
      <ProjectShowcase />
      <Footer></Footer>
    </>
  );
}
export default Home;
