import Startscreen from "../compsMain/Startscreen";
import ProjectSelection from "../compsMain/ProjectSelection";
import ProjectShowcase from "../compsMain/ProjectShowcase";
// * Main represents the main component of the website.
function Main() {
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Startscreen />
      <ProjectSelection />
      <ProjectShowcase />
      </div>
    </>
  );
}
export default Main;
