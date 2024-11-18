import React, { createContext, useContext, useRef, useEffect } from "react";
import { ProjectsContext } from "./projectsContext";

export const SectionContext = createContext();
export const SectionProvider = ({ children }) => {
  const { refProject, projects, setSelectedProject } =
    useContext(ProjectsContext);

  const refSection = useRef(null);

  function resetAllClicked() {
    projects.map((project) => {
      project.isClicked = false;
    });
  }
  function handleSelectedProject(index, shouldScroll) {
    resetAllClicked();
    projects[index].isClicked = true;
    setSelectedProject(projects[index]);
    
    localStorage.setItem("WJ_HP_clickedProject", index);
    if (shouldScroll) {
      setTimeout(() => {
        refProject.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }
  return (
    <SectionContext.Provider
      value={{
        handleSelectedProject,
        refSection,
      }}>
      {children}
    </SectionContext.Provider>
  );
};
