import {useState, useContext, useEffect} from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Impressum from "./pages/Impressum";
import Home from "./pages/Home";
import { ProjectsContext } from './context/projectsContext';
import data from "./data/projects.json";
function App() {
  const [loading,isLoading] = useState(true);
  const {projects, setProjects,selectedProject,setSelectedProject} = useContext(ProjectsContext);
  useEffect(()=>{
    setProjects(() =>
      Object.keys(data).map((key) => ({
        id: key,
        ...data[key][0],
        isClicked: false
      }))
    );
    if(projects != undefined){
      isLoading(false);

      if(localStorage.getItem("clickedProject")){
        const index = localStorage.getItem("clickedProject");
        projects[index].isClicked = true;
        setSelectedProject(projects[index])
      }else{
        projects[0].isClicked = true;
        setSelectedProject(projects[0])
      }
    }
  },[projects === undefined]);

  if(loading || !selectedProject) return <></>

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="impressum" element={<Impressum />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
