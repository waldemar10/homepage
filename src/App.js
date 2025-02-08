import { useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Impressum from "./pages/Impressum";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { ProjectsContext } from "./context/projectsContext";
import { useProjects } from "./hooks/useProjects";

import './styles/main.scss';

function App() {
  const { setProjects, selectedProject, setSelectedProject } =
    useContext(ProjectsContext);

  const loading = useProjects(setProjects, setSelectedProject);

  if (loading || !selectedProject) {
    return (
      <div className="loading-screen">
        <p>Projekte werden geladen...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
