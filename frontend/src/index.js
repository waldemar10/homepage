import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ProjectsProvider } from "./context/projectsContext";
import { ProjectGalleryProvider } from "./context/projectGalleryContext";
import { AboutMeProvider } from "./context/aboutMeContext";
import { ThemeProvider } from "./context/themeContext";
import I18nInitWrapper from './i18n/i18nInit';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <ProjectGalleryProvider>
        <AboutMeProvider>
          <ThemeProvider>
          <I18nInitWrapper>
          <App />
          </I18nInitWrapper>
          </ThemeProvider>
        </AboutMeProvider>
      </ProjectGalleryProvider>
    </ProjectsProvider>
  </React.StrictMode>
);
