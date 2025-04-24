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
  function scrollToProjectGallery() {
   
    refProjectGallery.current?.scrollIntoView({ behavior: "smooth" });
  }
  function calculateScrollPosition() {
    const header = document.querySelector(".header__content-box");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const elementPosition = refProject.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;
    return offsetPosition;
  }

  function handleSelectedProject(index, shouldScroll) {
    if(!projects) return;
    if (!refProject.current) return;

    resetAllClicked();
    projects[index].isClicked = true;
    setSelectedProject(projects[index]);

    if (shouldScroll) {
      if (!isMobile) {
        setTimeout(() => {
          refProject.current.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return;
      }

      const offsetPosition = calculateScrollPosition();

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
        scrollToProjectGallery,
      }}
    >
      {children}
    </ProjectGalleryContext.Provider>
  );
};
