import React, { createContext, useContext, useRef } from "react";
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
    localStorage.setItem("clickedProject", index);

    if (shouldScroll) {
      refProject.current.scrollIntoView({ behavior: "smooth" });
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
