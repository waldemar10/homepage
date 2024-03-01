import "../styles/projectStyles.css";
import React, {useState,useContext} from "react";
import { ExpandContext } from "../context/context";

import Filmbibliothek from "./projects/Filmbibliothek";
import SchereSteinPapier from "./projects/SchereSteinPapier";
import Yoga from "./projects/Yoga";
import Kugelbahn from "./projects/Kugelbahn";
import GameDev from "./projects/GameDev";
import video_filmbibliothek from "../videos/Filmbibliothek.mp4";
import video_kugelbahn from "../videos/Kugelbahn.mp4";
import video_ssp from "../videos/SchereSteinPapier.mp4";
import video_yoga from "../videos/Yoga.mp4";
import video_gameDev from "../videos/GameDev.mp4";
import data from "../data/projects.json";

import img_kugelbahn from "../images/Kugelbahn.JPG";
import img_filmbibliothek from "../images/Filmbibliothek/Filmbibliothek.JPG";
import img_vc from "../images/VC/SSP.JPG";
import img_yoga from "../images/Yoga.JPG";
import img_gameDev from "../images/GameDev/GameDev.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Project() {
  const [projects] = useState(data);
  const { id, setID } = useContext(ExpandContext);
  let clickedFilm = false;
  let clickedSSP = false;
  let clickedKugelbahn = false;
  let clickedYoga = false;
  let clickedGameDev = false;
  let title,gitHub,image,video,code,group,requirements,main;
  switch (id) {
    case "Filmbibliothek":
      main = projects.Filmbibliothek[0];
      video = video_filmbibliothek;
      image = img_filmbibliothek;
      clickedFilm = true;
      break;
    case "Kugelbahn":
      main = projects.Kugelbahn[0];
      video = video_kugelbahn;
      image = img_kugelbahn;
      clickedKugelbahn = true;
      break;
    case "SSP":
      main = projects.SSP[0];
      video = video_ssp;
      image = img_vc;
      clickedSSP = true;
      break;
    case "Yoga":
      main = projects.Yoga[0];
      video = video_yoga;
      image = img_yoga;
      clickedYoga = true;
      break;
      case "GameDev":
        main = projects.GameDev[0];
        video = video_gameDev;
        image = img_gameDev;
        clickedGameDev = true;
        break;
    default:
      main = projects.Filmbibliothek[0];
      video = video_filmbibliothek;
      image = img_filmbibliothek;
      clickedFilm = true;
  }
  title = main.Title;
  gitHub = main.GitHub;

  code = main.Code;
  group = main.Group;
  requirements = main.Requirements;
  //image = Image.resolveAssetSource(require('../images/Filmbibliothek/Filmbibliothek.JPG')).uri
  return (
    <>
      <div id="projectHeadline">
        {/*<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3369.93 1895.09"
        style={{position:"absolute",top:"800px",right:"-100px",zIndex:"-1",fill:"#021aee",overflow:"hidden",width:"135%"}}>
            
            <path class="cls-1" d="m130.21,24.72c810.69-110.79,2261,135,3033,1230s-857,501-1067,277c-141.43-150.86-597-297-1020-306-409.21-8.71-977.67-362.98-1034.83-778.49S-34.29,47.2,130.21,24.72Z"/>
        </svg>
        <svg
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 949.79 639.74"
          style={{
            position: "absolute",
            left: "-900px",
            zIndex: "-1",
            fill: "#e91e63",
            width: "1000px",
          }}
        >
          <path
            class="cls-3"
            d="m67.29,181.22s-196,367,81,423,545,40,633-8,285-361,75-436S351.29-170.78,67.29,181.22Z"
          />
        </svg>
*/}
        <div className="project_headline" >{title}</div>

        <div className="project_svg_line">
          <div className="project_svg_box">
            <FontAwesomeIcon icon={faListCheck} className="project_icons" />
            <p className="project_svg_text">{requirements}</p>
          </div>

          <div className="project_svg_box">
            <FontAwesomeIcon icon={faUserGroup} className="project_icons" />
            <p className="project_svg_text">{group}</p>
          </div>

          <div className="project_svg_box">
            <FontAwesomeIcon icon={faLaptopCode} className="project_icons" />
            <p className="project_svg_text">{code}</p>
          </div>

          <div className="project_svg_box">
            <a
              href={gitHub}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faGithub} className="project_icons" />
            </a>
            <a
              className="project_svg_text"
              href={gitHub}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
     

       

            
<div style={{ display: clickedFilm ? "flex" : "none" }}>
  <Filmbibliothek />
</div>
<div style={{ display: clickedSSP ? "flex" : "none" }}>
  <SchereSteinPapier />
</div>
<div style={{ display: clickedKugelbahn ? "flex" : "none" }}>
  <Kugelbahn />
</div>
<div style={{ display: clickedYoga ? "flex" : "none" }}>
  <Yoga />
</div>
<div style={{ display: clickedGameDev ? "flex" : "none" }}>
  <GameDev />
</div>


      </div>
    </>
  );
}
export default Project;
