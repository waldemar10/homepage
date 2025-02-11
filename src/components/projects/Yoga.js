import React from "react";

import moodboard from "../../images/YogaWebsite/Moodboard.jpg";
import persona from "../../images/YogaWebsite/Persona.jpg"

function Yoga() {
  return (
    <>
    <div className="project__content-box">
      <div className="project__box">
        <div className="project__description">
          <p>
            Das Ziel des Projekts war es, eine informative und ansprechende
            Website zum Thema Gesundheit zu entwickeln. Nach sorgfältiger
            Überlegung entschieden wir uns, den Schwerpunkt auf Yoga zu legen.
            Yoga ist nicht nur eine körperliche Aktivität, die durch Bewegung
            und Dehnung die körperliche Gesundheit fördert, sondern auch eine
            spirituelle Praxis, die das geistige Wohlbefinden stärkt und Stress
            abbaut. Unser Ziel war es, eine Website zu schaffen, die sowohl
            Anfänger als auch Fortgeschrittene anspricht und sie in ihrer
            Yoga-Praxis unterstützt.
          </p>
          <h3>Vorgehensweise</h3>
          <p style={{ marginBottom: "0" }}>
            Zu Beginn des Projekts erstellten wir mithilfe von Mindmapping ein
            umfassendes Leitbild, um die Kernaussagen und Ziele unserer Website
            klar zu definieren. Dies half uns, unsere Ideen zu strukturieren und
            die Richtung des Projekts festzulegen. Aus diesem Leitbild leiteten
            wir vier zentrale Entwurfskriterien ab, die unsere Vision für das
            Unternehmen und die Website widerspiegeln sollten:
          </p>
          <ul className="project__list">
            <li>
              <b>Freundlich</b>
            </li>
            <li>
              <b>Akkurat</b>
            </li>
            <li>
              <b>Effektiv</b>
            </li>
            <li>
              <b>Sicher</b>
            </li>
          </ul>
         
            <h3>Moodboard</h3>
            <p>
            Anschließend erstellten wir ein Moodboard, um visuelle Ideen und
            Stimmungen für die Gestaltung der Website zu sammeln. Dies half uns,
            eine klare Vorstellung davon zu entwickeln, wie die Website aussehen
            und sich anfühlen sollte.
            </p>
            <figure className="project__figure">
              <img src={moodboard}></img>
              <figcaption>
                Mehr Informationen im {" "}
                <a
                  href="https://miro.com/app/board/uXjVL05-EA0=/?share_link_id=668733502537"
                  target="_blank">
                  Miro board
                </a>
              </figcaption>
            </figure>
            <br></br>
            <h3>Logo</h3>
            <p>
            Um das Branding abzurunden, gestaltete ich ein passendes Logo, das
            aus Kreiselementen bestand. Das Logo sollte sowohl sportlich als
            auch spirituell wirken, um die Verbindung zwischen körperlicher
            Bewegung und geistigem Wohlbefinden zu unterstreichen, was ideal zu
            Yoga passt. 
            </p>
            <svg id="yoga-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300">
        
            <g >
              <path className="cls-1" d="M171,85c0-.9-.12-3.07-.32-5.17-.26-2.63-.66-5.16-.66-5.16l0,.78s.07,1.79.07,2.69A51.57,51.57,0,0,1,119.5,129.7a7.54,7.54,0,0,1-1,.12c-9.68.52-20.16,1.22-30.94,10.32-6.84,5.77-15.45,14.15-19,28.44-.41,1.65-.88,4.09-1.14,5.91a43.58,43.58,0,0,0-.46,4.91A34.12,34.12,0,0,1,76,172.87a40,40,0,0,1,6.84-2.27,24.21,24.21,0,0,1,5.41-.63c7.81-.22,14.61.57,31.55-6.3,11.81-4.78,28-15.43,38.25-31.74A87.85,87.85,0,0,0,166.71,114a88.84,88.84,0,0,0,3.45-14.28A71.64,71.64,0,0,0,171,85Z"/>
              <path className="cls-1" d="M82.87,181.4c-25.76,8.27-39.24,38.06-30.11,66.54,5.44,16.94,17.65,29.6,32.09,35.34A32.13,32.13,0,0,1,68.67,264.5c-5.66-17.63,7.82-37.72,26.81-43.81A20.63,20.63,0,0,0,82.87,181.4Z"/>
              <path className="cls-1" d="M57,161.08c.26-1.81.73-4.26,1.15-5.9,3.58-14.3,12.18-22.68,19-28.45A40,40,0,0,1,94.76,118a51.57,51.57,0,0,1,2-100.69l.83-.54c-23,2.19-39.37,15.56-49.36,27.82A83.76,83.76,0,0,0,35.62,65.43c-1.1,2.87-2.17,5.65-3,8.36A82.33,82.33,0,0,0,29.91,86c-2.86,19.37,1.42,33,1.42,33a89.9,89.9,0,0,0,2.6,8.81,81.34,81.34,0,0,0,23,34.15C57,161.64,57,161.37,57,161.08Z"/>
              <circle className="cls-1" cx="107.63" cy="90.34" r="20.63"/>
              </g>
              </svg>
            <br></br>
            <h3>Persona</h3>
            <p>
            Als nächster Schritt wurde eine Persona entwickelt, um
            die Zielgruppe besser zu verstehen und gezielt anzusprechen.
            Die Persona repräsentierte junge Erwachsene Frauen, die ein aktives
            Interesse daran haben, ihr Wohlbefinden zu verbessern und dabei eine
            gesunde Balance zwischen Körper und Geist zu finden.  
            </p>
            <figure className="project__figure">
              <img src={persona}></img>
              <figcaption>
                Persona
              </figcaption>
            </figure>
            <br></br>
            <h3>Mock-up</h3>
            <p>
            Auf Basis dieser Vorarbeiten wurde ein detailliertes Mock-up der Website in Figma erstellt. 
            Dieses
            Mock-up diente als visuelle Blaupause für das endgültige Design
            und half dabei, wichtige Elemente wie Layout, Farben und Typografie
            festzulegen. Nachdem fertigstellen des Mock-ups, fing die Programmierung der Website an. 
            </p>
            <br></br>
            <h3>Programmierung</h3>
            <p>
            Die Website wurde mit HTML, SCSS, JavaScript und PHP erstellt. 
            Es folgt den MVC (Model-View-Controller) Ansatz.
            Um die Website für verschiedene Bildschirmgrößen und Geräte
            zu optimieren, wurde das Design responsiv gestaltet.
            </p>
        </div>

      </div>
    </div>
    </>
  );
}
export default Yoga;
