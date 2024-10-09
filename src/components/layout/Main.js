import Startscreen from "../compsMain/Startscreen";
import Section from "../compsMain/Sections";
import ShowProject from "../compsMain/ShowProject";
import { ProjectsProvider } from "../../context/projectsContext";
import { SectionProvider } from "../../context/sectionContext";
import Navigation from "../compsMain/Navigation";
import Sidemenu from "../compsMain/Sidemenu";
// * Main represents the main component of the website.
function Main() {

  return (
    <>
        <ProjectsProvider>
          <SectionProvider>
          <Startscreen />
          <Section/>
          <ShowProject/>
          <Navigation/>
          <Sidemenu/>
          </SectionProvider>
        </ProjectsProvider>
    </>
  );
}
export default Main;
