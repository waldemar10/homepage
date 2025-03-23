import React, { useState, createContext, useRef } from "react";
export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState();
  const [projects, setProjects] = useState();
  const refProject = useRef(null);

  return (
    <ProjectsContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        refProject,
        projects,
        setProjects,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
