import React, { createContext, useContext, useEffect, useRef,useState } from "react";
import { ProjectsContext } from "./projectsContext";
import { useIsMobile } from "../hooks/useIsMobile";

export const ProjectSelectionContext = createContext();

export const ProjectSelectionProvider = ({ children }) => {
  const { refProject, projects, setSelectedProject } =
    useContext(ProjectsContext);
  let isMobile = useIsMobile();
  const refProjectSelection = useRef(null);

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

    if (!refProject.current) return;

    if (shouldScroll) {
      if (!isMobile) {
        setTimeout(() => {
          refProject.current?.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return;
      }
      const header = document.querySelector(".header-content-box");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const elementPosition =
        refProject.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 50);
    }
  }
  return (
    <ProjectSelectionContext.Provider
      value={{
        handleSelectedProject,
        refProjectSelection,
      }}>
      {children}
    </ProjectSelectionContext.Provider>
  );
};
