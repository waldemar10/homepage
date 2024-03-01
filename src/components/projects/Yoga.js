import React from "react";
import "../../styles/projectStyles.css";
import video from "../../videos/Yoga.mp4";
import thumbnail from "../../images/Yoga.JPG";
function Yoga() {

  return (
    <div>
    
        <div className="project_box">
          
          <div className="project_description">
       
              Die Aufgabe war es, eine Website zum Thema
              Gesundheit zu erstellen. Wir entschieden uns für Yoga, da es die Gesundheit
              durch Bewegung und Dehnung fördert und die spirituellen Übungen
              das geistliche Wohlbefinden stärken.
              <div className="project_subheader">Vorgehensweise</div>
              <br></br>
              Wir erstellten zunächst ein Leitbild mit Hilfe von Mind Mapping.
              Danach leiteten wir 4 Entwurfskritierien ab, die für das
              Unternehmen stimmig sein sollen. Die Kritierien waren:
            
            <ul className="project_list">
              <li>Freundlich</li>
              <li>Akkurat</li>
              <li>Effektiv</li>
              <li>Sicher</li>
            </ul>

          
              Danach erstellten wir ein Moodboard, um eine erste Vorstellung
              unserer Website zu erhalten. Ich erstellte dann ein Logo mit Hilfe
              von Kreisen. Das Logo soll sportlich und spirituell wirken und gut
              zu Yoga passen.
              <br></br>
              Anschließend erstellten wir eine Persona, um ein Bild von unserer
              Zielgruppe zu haben. Unser Ziel war es, junge Menschen zu zeigen,
              wie sie ihr Leben mit Yoga verbessern können. Danach erstellten
              wir ein Mock-up in Adobe XD, um besprachen unser Design mit dem
              Professor. Nach dem fertigstellen des Mock-ups gingen wir über,
              die Website zu programmieren.
            </div>
            <video
              controls
              className="project_video"
              src={video}
              poster={thumbnail}
            ></video>
            
   
          
        </div>
     
    </div>
  );
}
export default Yoga;
