import React, { createContext, useContext, useRef } from "react";
import { ProjectsContext } from "./projectsContext";
import { useIsMobile } from "../hooks/useIsMobile";

export const ProjectGalleryContext = createContext();

export const ProjectGalleryProvider = ({ children }) => {
  const { refProject, projects, setSelectedProject } = useContext(ProjectsContext);
  const isMobile = useIsMobile();
  const refProjectGallery = useRef(null);

  function resetAllClicked() {
    projects.forEach((project) => {
      project.isClicked = false;
    });
  }

  function handleSelectedProject(index, shouldScroll) {
    resetAllClicked();
    projects[index].isClicked = true;
    setSelectedProject(projects[index]);

    sessionStorage.setItem("WJ_HP_clickedProject", index);
   
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
      const elementPosition = refProject.current.getBoundingClientRect().top + window.scrollY;
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
    <ProjectGalleryContext.Provider
      value={{
        handleSelectedProject,
        refProjectGallery,
      }}
    >
      {children}
    </ProjectGalleryContext.Provider>
  );
};
