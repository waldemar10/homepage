import React, { createContext, useContext,useRef } from "react";

import data from "../data/projects.json";

import { ProjectsContext } from "./projectsContext";

const id_Filmbibliothek = "Filmbibliothek";
const id_kugelbahn = "Kugelbahn";
const id_SSP = "SSP";
const id_Yoga = "Yoga";
const id_GameDev = "GameDev";
const id_Awd = "Awd";
export const SectionContext = createContext();
export const SectionProvider = ({ children }) => {
  const {
    setProjectData,
    setClickedFilm,
    setClickedSSP,
    setClickedYoga,
    setClickedGameDev,
    setClickedKugelbahn,
    setClickedAwd,
    refProject,
  } = useContext(ProjectsContext);

  const refSection = useRef(null);
  function resetAllClicked() {
    setClickedKugelbahn(false);
    setClickedSSP(false);
    setClickedYoga(false);
    setClickedGameDev(false);
    setClickedFilm(false);
    setClickedAwd(false);
  }
  function handleSelectedProject(clickedProject) {
    resetAllClicked();

    switch (clickedProject) {
      case id_Filmbibliothek:
        setClickedFilm(true);
        localStorage.setItem("clickedProject", id_Filmbibliothek);
        setProjectData(data.Filmbibliothek[0]);
        break;
      case id_kugelbahn:
        setClickedKugelbahn(true);
        localStorage.setItem("clickedProject", id_kugelbahn);
        setProjectData(data.Kugelbahn[0]);
        break;
      case id_SSP:
        setClickedSSP(true);
        localStorage.setItem("clickedProject", id_SSP);
        setProjectData(data.SSP[0]);
        break;
      case id_Yoga:
        setClickedYoga(true);
        localStorage.setItem("clickedProject", id_Yoga);
        setProjectData(data.Yoga[0]);
        break;
      case id_GameDev:
        setClickedGameDev(true);
        localStorage.setItem("clickedProject", id_GameDev);
        setProjectData(data.GameDev[0]);
        break;
      case id_Awd:
        setClickedAwd(true);
        localStorage.setItem("clickedProject", id_Awd);
        setProjectData(data.Awd[0]);
        break;
      default:
        setClickedFilm(true);
        localStorage.setItem("clickedProject", id_Filmbibliothek);
        setProjectData(data.Filmbibliothek[0]);
        break;
    }

    refProject.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <SectionContext.Provider
      value={{
        handleSelectedProject, refSection
      }}>
      {children}
    </SectionContext.Provider>
  );
};
