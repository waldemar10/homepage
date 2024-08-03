import Startscreen from "../layout/Startscreen";
import Section from "../layout/Sections";
import ShowProject from "../layout/ShowProject";
import { UsefullProvider } from "../../context/context";
import { ProjectsProvider } from "../../context/projectsContext";
// * Main represents the main component of the website.
function Main() {
  return (
    <>
      <UsefullProvider>
        <ProjectsProvider>
          <Startscreen></Startscreen>
          <Section></Section>
          <ShowProject></ShowProject>
        </ProjectsProvider>
      </UsefullProvider>
    </>
  );
}
export default Main;
