import Startscreen from "../layout/Startscreen";
import Section from "../layout/Sections";
import ShowProject from "../layout/ShowProject";
import { UsefullProvider } from "../../context/context";
import { ProjectsProvider } from "../../context/projectsContext";
import Navigation from "../navigation";
// * Main represents the main component of the website.
function Main() {
  return (
    <>
      <UsefullProvider>
        <ProjectsProvider>
          <Startscreen></Startscreen>
          <Section></Section>
          <ShowProject></ShowProject>
          <Navigation></Navigation>
        </ProjectsProvider>
      </UsefullProvider>
    </>
  );
}
export default Main;
