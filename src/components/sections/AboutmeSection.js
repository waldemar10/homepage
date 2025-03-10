import React, { useContext,useEffect,useState, useRef } from "react";
import { AboutMeContext } from "../../context/aboutMeContext";
import Arrow from "../common/Arrows";
import Circle from "../common/Circles";
import mql4 from "../../images/MQL4.png";
import laptop from "../../images/Laptop.jpg";
const AboutMe = () => {
  const { refAboutMe } = useContext(AboutMeContext);
  const refSeperator = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 1200 });
 useEffect(() => {
     const observer = new ResizeObserver((entries) => {
       for (let entry of entries) {
         setDimensions({
           width: entry.contentRect.width,
           height: entry.contentRect.height,
         });
       }
     });
 
     if (refSeperator.current) {
       observer.observe(refSeperator.current);
     }
 
     return () => {
       observer.disconnect();
     };
   }, []);

  const Seperator = () => {
    return (
      <div  className="aboutme__arrows-seperator">
        <svg
          width="1200px"
          height="100px"
          viewBox={`0 0 ${1200} ${100}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Arrow
            x1={dimensions.width*-0.1}
            y1={dimensions.height*0.55}
            length={dimensions.width * 0.60}
            withCircles
            
            color="var(--font-color-light)"
            strokeWidth={2}
            animation
          />
          <Arrow
            x1={dimensions.width*-0.1}
            y1={dimensions.height*0.15}
            length={dimensions.width * 0.25}
            withCircles
            
            color="var(--font-color-light)"
            strokeWidth={2}
            animation
          />
          <Arrow
            x1={dimensions.width*-0.1}
            y1={dimensions.height*0.35}
            length={dimensions.width * 0.4}
            withCircles
            
            color="var(--font-color-dark)"
            strokeWidth={2}
            animation
          />
          <Arrow
            x1={dimensions.width*0.5}
            y1={dimensions.height*0.1}
            length={dimensions.width * 0.3}
            withCircles
            
            color="var(--font-color-dark)"
            strokeWidth={2}
            animation
          />
          <Arrow
            x1={dimensions.width*0.9}
            y1={dimensions.height*0.55}
            
            length={dimensions.width * 0.5}
            withCircles
            color="var(--font-color-light)"
            strokeWidth={2}
          />
          <Arrow
            x1={dimensions.width*0.75}
            y1={dimensions.height*0.85}
            
            length={dimensions.width * 0.5}
            withArrow
            color="var(--font-color-dark)"
            strokeWidth={2}
          />
          <Arrow
            x1={dimensions.width*-0.1}
            y1={dimensions.height*0.76}
            length={dimensions.width * 0.25}
            withArrow
            color="var(--font-color-light)"
            strokeWidth={2}
            dashed
          />
       
          <Circle
            x1={dimensions.width*0.6}
            y1={dimensions.height*0.25}
            radius={dimensions.width * 0.025}
            color="var(--font-color-dark)"
            dashed
            strokeWidth={2}
            animation
          />
        </svg>
      </div>
    );
  };
  return (
    <>
    <section ref={refAboutMe} className="aboutme">
      <h2 className="aboutme__headline">
      Herzblut. <span className="aboutme__headline--red">Leidenschaft. </span>
        Entwicklung.
      </h2>

      <div className="aboutme__container">
        <div className="aboutme__introduction">
          <div className="aboutme__text">
          <p>
            Im Jahr 2019 entdeckte ich meine Begeisterung für die Welt der
            Informatik. Mein Einstieg in die Programmierung begann mit
            Handelsalgorithmen in MQL4, mit dem Ziel, verschiedene
            Handelsstrategien auf dem Devisenmarkt zu entwickeln, um damit positive Renditen zu erzielen.
            Dabei faszinierte mich nicht nur die
            technische Umsetzung, sondern auch die Herausforderung, Algorithmen
            effizient und präzise zu gestalten.
          </p>
          <img className="aboutme__image" src={mql4} ></img>
          </div>
          <p>
            Diese Faszination für das Programmieren motivierte mich dazu, ein
            Informatikstudium zu beginnen. Während meines Studiums erweiterte
            ich mein Wissen in verschiedenen Programmiersprachen und vertiefte
            mich in die Softwareentwicklung, von der objektorientierten
            Programmierung bis hin zur Entwicklung komplexer Webanwendungen.
            Neben der technischen Expertise lernte ich, wie wichtig Teamarbeit,
            agile Methoden und strukturiertes Projektmanagement für die
            erfolgreiche Umsetzung von Softwareprojekten sind.
          </p>
          <div className="aboutme__text">
          <img className="aboutme__image" src={laptop} ></img>
          <p>
            Mein Ziel ist es, mich kontinuierlich weiterzuentwickeln und
            innovative Softwarelösungen zu gestalten, die einen echten Mehrwert
            bieten. Ich lege besonderen Wert auf sauberen, gut strukturierten
            Code und nutze moderne Technologien, um skalierbare und effiziente
            Anwendungen zu entwickeln. Dabei begeistert mich nicht nur die
            Technik selbst, sondern auch die Möglichkeit, mit meiner Arbeit
            Menschen und Unternehmen in ihrer digitalen Transformation zu
            unterstützen und nachhaltige Lösungen zu schaffen.
          </p>
          
          </div>
        </div>
        
        <section className="aboutme__skills">
          <h2 className="aboutme__headline">
            Meine <span className="aboutme__headline--red">Fähigkeiten</span>
          </h2>
          <ul className="aboutme__skills-list">
            <li className="aboutme__skills-item">
              <strong>Programmiersprachen</strong>
              <span>Java, JavaScript, Kotlin, PHP, Python</span>
            </li>
            <li className="aboutme__skills-item">
              <strong>Frontend</strong>
              <span>Angular, Bootstrap, CSS (SCSS), HTML, React</span>
            </li>
            <li className="aboutme__skills-item">
              <strong>Backend</strong>
              <span>Express, Node.js</span>
            </li>
            <li className="aboutme__skills-item">
              <strong>Datenbanken</strong>
              <span>MongoDB, MySQL</span>
            </li>
            <li className="aboutme__skills-item">
              <strong>Tools</strong>
              <span>
                Git, IntelliJ, Unity, Visual Studio, Visual Studio Code
              </span>
            </li>
            <li className="aboutme__skills-item">
              <strong>Design</strong>
              <span>Adobe XD, Adobe Illustrator, Figma</span>
            </li>
            <li className="aboutme__skills-item">
              <strong>Projektmanagement</strong>
              <span>Jira, Kanban, MS Teams, Trello</span>
            </li>
          </ul>
        </section>
      </div>
      
      
    </section>
    <div ref={refSeperator}  className="aboutme__seperator">
    <Seperator />
    </div>
    </>
  );
};

export default AboutMe;
