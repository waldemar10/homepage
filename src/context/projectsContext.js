import React, {useState, createContext, useRef } from "react";
import data from "../data/projects.json";
export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [clickedFilm, setClickedFilm] = useState(true);
  const [clickedKugelbahn, setClickedKugelbahn] = useState(false);
  const [clickedSSP, setClickedSSP] = useState(false);
  const [clickedYoga, setClickedYoga] = useState(false);
  const [clickedGameDev, setClickedGameDev] = useState(false);
  const [clickedAwd, setClickedAwd] = useState(false);
  const [projectData, setProjectData] = useState(data.Filmbibliothek[0]);

  const refProject = useRef(null);
  return (
    <ProjectsContext.Provider
      value={{
        clickedFilm,
        setClickedFilm,
        clickedKugelbahn,
        setClickedKugelbahn,
        clickedSSP,
        setClickedSSP,
        clickedYoga,
        setClickedYoga,
        clickedGameDev,
        setClickedGameDev,
        clickedAwd,
        setClickedAwd,
        projectData,
        setProjectData,
        refProject,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
