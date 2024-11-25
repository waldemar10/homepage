import React, { createContext, useContext, useRef } from "react";
import { ProjectsContext } from "./projectsContext";

export const ProjectSelectionContext = createContext();
export const ProjectSelectionProvider = ({ children }) => {
  const { refProject, projects, setSelectedProject } =
    useContext(ProjectsContext);

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
    if (shouldScroll) {
      setTimeout(() => {
        refProject.current?.scrollIntoView({ behavior: "smooth" });
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
