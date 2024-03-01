import '../App.css';
import React, { useState, useContext } from "react";
import img_kugelbahn from '../images/Kugelbahn.JPG'
import img_filmbibliothek from '../images/Filmbibliothek/Filmbibliothek.JPG'
import img_vc from '../images/VC/SSP.JPG'
import img_yoga from '../images/Yoga.JPG'
import img_gameDev from '../images/GameDev/GameDev.JPG'
import { ExpandContext } from "../context/context";
import Blob from '../images/Blob.svg';
const id_Filmbibliothek = "Filmbibliothek"
const id_kugelbahn = "Kugelbahn";
const id_SSP = "SSP"
const id_Yoga = "Yoga"
const id_GameDev = "GameDev"

function Section() {
    
    const [clickedFilm, setClickedFilm] = useState(true);
    const [clickedKugelbahn, setClickedKugelbahn] = useState(false);
    const [clickedSSP, setClickedSSP] = useState(false);
    const [clickedYoga, setClickedYoga] = useState(false);
    const [clickedGameDev, setClickedGameDev] = useState(false);
    const { id,setID } = useContext(ExpandContext);
    function handleClick(test) {
        /*if(test == id){
        
        }else{
          setID(test)
          setShow(true)
          
        }*/

        setID(test)
        if (test == id_SSP) {
            setClickedSSP(true);
        } else {
            setClickedSSP(false);
        }
        if (test == id_kugelbahn) {
            setClickedKugelbahn(true);
        } else {
            setClickedKugelbahn(false);
        } 
        if (test == id_Filmbibliothek) {
            setClickedFilm(true);
        } else {
            setClickedFilm(false);
        }
        if (test == id_Yoga) {
            setClickedYoga(true);
        } else {
            setClickedYoga(false);
        }
        if (test == id_GameDev) {
            setClickedGameDev(true);
        } else {
            setClickedGameDev(false);
        }
    }
    return(
        <>
        <h2 id='project' className='project_title'>Projekte</h2>   
        {/*<svg id="Ebene_3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2981.53 879.57"
        style={{position:"absolute",zIndex:"-1",width:"170%",fill:"green",left:"-300px"}}>
       
        <path d="m185.46,8.19c222.98-64.17,517,271.67,902,218.67s699.56-167,991.78-14,396.22,251,684.22,139,321.56,328.33-87.22,269.67-1472.78,287.67-1847.28,256S71.84,718.37,8.46,501.85C-28.37,376.02,59.47,44.44,185.46,8.19Z"/>
        </svg> 
        <svg id="NeuronalesNetz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1066 933" style={{fill:"#651fff",stroke:"#651fff",position:"absolute",width:"1000px",right:"-400px",zIndex:"-2",rotate:"180deg"}} >
        <g id="Linie"><polygon className="cls-1" points="7.5 482.5 154.5 649.5 64.5 685.5 7.5 482.5"/><polygon className="cls-2" points="142.5 422.5 198.5 262.5 76.5 295.5 7.5 482.5 142.5 422.5"/><polygon class="cls-2" points="154.5 649.5 142.5 422.5 294.5 505.5 154.5 649.5"/><polygon class="cls-2" points="307.5 358.5 142.5 422.5 294.5 505.5 307.5 358.5"/><polygon class="cls-2" points="198.5 262.5 307.5 358.5 375.5 216.5 198.5 262.5"/><polygon class="cls-2" points="141.5 134.5 198.5 262.5 76.5 295.5 141.5 134.5"/><polygon class="cls-2" points="375.5 216.5 319.5 12.5 141.5 134.5 375.5 216.5"/><line class="cls-2" x1="142.5" y1="422.5" x2="76.5" y2="295.5"/><polygon class="cls-2" points="375.5 216.5 509.5 37.5 319.5 12.5 375.5 216.5"/><polygon class="cls-2" points="582.5 216.5 509.5 37.5 375.5 216.5 582.5 216.5"/><polygon class="cls-2" points="825.5 128.5 509.5 37.5 582.5 216.5 825.5 128.5"/><polygon class="cls-2" points="475.5 358.5 582.5 216.5 375.5 216.5 475.5 358.5"/><polygon class="cls-2" points="307.5 358.5 475.5 358.5 398.5 469.5 307.5 358.5"/><polygon class="cls-2" points="294.5 505.5 398.5 469.5 362.5 628.5 294.5 505.5"/><polygon class="cls-2" points="64.5 685.5 198.5 831.5 154.5 649.5 64.5 685.5"/><polygon class="cls-2" points="319.5 769.5 362.5 628.5 154.5 649.5 319.5 769.5"/><polygon class="cls-2" points="198.5 831.5 319.5 769.5 433.5 920.5 198.5 831.5"/><polygon class="cls-2" points="475.5 757.5 319.5 769.5 433.5 920.5 475.5 757.5"/><polygon class="cls-2" points="362.5 628.5 475.5 757.5 551.5 530.5 362.5 628.5"/><polygon class="cls-2" points="398.5 469.5 551.5 530.5 475.5 358.5 398.5 469.5"/><polygon class="cls-2" points="725.5 399.5 582.5 216.5 475.5 358.5 725.5 399.5"/><polygon class="cls-2" points="551.5 530.5 725.5 399.5 750.5 580.5 551.5 530.5"/><polygon class="cls-2" points="917.5 333.5 825.5 128.5 582.5 216.5 917.5 333.5"/><polygon class="cls-2" points="725.5 399.5 917.5 333.5 1053.5 456.5 725.5 399.5"/><polygon class="cls-2" points="750.5 580.5 1053.5 456.5 904.5 685.5 750.5 580.5"/><polygon class="cls-2" points="551.5 530.5 700.5 710.5 750.5 580.5 551.5 530.5"/><polygon class="cls-2" points="904.5 685.5 700.5 710.5 799.5 882.5 904.5 685.5"/><polygon class="cls-2" points="475.5 757.5 700.5 710.5 616.5 895.5 475.5 757.5"/><polyline class="cls-2" points="433.5 920.5 616.5 895.5 799.5 882.5"/></g><g id="Kugel"><circle class="cls-1" cx="362.5" cy="628.5" r="12.5"/><circle class="cls-1" cx="475.5" cy="757.5" r="10"/><circle class="cls-1" cx="700.5" cy="710.5" r="12.5"/><circle class="cls-1" cx="616.5" cy="895.5" r="7.5"/><circle class="cls-1" cx="799.5" cy="882.5" r="12.5"/><circle class="cls-1" cx="904.5" cy="685.5" r="7.5"/><circle class="cls-1" cx="1053.5" cy="456.5" r="12.5"/><circle class="cls-1" cx="433.5" cy="920.5" r="12.5"/><circle class="cls-1" cx="319.5" cy="769.5" r="7.5"/><circle class="cls-1" cx="198.5" cy="831.5" r="12.5"/><circle class="cls-1" cx="294.5" cy="505.5" r="12.5"/><circle class="cls-1" cx="154.5" cy="649.5" r="7.5"/><circle class="cls-1" cx="64.5" cy="685.5" r="10"/><circle class="cls-1" cx="307.5" cy="358.5" r="7.5"/><circle class="cls-1" cx="142.5" cy="422.5" r="10"/><circle class="cls-1" cx="76.5" cy="295.5" r="12.5"/><circle class="cls-1" cx="7.5" cy="482.5" r="7.5"/><circle class="cls-1" cx="198.5" cy="262.5" r="10"/><circle class="cls-1" cx="141.5" cy="134.5" r="7.5"/><circle class="cls-1" cx="375.5" cy="216.5" r="12.5"/><circle class="cls-1" cx="509.5" cy="37.5" r="7.5"/><circle class="cls-1" cx="319.5" cy="12.5" r="12.5"/><circle class="cls-1" cx="398.5" cy="469.5" r="12.5"/><circle class="cls-1" cx="475.5" cy="358.5" r="7.5"/><circle class="cls-1" cx="582.5" cy="216.5" r="12.5"/><circle class="cls-1" cx="825.5" cy="128.5" r="10"/><circle class="cls-1" cx="551.5" cy="530.5" r="10"/><circle class="cls-1" cx="725.5" cy="399.5" r="12.5"/><circle class="cls-1" cx="917.5" cy="333.5" r="7.5"/><circle class="cls-1" cx="750.5" cy="580.5" r="10"/></g>
        </svg>*/}
      
        <div className='project_showcase'>
        
        <a href="#projectHeadline" className='project_showcase_box' onClick={() => handleClick(id_Filmbibliothek)} style={{ filter: clickedFilm ? "brightness(100%)" : "brightness(50%)"}} >
        {/* <img className='project_showcase_image' style={{ filter: clickedFilm ? "brightness(100%)" : "brightness(50%)"}} 
        src={img_filmbibliothek}></img> */}
        <p className='project_showcase_text' >Grundlagen Informatik</p>
        </a>

        <a href="#projectHeadline" className='project_showcase_box' onClick={() => handleClick(id_SSP)} style={{ filter: clickedSSP ? "brightness(100%)" : "brightness(50%)"}} >
       {/*  <img className='project_showcase_image' style={{ filter: clickedSSP ? "brightness(100%)" : "brightness(50%)"}} 
        src={img_vc}></img> */}
        <p className='project_showcase_text'>Visual Computing I</p>
        </a>
        
        <a href="#projectHeadline" className='project_showcase_box' onClick={() => handleClick(id_Yoga)} style={{ filter: clickedYoga ? "brightness(100%)" : "brightness(50%)"}}>
        {/* <img className='project_showcase_image' style={{ filter: clickedYoga ? "brightness(100%)" : "brightness(50%)"}} 
        src={img_yoga}></img> */}
        <p className='project_showcase_text txt-center'>Web Development</p>
        </a>

        <a href="#projectHeadline" className='project_showcase_box' onClick={() => handleClick(id_kugelbahn)} style={{ filter: clickedKugelbahn ? "brightness(100%)" : "brightness(50%)"}}>
        {/* <img className='project_showcase_image' style={{ filter: clickedKugelbahn ? "brightness(100%)" : "brightness(50%)"}} 
        src={img_kugelbahn}></img> */}
        <p className='project_showcase_text'>Visual Computing II</p>
        </a>

        <a href="#projectHeadline" className='project_showcase_box' onClick={() => handleClick(id_GameDev)} style={{ filter: clickedGameDev ? "brightness(100%)" : "brightness(50%)"}}>
        {/* <img className='project_showcase_image' style={{ filter: clickedGameDev ? "brightness(100%)" : "brightness(50%)"}} 
        src={img_gameDev}></img> */}
        <p className='project_showcase_text'>Game Development</p>
        </a>

        </div>
     
        </>
    );
}
export default Section;