import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ProjectsProvider } from "./context/projectsContext";
import { ProjectGalleryProvider } from "./context/projectGalleryContext";
import { AboutMeProvider } from "./context/aboutMeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <ProjectGalleryProvider>
        <AboutMeProvider>
          <App />
        </AboutMeProvider>
      </ProjectGalleryProvider>
    </ProjectsProvider>
  </React.StrictMode>
);
