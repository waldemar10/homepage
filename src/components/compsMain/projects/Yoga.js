import React from "react";
import video from "../../../videos/Yoga.mp4";
import thumbnail from "../../../images/WebDev/Yoga.JPG";
function Yoga() {
  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
          Das Ziel des Projekts war es, eine informative und ansprechende
          Website zum Thema Gesundheit zu entwickeln. Nach sorgfältiger
          Überlegung entschieden wir uns, den Schwerpunkt auf Yoga zu legen.
          Yoga ist nicht nur eine körperliche Aktivität, die durch Bewegung und
          Dehnung die körperliche Gesundheit fördert, sondern auch eine
          spirituelle Praxis, die das geistige Wohlbefinden stärkt und Stress
          abbaut. Unser Ziel war es, eine Website zu schaffen, die sowohl
          Anfänger als auch Fortgeschrittene anspricht und sie in ihrer
          Yoga-Praxis unterstützt.
          <div className="project-subheader">Vorgehensweise</div>
          Zu Beginn des Projekts erstellten wir mithilfe von Mindmapping ein
          umfassendes Leitbild, um die Kernaussagen und Ziele unserer Website
          klar zu definieren. Dies half uns, unsere Ideen zu strukturieren und
          die Richtung des Projekts festzulegen. Aus diesem Leitbild leiteten
          wir vier zentrale Entwurfskriterien ab, die unsere Vision für das
          Unternehmen und die Website widerspiegeln sollten:
          <ul className="project-list">
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
          Anschließend erstellten wir ein Moodboard, um visuelle Ideen und
          Stimmungen für die Gestaltung der Website zu sammeln. Dies half uns,
          eine klare Vorstellung davon zu entwickeln, wie die Website aussehen
          und sich anfühlen sollte. Um das Branding abzurunden, gestaltete ich
          ein passendes Logo, das aus Kreiselementen bestand. Das Logo sollte
          sowohl sportlich als auch spirituell wirken, um die Verbindung
          zwischen körperlicher Bewegung und geistigem Wohlbefinden zu
          unterstreichen, was ideal zu Yoga passt. Als nächster Schritt
          entwickelten wir eine Persona, um unsere Zielgruppe besser zu
          verstehen und gezielt anzusprechen. Unsere Persona repräsentierte
          junge Erwachsene, die ein aktives Interesse daran haben, ihr
          Wohlbefinden zu verbessern und dabei eine gesunde Balance zwischen
          Körper und Geist zu finden. Mit dieser Persona im Hinterkopf war es
          unser Ziel, eine Website zu gestalten, die jungen Menschen zeigt, wie
          sie durch Yoga ihr Leben auf positive Weise beeinflussen können. Auf
          Basis dieser Vorarbeiten erstellten wir ein detailliertes Mock-up der
          Website in Adobe XD. Dieses Mock-up diente uns als visuelle Blaupause
          für das endgültige Design und half uns, wichtige Elemente wie Layout,
          Farben und Typografie festzulegen. Nachdem das Mock-up fertiggestellt
          war, begannen wir mit der Programmierung der Website, wobei wir darauf
          achteten, dass die Umsetzung sowohl technisch als auch ästhetisch den
          im Vorfeld festgelegten Kriterien entsprach.
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
