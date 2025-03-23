import { useEffect, useState } from "react";
import data from "../data/projects.json";

export const useProjects = (setProjects, setSelectedProject) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadedProjects = Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
      isClicked: false,
    }));
    console.log(loadedProjects);
    setProjects(loadedProjects);
    const index = sessionStorage.getItem("WJ_HP_clickedProject") || 0;
    loadedProjects[index].isClicked = true;
    setSelectedProject(loadedProjects[index]);

    setLoading(false);
  }, [setProjects, setSelectedProject]);

  return loading;
};
