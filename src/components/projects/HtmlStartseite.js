import React from 'react';
import { Node,Interweave,InterweaveProps } from 'interweave';

function HtmlStartseite() {

    return (
        <Interweave content='<!DOCTYPE html>

        <html lang="de" xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
            <title>Erlebe Yoga in Lippstadt</title>
            <link rel="stylesheet" href="css/StyleSheet.css" />
            <link rel="stylesheet" href="css/all.css">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
            <script src="JavaScriptSheet.js"></script>
            
        </head>
        <body  class="body-bg-darkmode">
          
            <header>
                <a id="anker"><img id="imgStart" class="img_spiegeln" src="images/YogaStartscreen.png" /></a>
                <div class="nav_pos flex">
                    <div class="divAbstandR05"></div>
                    <div class="navbar">
                        <a class="linkNav color-white" href="kategorie.html">Kurse</a>
                    </div>
                    <div class="navbar">
                        <a class="linkNav color-white" href="kursplan.html">Kursplan</a>
                    </div>
                    <div class="navbarLogo">
                        <a href="startseite.html">
                            <svg id="Abstraktes_Logo"  class="logo filter_blur logo_fill" data-name="Abstraktes Logo" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 170.0 300.0">
                                <path id="logo_rechts"
                                 d="M171,85c0-.9-.12-3.07-.32-5.17-.26-2.63-.66-5.16-.66-5.16v.78s.07,1.79.07,2.69A51.57,51.57,0,0,1,119.5,129.7a8.27,8.27,0,0,1-1,.12c-9.68.52-20.16,1.22-30.94,10.32-6.84,5.77-15.45,14.15-19,28.44-.41,1.65-.88,4.09-1.14,5.91A42.68,42.68,0,0,0,67,179.4a34.09,34.09,0,0,1,9-6.53,40.34,40.34,0,0,1,6.84-2.27,24.61,24.61,0,0,1,5.41-.63c7.81-.22,14.61.57,31.55-6.3,11.81-4.78,28-15.43,38.25-31.74A87.71,87.71,0,0,0,166.71,114a88.69,88.69,0,0,0,3.45-14.28A71.11,71.11,0,0,0,171,85Z" transform="translate(-28.93 -16.77)"/>
                                 <path id="logo_unten" d="M82.87,181.4c-25.76,8.27-39.24,38.06-30.11,66.54,5.44,16.94,17.65,29.6,32.09,35.34A32.11,32.11,0,0,1,68.67,264.5c-5.66-17.63,7.82-37.72,26.81-43.81A20.63,20.63,0,1,0,82.87,181.4Z" transform="translate(-28.93 -16.77)"/>
                                 <path id="logo_links" d="M57,161.08c.26-1.81.73-4.26,1.15-5.9,3.58-14.3,12.18-22.68,19-28.45A40,40,0,0,1,94.76,118a51.57,51.57,0,0,1,2-100.69l.83-.54C74.59,19,58.22,32.33,48.23,44.59A84,84,0,0,0,35.62,65.43c-1.1,2.87-2.17,5.65-3,8.36A82.44,82.44,0,0,0,29.91,86c-2.86,19.37,1.42,33,1.42,33a89.86,89.86,0,0,0,2.6,8.81,81.28,81.28,0,0,0,23,34.15A3.86,3.86,0,0,0,57,161.08Z" transform="translate(-28.93 -16.77)"/>
                                 <circle id="logo_kopf" cx="78.7" cy="73.57" r="20.63"/></svg>
                                </a>
                    </div>
                    <div class="navbar">
                        <a class="linkNav color-white" href="Kontaktformula.html"> Kontakt</a>
                    </div>
                    <div class="navbar"><a class="linkNav color-white" href="überuns.html">Über uns</a></div>
                    <div class="divAbstandR6"></div>
        
                </div>
                <div class="responsive_navbar">
                    <div class="logo_responsive">
                        <a href="startseite.html">
                            <svg id="Abstraktes_Logo"  class="logo filter_blur logo_fill" data-name="Abstraktes Logo" xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 170.0 300.0">
                                <path id="logo_rechts"
                                 d="M171,85c0-.9-.12-3.07-.32-5.17-.26-2.63-.66-5.16-.66-5.16v.78s.07,1.79.07,2.69A51.57,51.57,0,0,1,119.5,129.7a8.27,8.27,0,0,1-1,.12c-9.68.52-20.16,1.22-30.94,10.32-6.84,5.77-15.45,14.15-19,28.44-.41,1.65-.88,4.09-1.14,5.91A42.68,42.68,0,0,0,67,179.4a34.09,34.09,0,0,1,9-6.53,40.34,40.34,0,0,1,6.84-2.27,24.61,24.61,0,0,1,5.41-.63c7.81-.22,14.61.57,31.55-6.3,11.81-4.78,28-15.43,38.25-31.74A87.71,87.71,0,0,0,166.71,114a88.69,88.69,0,0,0,3.45-14.28A71.11,71.11,0,0,0,171,85Z" transform="translate(-28.93 -16.77)"/>
                                 <path id="logo_unten" d="M82.87,181.4c-25.76,8.27-39.24,38.06-30.11,66.54,5.44,16.94,17.65,29.6,32.09,35.34A32.11,32.11,0,0,1,68.67,264.5c-5.66-17.63,7.82-37.72,26.81-43.81A20.63,20.63,0,1,0,82.87,181.4Z" transform="translate(-28.93 -16.77)"/>
                                 <path id="logo_links" d="M57,161.08c.26-1.81.73-4.26,1.15-5.9,3.58-14.3,12.18-22.68,19-28.45A40,40,0,0,1,94.76,118a51.57,51.57,0,0,1,2-100.69l.83-.54C74.59,19,58.22,32.33,48.23,44.59A84,84,0,0,0,35.62,65.43c-1.1,2.87-2.17,5.65-3,8.36A82.44,82.44,0,0,0,29.91,86c-2.86,19.37,1.42,33,1.42,33a89.86,89.86,0,0,0,2.6,8.81,81.28,81.28,0,0,0,23,34.15A3.86,3.86,0,0,0,57,161.08Z" transform="translate(-28.93 -16.77)"/>
                                 <circle id="logo_kopf" cx="78.7" cy="73.57" r="20.63"/></svg>
                                </a>
                    </div>
                    <div class="responive_nav bg-color_dark">
                        <a class="icon_burger_menu" onclick="myFunction()">
                            <img id="anker3" src="images/Hamburger.svg" />
                        </a>
        
                        <div id="social_links">
                            <a class="linkNav2" href="kategorie.html">Kurse</a>
                            <a class="linkNav2" href="kursplan.html">Kursplan</a>
                            <a class="linkNav2" href="Kontaktformula.html"> Kontakt</a>
                            <a class="linkNav2" href="überuns.html">Über uns</a>
                        </div>
                    </div>
                </div>
            </header>
           
                
                <div class="flex absolute start_text">
                    <div class="divAbstandL"></div>
                    <h1 class="text_startscreen_first text-align-right">
                        Erlebe Yoga<br />
                    
                    </h1>
                    <div class="divAbstandR"></div>
                </div>
                <div class="flex absolute start_text">
                    <div class="divAbstandL"></div>
                    <div class="flex-1-1-0">
                        <button type="button" onclick="location.href="zuhause.html";" class="margin-top_buttonStart buttonStart display_smartphone_none">
                            Entdecken
                        </button>
                    </div>
                    <div class="divAbstandR"></div>
                </div>
                <div class="flex absolute start_text responsive">
                    <div class="divAbstandL"></div>
                    <div class="flex centerContent">
                        <button type="button" onclick="location.href="zuhause.html";" class="margin-top buttonStart responsive">
                            Entdecken
                        </button>
                    </div>
                    <div class="divAbstandR"></div>
                </div>
               
            <div class="flex relative">
                <h2 class="h2_yoga_start" style="top:0vw;left:7.8vw;"> Yoga</h2>
                <p class="text_yoga_start" style="top:8vw;left:13vw;">stärkt den Geist</p>
                <p class="text_yoga_start" style="top:14vw;left:19.5vw;">reduziert Stress</p>
                <p class="text_yoga_start" style="top:20vw;left:26vw;">dehnt die Muskulatur</p>
                <p class="text_yoga_start" style="top:26vw;left:32.5vw;">verbessert dein<br />Selbstbewusstsein</p>
                <p class="text_yoga_start" style="top:34vw;left:39vw;">und es löst </p>
                <p class="text_yoga_start" style="top:40vw;left:45.5vw;">deine Blockaden</p>
                <p class="text_yoga_start" style="top:46vw;left:47.5vw;">und entfaltet</p>
                <p class="text_yoga_start" style="top:52vw;left:47.5vw;">dein wahres</p>
                <p class="text_yoga_start" style="top:58vw;left:44.2vw;">Potenzial</p>
                <!--Responsive Text-->
                <h2 class="h2_yoga_start_responsive">Yoga </h2>
                <p class="text_yoga_start_responsive" style="top:12vw;">stärkt den Geist</p>
                <p class="text_yoga_start_responsive" style="top:18vw">reduziert Stress</p>
                <p class="text_yoga_start_responsive" style="top:24vw">dehnt die Muskulatur</p>
                <p class="text_yoga_start_responsive" style="top:30vw">verbessert dein<br />Selbstbewusstsein</p>
                <p class="text_yoga_start_responsive" style="top:42vw;left:60vw;">und es löst </p>
                <p class="text_yoga_start_responsive" style="top:48vw;left:65vw;">deine Blockaden</p>
                <p class="text_yoga_start_responsive" style="top:54vw;left:68vw;">und entfaltet</p>
                <p class="text_yoga_start_responsive" style="top:60vw;left:71vw;">dein wahres</p>
                <p class="text_yoga_start_responsive" style="top:66vw;left:71vw;">Potenzial</p>
            </div>
            <img id="imgYoga1" src="images/YogaPos1.png" />
        
            <img id="imgYoga2" src="images/YogaPos2.png" />
            <img id="imgChakra" src="images/Chakras.svg" />
            <!--Text über den 3 Cards-->
            <p class="aKurse" style="text-align:center;margin-top:30px;">
                Probier es mit einem unserer Kurse selber aus.
            </p>
            <div class="flex centerContent responsive_card">
        
                <div id="flex_startscreen1" class="flexNormal" >
                    <img id="img_hathayoga" class="imgKursStart" onclick="location.href="hathayoga.html";"
                    onmouseover="showButtonLeft()" onmouseout="hideButtonLeft()" src="images/hathayoga.webp" />
                    <button onclick="location.href="hathayoga.html";" 
                    id="button_hatha" class="centerContent" type="button">Hatha Yoga</button>
                </div>
                <div id="flex_startscreen2" class="flexNormal">
                    <img id="img_vinyasayoga" class="imgKursStart" onclick="location.href="vinyasayoga.html";"
                    onmouseover="showButtonMid()" onmouseout="hideButtonMid()" src="images/VinyasaYoga.webp" />
                    <button onclick="location.href="vinyasayoga.html";" 
                    id="button_vinyasa" class="centerContent" type="button">Vinyasa Yoga</button>
                </div>
                <div id="flex_startscreen3"  class="flexNormal">
                    <img id="img_gutenmorgenyoga" class="imgKursStart" onclick="location.href="gutenmorgenyoga.html";" 
                    onmouseover="showButtonRight()" src="images/GutenMorgenYoga.webp" />
                    <button onclick="location.href="gutenmorgenyoga.html";" 
                    id="button_gutenmorgenyoga" class="centerContent" type="button">Guten Morgen Yoga</button>
                </div>
                
            </div>
        
            <!--Flex Content responsive-->
            <div class="flex_Normal_responsive">
                <img class="imgKursStart_responsive" src="images/HathaYoga.webp" />
        
            </div>
            <div class="flex_Normal_responsive">
                <button onclick="location.href="hathayoga.html";" class="bkursStart_responsive" type="button">Hatha Yoga</button>
            </div>
            <div class="flex_Normal_responsive">
                <img class="imgKursStart_responsive" src="images/VinyasaYoga.webp" />
        
            </div>
            <div class="flex_Normal_responsive">
                <button onclick="location.href="vinyasayoga.html";" class="bkursStart_responsive" type="button">Vinyasa Yoga</button>
            </div>
            <div class="flex_Normal_responsive">
                <img class="imgKursStart_responsive" src="images/gutenmorgenyoga.webp" />
        
            </div>
            <div class="flex_Normal_responsive">
                <button onclick="location.href="gutenmorgenyoga.html";" class="bkursStart_responsive" type="button">Guten Morgen Yoga</button>
            </div>
            <!--Text unter den 3 Cards-->
            <p class="aKurse" style="text-align:center;margin-top:20px;">
                Und noch mehr <a href="kategorie.html" class="color_light"><u>hier</u></a> zu finden.
            </p>
        
            <footer>
                <div class="flex_footer_mid_responsive">
                    <div>
                    <i class="fas fa-moon footer_mode_icon i_darkmode_icon" onclick="modeSwitch()"></i>
                    <i class="fas fa-sun footer_mode_icon i_darkmode_icon" onclick="modeSwitch()"></i>
                    </div>
                    <div class="footer_mode_icon">
                        <a href="#facebook"><i class="fab fa-facebook footer_mode_icon_abstand i_darkmode_icon_social"></i></a>
                        <a href="#instagram"><i class="fab fa-instagram footer_mode_icon_abstand i_darkmode_icon_social"></i></a>
                        <a href="#twitter"><i class="fab fa-twitter footer_mode_icon_abstand i_darkmode_icon_social"></i></a>
                    </div>
                   </div>
                <div class="flex_footer">
                    <div class="flex_footer_left">
                        <div class="flex align-vertical">
                            <div>
                        <a href="#anker"><i class="fas fa-angle-up i_arrow_icon"></i></a>
                    </div>
                        <span class="text_copyright">© Copyright 2022</span>
                    </div>
                    </div>
                    <div class="flex_footer_left_responsive">
                        <div class="flex align-vertical">
                            <div>
                        <a href="#anker3"><i class="fas fa-angle-up i_arrow_icon"></i></a>
                            </div>
                        <span class="text_copyright">© Copyright 2022</span>
                        </div>
                    </div>
                    <div class="flex_footer_mid">
                        <div class="flex centerContent">
                        <a><i class="fas fa-moon footer_mode_icon i_darkmode_icon" onclick="modeSwitch()" ></i></a>
                        <a><i class="fas fa-sun footer_mode_icon i_darkmode_icon"  onclick="modeSwitch()"></i></a>
                    </div>
                        
                    
                        <div class="footer_mode_icon">
                            <a href="#facebook"><i class="fab fa-facebook footer_mode_icon_abstand i_darkmode_icon_social"></i></a>
                            <a href="#instagram"><i class="fab fa-instagram footer_mode_icon_abstand i_darkmode_icon_social"></i></a>
                            <a href="#twitter"><i class="fab fa-twitter footer_mode_icon_abstand i_darkmode_icon_social"></i></a>
                        </div>
                        <a class="footpadding_right text_footer color_light"  href="#Impressum">Impressum</a>
                        <a class="footpadding_left text_footer color_light"  href="#Datenschutz">Datenschutz</a>
                    </div>
                    <div class="flex_footer_mid_responsive">
                    <a class="footpadding_right text_footer color_light"  href="#Impressum">Impressum</a>
        
                    <a class="footpadding_left text_footer color_light"  href="#Datenschutz">Datenschutz</a>
                </div>
                    <div class="flex_footer_right text_footer">
                        Yoga in Lippstadt<br />
                        Rixbecker Str. 29<br />
                        59555 Lippstadt<br />
                        Mo-Sa: 8-20 Uhr
                    </div>
                </div>
            </footer>
        </body>
        
        </html>' />
    );
}

export default HtmlStartseite;