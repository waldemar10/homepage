import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../../context/projectsContext";
import { ProjectGalleryContext } from "../../../context/projectGalleryContext";
import { useResizeObserverContainer } from "../../../hooks/useResizeObserverContainer";
import ProjectGalleryArrows from "./ProjectGalleryArrows";
const getProjectImage = (title) => {
  try {
    return require(`../../../images/${title}`);
  } catch (error) {
    console.error(`Image for project ${title} not found`);
    return require(`../../../images/MQL4.png`);
  }
};

const ProjectBox = ({ index, isSelected, title, image, code, onSelect }) => {
  return (
    <article
      className={`project-gallery__item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(index, true)}
      style={{
        filter: isSelected
          ? "grayscale(0) brightness(1)"
          : "grayscale(1) brightness(0.5)",
      }}>
      <img src={image} alt={title} className="project-gallery__image" />
      <div className="project-gallery__box">
        <div className="project-gallery__title">{title}</div>
        <p>{code}</p>
      </div>
    </article>
  );
};

const ProjectGallery = () => {
  const { handleSelectedProject, refProjectGallery } = useContext(
    ProjectGalleryContext
  );
  const { dimensions } = useResizeObserverContainer(refProjectGallery);
  const { projects } = useContext(ProjectsContext);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const savedProject = sessionStorage.getItem("WJ_HP_clickedProject");
    if (savedProject) {
      handleSelectedProject(savedProject, false);
    }
    setIsLoaded(true);
  }, []);

  return (
    <section ref={refProjectGallery} className="project-gallery">
      <div className="placeholder__content"></div>
      <h2 className="project-gallery__heading" id="project">
        Projekte
      </h2>

      <div className="project-gallery__grid" id="projectSelection-box-showcase">
        {projects.map((project, index) => (
          <ProjectBox
            key={`${project.Title}-${index}`}
            index={index}
            isSelected={project.isClicked}
            title={project.Title}
            image={getProjectImage(project.Image)}
            code={project.Code}
            onSelect={handleSelectedProject}
          />
        ))}
      </div>
      {isLoaded && <ProjectGalleryArrows dimensions={dimensions} />}
    </section>
  );
};

export default ProjectGallery;
