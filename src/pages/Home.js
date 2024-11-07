import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import Starfield from "../components/effects/Starfield";

function Home() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <Starfield></Starfield>
    </div>
  );
}
export default Home;
