import React, { useState } from "react";
import "../../styles/projects.css";
import video from "../../videos/GameDev.mp4";
import thumbnail from "../../images/GameDev/GameDev.JPG";
import imgMachineEmpty from "../../images/GameDev/MachineEmpty.JPG";
import imgProductionTime from "../../images/GameDev/ProductionTime.JPG";
import imgUnlockMachine from "../../images/GameDev/UnlockMachine.JPG";
import imgUpgradeMenu from "../../images/GameDev/UpgradeMenu.JPG";

import { Unity, useUnityContext } from "react-unity-webgl";

function GameDev() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "gameBuild/Build/WebBuild.loader.js",
    dataUrl: "gameBuild/Build/webgl.data",
    frameworkUrl: "gameBuild/Build/build.framework.js",
    codeUrl: "gameBuild/Build/build.wasm",
  });

  const [loadGame, setLoadGame] = useState(false);

  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
          <p>
            {" "}
            Im Modul "Game Development" musste jede Gruppe ein eigenes Spiel
            erstellen. Meine Gruppe entschied sich für ein Point-And-Click
            Spiel. Die Gruppe wurde in ein Development (2) und ein Designer Team
            (3) aufgeteilt. Ich war Teil des Development-Teams.
          </p>
          <h4>Die Spielbeschreibung:</h4>
          <q>
            PinkPanda Interactive stellt Ihnen hiermit CinemaCraze vor. Es
            handelt sich um ein Point-and-Click-Spiel, bei dem der Spieler unter
            Zeitdruck die Bestellungen seiner Kunden erfüllen muss. Der Spieler
            arbeitet in einem Weltraum-Kino, das von vielen Alien-Kunden besucht
            wird. Wenn der Spieler zu viele Kunden verärgert, verliert er. Um
            sein Leben im Kino zu erleichtern, hat der Spieler die Möglichkeit,
            Upgrades zu kaufen. Mit den Upgrades kann der Spieler schneller die
            Bestellungen abarbeiten und mehr Geld verdienen.
          </q>
          <h4>Steuerung</h4>
          <p>
            A / Linke Pfeiltaste: Sicht auf die Kunden
            <br />
            D / Rechte Pfeiltaste: Sicht auf die Maschinen
            <br />
            ESC: Pause Menü
            <br />
            P: Pause
            <br />
            <i>Maschinen:</i>
            <br />
            Maustaste Links: +1 von jeweiligem Item (nach Animation)
            <br />
            Maustaste Rechts: -1 von jeweiligem Item (sofort)
            <br />
            <i>Kunden:</i>
            <br />
            Maustaste Links: Bestellung wird dem Kunden übergeben (auch wenn
            diese nicht vollständig ist)
          </p>
        </div>
        <h3>Video</h3>
        <div className="project-video">
          <video controls src={video} poster={thumbnail}></video>
        </div>
      </div>

      <div className="project-box">
        <div className="project-description">
          <h3>Spielmechaniken</h3>
          <p>
            <strong>Produktion an den Maschinen</strong>
            <br />
            Jede Maschine braucht eine gewisse Produktionszeit, um das Produkt
            zu erstellen. Der Spieler muss daher warten, bis sein gewünschtes
            Produkt fertig wird. Die Produktionsgeschwindigkeit ist individuell
            für jede Maschine, z.B. lassen sich Nachos langsamer als Soda
            produzieren. Die Produktionsgeschwindigkeit lässt sich durch
            Upgrades verbessern.
            <br />
            <br />
            <strong>Auffüllen der Maschinen</strong>
            <br />
            Die Maschine hat eine bestimmte Kapazität. Die Menge des Produkts
            reduziert sich bei jeder Anwendung. Wenn die Maschine leer ist, muss
            der Spieler selbst die Maschine befüllen. Das tut der Spieler, indem
            er auf den Button „Auffüllen“ klickt. Danach braucht die Maschine
            eine gewisse Zeit, um aufgefüllt zu werden. Die Füllgeschwindigkeit
            lässt sich durch Upgrades verbessern.
            <br />
            <br />
            <strong>Freikaufen der Maschinen</strong>
            <br />
            Am Anfang besitzt der Spieler keine Maschinen. Er kann die erste
            Maschine kostenlos kaufen. Dabei muss er auf den Button „Kaufen“
            klicken. Die Kundenanfragen begrenzen sich auf die freigekauften
            Maschinen, z.B. wenn man nur die Popcornmaschine besitzt, kommen nur
            Kunden, die Popcorn möchten. Die nächste Maschine kostet 100 $, die
            dritte und damit letzte kostet 250 $. Wenn der Spieler zu wenig Geld
            hat, um die zweite oder dritte Maschine zu kaufen, wird der „Kaufen“
            Button mit einer roten Füllfarbe hervorgehoben.
          </p>
        </div>

        <div className="project-image-box">
          <figure className="project-figure">
            <img src={imgProductionTime} alt="Beschriftung" />
            <figcaption> Produktionszeit</figcaption>
          </figure>
          <figure className="project-figure">
            <img src={imgUnlockMachine} alt="Beschriftung" />
            <figcaption>Maschinen freikaufen</figcaption>
          </figure>
          <figure className="project-figure">
            <img src={imgMachineEmpty} alt="Beschriftung" />
            <figcaption> Maschine leer</figcaption>
          </figure>
        </div>
      </div>

      <div className="project-box">
        <figure className="project-figure">
          <img src={imgUpgradeMenu} alt="Beschriftung" />
          <figcaption>Upgrade menu</figcaption>
        </figure>

        <div className="project-description">
          <h3>Upgraden der Maschinen</h3>
          <p>
            Der Spieler erhält für jede erfolgreiche Bestellung Geld. Mit dem
            Geld kann der Spieler Upgrades für seine Maschinen kaufen. Die
            Upgrades haben 3 Stufen. Die letzte Stufe ist die mächtigste und
            teuerste Stufe. Dies ermöglicht z. B. ein sofortiges Erstellen der
            Produkte oder ein sofortiges Befüllen der Maschine. Das spart dem
            Spieler Zeit bei der Zubereitung der Bestellungen und ermöglicht dem
            Spieler, weiter im Spiel voranzukommen.
            <br />
            <br />
            Das Upgrade-Menü ist über einen Button auf der Trennwand hinter den
            Maschinen zu erreichen. Bei einem erfolgreichen Kauf eines Upgrades
            ertönt ein Ton, der den erfolgreichen Kauf des Upgrades bestätigt.
            Danach wird die nächste Stufe des Upgrades angezeigt. Falls der
            Spieler die letzte Stufe erfolgreich gekauft hat, wird der Text des
            Buttons zu „Fertig“ und farblich gekennzeichnet. Der Spieler kann
            den Button dann nicht mehr betätigen und ist fertig mit dieser
            Upgrade-Reihe.
            <br />
            <br />
            Wenn der Spieler mit unzureichendem Geld ein Upgrade versucht zu
            kaufen, ertönt ein Ton, der den erfolglosen Kauf des Upgrades
            bestätigt. Der Button des Upgrades wird für eine Sekunde rot
            hervorgehoben.
            <br />
          </p>
          <div></div>
        </div>
      </div>

      <div id="unity-game" className="project-box">
        <h3>Spiel im Browser spielen</h3>
        {!loadGame && (
          <button className="project-button" onClick={() => setLoadGame(true)}>
            Starten
          </button>
        )}
        {loadGame && !isLoaded && (
          <p>Lade Spiel... {Math.round(loadingProgression * 100)}%</p>
        )}
        {loadGame && (
          <Unity
            unityProvider={unityProvider}
            id="unity-container"
            style={{ visibility: isLoaded ? "visible" : "hidden" }}
          />
        )}
      </div>
    </div>
  );
}
export default GameDev;
