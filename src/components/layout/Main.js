import Startscreen from "../compsMain/Startscreen";
import Section from "../compsMain/Sections";
import ShowProject from "../compsMain/ShowProject";
import Navigation from "../compsMain/Navigation";
import Sidemenu from "../compsMain/Sidemenu";
// * Main represents the main component of the website.
function Main() {
  return (
    <>
      <Startscreen />
      <Section />
      <ShowProject />
      <Navigation />
      <Sidemenu />
    </>
  );
}
export default Main;
