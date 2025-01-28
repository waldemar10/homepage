import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Startscreen from "../components/sections/Startscreen";
import AboutMe from "../components/sections/AboutMe";
import ProjectSelection from "../components/sections/ProjectSelection";
import ProjectShowcase from "../components/sections/ProjectShowcase";
import Navbar from "../components/layout/Navbar";
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
    </>
  );
}
export default Home;
