import Startscreen from "../compsMain/Startscreen";
import Section from "../compsMain/Sections";
import ShowProject from "../compsMain/ShowProject";
import Navigation from "../compsMain/NavigationOld";
import Sidemenu from "../compsMain/Navbar";
// * Main represents the main component of the website.
function Main() {
  return (
    <>
      <Startscreen />
      <Section />
      <ShowProject />
  {/*     <Navigation /> */}
 {/*      <Sidemenu /> */}
    </>
  );
}
export default Main;
