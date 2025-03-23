import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../../context/projectsContext";
import { ProjectGalleryContext } from "../../../context/projectGalleryContext";
import { useResizeObserverContainer } from "../../../hooks/useResizeObserverContainer";
import { fetchProjects } from "../../../api/projectsApi";
import ProjectGalleryArrows from "./ProjectGalleryArrows";

const getProjectImage = (title) => {
  try {
    return require(`../../../images/${title}`);
  } catch (error) {
    console.error(`Image for project ${title} not found`);
    return require(`../../../images/MQL4.png`);
  }
};

const ProjectBox = ({ index, isSelected, title, image, code }) => {
  const { handleSelectedProject } = useContext(ProjectGalleryContext);
  return (
    <article
      className={`project-gallery__item ${isSelected ? "selected" : ""}`}
      onClick={() => handleSelectedProject(index, true)}
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
  const { refProjectGallery } = useContext(ProjectGalleryContext);
  const { dimensions } = useResizeObserverContainer(refProjectGallery);
  const { projects, setProjects, setSelectedProject } =
    useContext(ProjectsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setSelectedProject(data[0]);
        data[0].isClicked = true;
      } catch (error) {
        console.error("Error loading projects", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProjects();
  }, []);

  return (
    <section ref={refProjectGallery} className="project-gallery">
      <div className="placeholder__content"></div>
      <h2 className="project-gallery__heading" id="project">
        Meine <span className="project-gallery__heading--highlight">Projekte.</span>
      </h2>

      <div className="project-gallery__grid" id="projectSelection-box-showcase">
        {isLoading ? (
          <div>Projekte werden geladen... </div>
        ) : !projects || projects.length === 0 ? (
          <div className="errors__container">
            <p className="errors__message">Keine Projekte gefunden</p>
          </div>
        ) : (
          projects.map((project, index) => (
            <ProjectBox
              key={`${project.title}-${index}`}
              index={index}
              isSelected={project.isClicked}
              title={project.title}
              image={getProjectImage(project.thumbnail)}
              code={project.code_languages}
            />
          ))
        )}
      </div>

      {!isLoading && projects && <ProjectGalleryArrows dimensions={dimensions} />}
    </section>
  );
};

export default ProjectGallery;
