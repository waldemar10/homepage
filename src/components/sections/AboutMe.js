import React, { useContext } from "react";
import Socials from "../common/Socials";
import { AboutMeContext } from "../../context/aboutMeContext";

const AboutMe = () => {
  const { refAboutMe } = useContext(AboutMeContext);

  return (
    <section ref={refAboutMe} className="aboutme">
      <h2 className="aboutme__headline">Leidenschaftlicher Entwickler</h2>

      <div className="aboutme__container">
        <div className="aboutme__introduction">
          <p>
            Im Jahr 2019 entdeckte ich erstmals für mich die Welt der Informatik.
            Anfangs programmierte ich Handelsalgorithmen mit MQL4, mit dem Ziel,
            positive Renditen mit verschiedenen Handlungsstrategien auf dem
            Devisenmarkt zu realisieren.
          </p>
          <p>
            Mich begeisterte das Programmieren so sehr, dass ich mich entschied,
            ein Informatik-Studium zu starten. Während meines Studiums kam ich
            mit verschiedenen Programmiersprachen in Kontakt und lernte die
            Grundlagen der Softwareentwicklung kennen. Auch Teamarbeit und
            Projektmanagement waren wichtige Bestandteile meines Studiums.
          </p>
          <p>
            Mein Ziel ist es, mein Wissen kontinuierlich zu erweitern und mit
            meiner Arbeit einen positiven Beitrag zu leisten, sei es durch die
            Entwicklung innovativer Softwarelösungen oder die Zusammenarbeit an
            Projekten, die Menschen und Unternehmen unterstützen.
          </p>
        </div>

        <div className="aboutme__skills">
          <h3>Fähigkeiten</h3>
          <div>
            <h4>Programmiersprachen</h4>
            <p>Java, JavaScript, Kotlin, PHP, Python</p>
          </div>
          <div>
            <h4>Frontend</h4>
            <p>Angular, Bootstrap, CSS (SCSS), HTML, React</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Express, Node.js</p>
          </div>
          <div>
            <h4>Datenbanken</h4>
            <p>MongoDB, MySQL</p>
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

      <Socials width="35px" height="35px" className="aboutme__socials" />

      <div className="line line-delayed" />
    </section>
  );
};

export default AboutMe;
