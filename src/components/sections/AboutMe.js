import React, { useContext } from "react";
import { AboutMeContext } from "../../context/aboutMeContext";
import "../../styles/aboutMe.css";
const AboutMe = () => {
  const { refAboutMe } = useContext(AboutMeContext);
  return (
    <div ref={refAboutMe} className="aboutme-wrapper">
      <h2>Leidenschaftlicher Entwickler</h2>
      <div className="aboutme-container">
        <div className="aboutme-introduction">
          <p>Im Jahr 2019 entdeckte ich erstmals die Welt der Informatik für mich. Anfangs programmierte ich Handelsalgorithmen mit MQL4, mit dem Ziel,
            positive Renditen mit verschiedenen Handlungsstrategien auf dem Devisenmarkt zu realisieren.
          </p>
          <p>
            Mich begeisterte das Programmieren so sehr, dass ich mich entschied, ein Informatik-Studium zu starten. Während meines Studiums
            kam ich mit verschiedenen Programmiersprachen in Kontakt und lernte die Grundlagen der Softwareentwicklung kennen. Auch Teamarbeit und Projektmanagement waren wichtige Bestandteile
             meines Studiums. Meine Leidenschaft für die Webentwicklung entdeckte ich während des Studiums. 
          </p>
          <p>
            Mein Ziel ist es nun, meine Kenntnisse in der Webentwicklung zu
             vertiefen und mich auf die Entwicklung von Webanwendungen zu spezialisieren, um anschließend ein Experte in diesem Bereich zu werden.
          </p>
        </div>
        <div className="aboutme-skills">
          <h3>Skills</h3>
          <div>
            <h4>Programmiersprachen</h4>
            <p>Java, JavaScript, Kotlin, PHP, Python</p>
          </div>
          <div>
            <h4>Frontend</h4>
            <p>Angular, Bootstrap, CSS, HTML, React</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Express, Node.js</p>
          </div>
          <div>
            <h4>Datenbanken</h4>
            <p>MongoDB</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Git, Visual Studio Code</p>
          </div>
          <div>
            <h4>Design</h4>
            <p>Adobe XD, Adobe Illustrator, Figma</p>
          </div>
          <div>
            <h4>Projektmanagement</h4>
            <p>Trello</p>
          </div>
        </div>
      </div>
      <div className="line line-delayed"/>
    </div>
  );
};

export default AboutMe;