import React from "react";
import "../../styles/projectStyles.css";
import data from "../../data/projects.json";
import video from "../../videos/GameDev.mp4";
import thumbnail from "../../images/GameDev/GameDev.JPG";
import imgMachineEmpty from "../../images/GameDev/MachineEmpty.JPG";
import imgProductionTime from "../../images/GameDev/ProductionTime.JPG";
import imgUnlockMachine from "../../images/GameDev/UnlockMachine.JPG";
import imgUpgradeMenu from "../../images/GameDev/UpgradeMenu.JPG";
function GameDev() {
  return (
    <div>
    
       <div className="project_box">
          <div className="project_description">
            <div>
              Im Modul "Game Development" musste jede Gruppe ein eigenes Spiel
              erstellen. Meine Gruppe entschied sich für ein Point-And-Click
              Spiel. Wir teilten uns in ein Development (2) und ein Designer Team (3) ein. Ich
              war teil des Development Teams.
              <br />
              <br/>
              <strong>Unsere Spielbeschreibung:</strong>
              <br />
              <q>
                PinkPanda Interactive stellt Ihnen hiermit CinemaCraze vor. Es
                handelt sich um ein Point-and-Click-Spiel, bei dem der Spieler
                unter Zeitdruck die Bestellungen seiner Kunden erfüllen muss.
                Der Spieler arbeitet in einem Weltraum-Kino, das von vielen
                Alien-Kunden besucht wird. Wenn der Spieler zu viele Kunden
                verärgert, verliert er. Um sein Leben im Kino zu erleichtern,
                hat der Spieler die Möglichkeit, sich Upgrades zu kaufen. Mit
                den Upgrades kann der Spieler schneller die Bestellungen
                abarbeiten und sich mehr Geld verdienen.
              </q>
              <div className="project_subheader">Steuerung</div>
              A / Linke Pfeiltaste - Sicht auf die Kunden
              <br />
              D / Rechte Pfeiltaste - Sicht auf die Maschinen
              <br />
              ESC - Pause Menu
              <br />
              P - Pause
              <br />
              Maschinen:
              <br />
              Maustaste Links - +1 von jeweiligem Item (nach Animation)
              <br />
              Maustatse Rechts - -1 von jeweiligem Item (sofort)
              <br />
              Kunden:
              <br />
              Maustaste Links - Bestellung wird dem Kunden übergeben (auch wenn
              diese nicht vollständig ist)
            </div>
          </div>
          <video
            controls
            className="project_video"
            src={video}
            poster={thumbnail}
          ></video>
       </div>

       <div className="project_box">
        
          <div className="project_description">

            <div className="project_subheader">Spielmechaniken</div>
            <strong>Produktion an den Maschinen</strong> 
            <br />
            Jede Maschine braucht eine gewisse Produktionszeit, um das Produkt zu
            erstellen. Der Spieler muss daher warten, bis sein gewünschtes
            Produkt fertig wird. Die Produktionsgeschwindigkeit ist individuell
            für jede Maschine, z.B. lassen sich Nachos langsamer als Soda produzieren.
            Die Produktionsgeschwindigkeit lässt sich durch Upgrades verbessern.
            <br/>
            <br/>
            <strong>Auffüllen der Maschinen</strong> 
            <br />
            Die Maschine hat eine bestimmte Kapazität. Die Menge des Produkts
            reduziert sich bei jeder Anwendung. Wenn die Maschine leer ist, muss
            der Spieler selbst die Maschine befüllen. Das tut der Spieler, indem er
            auf den Button “Auffüllen” klickt. Danach braucht die Maschine eine
            vordefinierte Zeit, um aufgefüllt zu werden. Die Füllgeschwindigkeit
            lässt sich durch Upgrades verbessern.
            <br/>
            <br/>
            <strong>Freikaufen der Maschinen</strong> 
            <br />
            Am Anfang besitzt der Spieler keine Maschinen. Er kann die erste
            Maschine kostenlos kaufen. Dabei muss er auf den Button “Kaufen”
            klicken. Die Kundenanfragen begrenzen sich auf die freigekauften
            Maschinen, z.B. wenn man nur die Popcornmaschine besitzt, kommen
            nur Kunden, die Popcorn möchten. Die nächste Maschine kostet 100$,
            die dritte und damit letzte kostet 250$.
            Wenn der Spieler zu wenig Geld hat, um die zweite oder dritte Maschine
            zu kaufen, wird der “Kaufen” Button mit einer roten Füllfarbe
            hervorgehoben.
            
          </div>
            <div className="project_image_box" >

            
            <figure > 
              <img src={imgProductionTime} alt="Beschriftung" style={{ padding:"10px" }} />
              <figcaption  > Produktionszeit</figcaption>
            </figure>
            <figure>
              <img src={imgUnlockMachine} alt="Beschriftung" style={{ padding:"10px" }} />
              <figcaption  >Maschinen freikaufen</figcaption>
            </figure>
            <figure>
              <img src={imgMachineEmpty} alt="Beschriftung" style={{ padding:"10px" }} />
              <figcaption  > Maschine leer</figcaption>
            </figure>
            </div>
       
        </div>

        <div className="project_box">
       
           <div className="project_video" >
            <figure>
              <img src={imgUpgradeMenu} alt="Beschriftung" style={{ width: "90%" }} />
              <figcaption  >Upgrade menu</figcaption>
            </figure>
            
          </div>
          <div className="project_description">

            <div className="project_subheader">Upgraden der Maschinen</div>

            Der Spieler erhält für jede erfolgreiche Bestellung Geld. Mit dem Geld kann der Spieler
            Upgrades für seine Maschinen kaufen. Die Upgrades haben 3 Stufen. Die letzte Stufe ist die
            mächtigste und teuerste Stufe. Dies ermöglicht z. B. ein sofortiges Erstellen der Produkte
            oder ein sofortiges Befüllen der Maschine. Das spart dem Spieler Zeit bei der Zubereitung
            der Bestellungen und ermöglicht dem Spieler, weiter im Spiel voranzukommen.
            <br/>
            <br/>
            Das Upgrade-Menü ist über einen Button auf der Trennwand hinter den Maschinen zu
            erreichen. Bei einem erfolgreichen Kauf eines Upgrades, ertönt ein Ton, was den
            erfolgreichen Kauf des Upgrades bestätigt. Danach wird die nächste Stufe des Upgrades
            angezeigt. Falls der Spieler die letzte Stufe erfolgreich gekauft hat, wird der Text des Buttons
            zu “Fertig” und farblich gekennzeichnet. Der Spieler kann den Button dann nicht mehr
            betätigen und ist fertig mit dieser Upgrade-Reihe.
            <br/>
            <br/>
            Wenn der Spieler mit unzureichendem Geld ein Upgrade versucht zu kaufen, ertönt ein Ton,
            das den erfolglosen Kauf des Upgrades bestätigt. Der Button des Upgrades wird für eine
            Sekunde rot hervorgehoben.
            <br/>
            
            
          </div>
        
        </div>


     
    </div>
  );
}
export default GameDev;