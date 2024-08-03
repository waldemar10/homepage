import React from "react";
import video from "../../videos/Yoga.mp4";
import thumbnail from "../../images/Yoga.JPG";
function Yoga() {
  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
          Die Aufgabe war es, eine Website zum Thema Gesundheit zu erstellen.
          Wir entschieden uns für Yoga, da es die Gesundheit durch Bewegung und
          Dehnung fördert und die spirituellen Übungen das geistliche
          Wohlbefinden stärken.
          <div className="project-subheader">Vorgehensweise</div>
          Wir erstellten zunächst ein Leitbild mit Hilfe von Mind Mapping.
          Danach leiteten wir 4 Entwurfskritierien ab, die für das Unternehmen
          stimmig sein sollen. Die Kritierien waren:
          <ul className="project-list">
            <li>Freundlich</li>
            <li>Akkurat</li>
            <li>Effektiv</li>
            <li>Sicher</li>
          </ul>
          Danach erstellten wir ein Moodboard, um eine erste Vorstellung unserer
          Website zu erhalten. Ich erstellte dann ein Logo mit Hilfe von
          Kreisen. Das Logo soll sportlich und spirituell wirken und gut zu Yoga
          passen.
          <br></br>
          Anschließend erstellten wir eine Persona, um ein Bild von unserer
          Zielgruppe zu haben. Unser Ziel war es, junge Menschen zu zeigen, wie
          sie ihr Leben mit Yoga verbessern können. Danach erstellten wir ein
          Mock-up in Adobe XD, um besprachen unser Design mit dem Professor.
          Nach dem fertigstellen des Mock-ups gingen wir über, die Website zu
          programmieren.
        </div>
        <div className="project-subheader">Video</div>
        <div className="project-video">
          <video controls src={video} poster={thumbnail}></video>
        </div>
      </div>
    </div>
  );
}
export default Yoga;
