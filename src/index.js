import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProjectsProvider } from "./context/projectsContext";
import { ProjectSelectionProvider } from "./context/projectSelectionContext";
import { AboutMeProvider } from "./context/aboutMeContext";
import "./index.css";
import "./styles/animations.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <ProjectSelectionProvider>
        <AboutMeProvider>
                    <App />
        </AboutMeProvider>
      </ProjectSelectionProvider>
    </ProjectsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(console.log); */
