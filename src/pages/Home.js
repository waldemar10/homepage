import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Starfield from "../components/effects/Starfield";
import Startscreen from "../components/Startscreen";
import AboutMe from "../components/AboutMe";
import ProjectSelection from "../components/ProjectSelection";
import ProjectShowcase from "../components/ProjectShowcase";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Header></Header>
      <Startscreen />
      <AboutMe />
      <ProjectSelection />
      <ProjectShowcase />
      <Footer></Footer>
      <Navbar></Navbar>
      {/* <Starfield></Starfield> */}
    </>
  );
}
export default Home;
