import '../App.css';
import React from 'react';
import Matrix from './Matrix';
import svg_design from '../images/Design.svg'
import svg_gaming from '../images/Gaming.svg'
import svg_webdev from '../images/WebDev.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Startscreen() {

    return(
        <>
        
       
        
       {/* <Matrix /> */}
       {/* <svg id="NeuronalesNetz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1066 933" className='svgs' style={{fill:"#e91e63",stroke:"#e91e63",zIndex:"-3"}} >
        <g id="Linie"><polygon className="cls-1" points="7.5 482.5 154.5 649.5 64.5 685.5 7.5 482.5"/><polygon className="cls-2" points="142.5 422.5 198.5 262.5 76.5 295.5 7.5 482.5 142.5 422.5"/><polygon class="cls-2" points="154.5 649.5 142.5 422.5 294.5 505.5 154.5 649.5"/><polygon class="cls-2" points="307.5 358.5 142.5 422.5 294.5 505.5 307.5 358.5"/><polygon class="cls-2" points="198.5 262.5 307.5 358.5 375.5 216.5 198.5 262.5"/><polygon class="cls-2" points="141.5 134.5 198.5 262.5 76.5 295.5 141.5 134.5"/><polygon class="cls-2" points="375.5 216.5 319.5 12.5 141.5 134.5 375.5 216.5"/><line class="cls-2" x1="142.5" y1="422.5" x2="76.5" y2="295.5"/><polygon class="cls-2" points="375.5 216.5 509.5 37.5 319.5 12.5 375.5 216.5"/><polygon class="cls-2" points="582.5 216.5 509.5 37.5 375.5 216.5 582.5 216.5"/><polygon class="cls-2" points="825.5 128.5 509.5 37.5 582.5 216.5 825.5 128.5"/><polygon class="cls-2" points="475.5 358.5 582.5 216.5 375.5 216.5 475.5 358.5"/><polygon class="cls-2" points="307.5 358.5 475.5 358.5 398.5 469.5 307.5 358.5"/><polygon class="cls-2" points="294.5 505.5 398.5 469.5 362.5 628.5 294.5 505.5"/><polygon class="cls-2" points="64.5 685.5 198.5 831.5 154.5 649.5 64.5 685.5"/><polygon class="cls-2" points="319.5 769.5 362.5 628.5 154.5 649.5 319.5 769.5"/><polygon class="cls-2" points="198.5 831.5 319.5 769.5 433.5 920.5 198.5 831.5"/><polygon class="cls-2" points="475.5 757.5 319.5 769.5 433.5 920.5 475.5 757.5"/><polygon class="cls-2" points="362.5 628.5 475.5 757.5 551.5 530.5 362.5 628.5"/><polygon class="cls-2" points="398.5 469.5 551.5 530.5 475.5 358.5 398.5 469.5"/><polygon class="cls-2" points="725.5 399.5 582.5 216.5 475.5 358.5 725.5 399.5"/><polygon class="cls-2" points="551.5 530.5 725.5 399.5 750.5 580.5 551.5 530.5"/><polygon class="cls-2" points="917.5 333.5 825.5 128.5 582.5 216.5 917.5 333.5"/><polygon class="cls-2" points="725.5 399.5 917.5 333.5 1053.5 456.5 725.5 399.5"/><polygon class="cls-2" points="750.5 580.5 1053.5 456.5 904.5 685.5 750.5 580.5"/><polygon class="cls-2" points="551.5 530.5 700.5 710.5 750.5 580.5 551.5 530.5"/><polygon class="cls-2" points="904.5 685.5 700.5 710.5 799.5 882.5 904.5 685.5"/><polygon class="cls-2" points="475.5 757.5 700.5 710.5 616.5 895.5 475.5 757.5"/><polyline class="cls-2" points="433.5 920.5 616.5 895.5 799.5 882.5"/></g><g id="Kugel"><circle class="cls-1" cx="362.5" cy="628.5" r="12.5"/><circle class="cls-1" cx="475.5" cy="757.5" r="10"/><circle class="cls-1" cx="700.5" cy="710.5" r="12.5"/><circle class="cls-1" cx="616.5" cy="895.5" r="7.5"/><circle class="cls-1" cx="799.5" cy="882.5" r="12.5"/><circle class="cls-1" cx="904.5" cy="685.5" r="7.5"/><circle class="cls-1" cx="1053.5" cy="456.5" r="12.5"/><circle class="cls-1" cx="433.5" cy="920.5" r="12.5"/><circle class="cls-1" cx="319.5" cy="769.5" r="7.5"/><circle class="cls-1" cx="198.5" cy="831.5" r="12.5"/><circle class="cls-1" cx="294.5" cy="505.5" r="12.5"/><circle class="cls-1" cx="154.5" cy="649.5" r="7.5"/><circle class="cls-1" cx="64.5" cy="685.5" r="10"/><circle class="cls-1" cx="307.5" cy="358.5" r="7.5"/><circle class="cls-1" cx="142.5" cy="422.5" r="10"/><circle class="cls-1" cx="76.5" cy="295.5" r="12.5"/><circle class="cls-1" cx="7.5" cy="482.5" r="7.5"/><circle class="cls-1" cx="198.5" cy="262.5" r="10"/><circle class="cls-1" cx="141.5" cy="134.5" r="7.5"/><circle class="cls-1" cx="375.5" cy="216.5" r="12.5"/><circle class="cls-1" cx="509.5" cy="37.5" r="7.5"/><circle class="cls-1" cx="319.5" cy="12.5" r="12.5"/><circle class="cls-1" cx="398.5" cy="469.5" r="12.5"/><circle class="cls-1" cx="475.5" cy="358.5" r="7.5"/><circle class="cls-1" cx="582.5" cy="216.5" r="12.5"/><circle class="cls-1" cx="825.5" cy="128.5" r="10"/><circle class="cls-1" cx="551.5" cy="530.5" r="10"/><circle class="cls-1" cx="725.5" cy="399.5" r="12.5"/><circle class="cls-1" cx="917.5" cy="333.5" r="7.5"/><circle class="cls-1" cx="750.5" cy="580.5" r="10"/></g>
        </svg>*/}
       
        <div style={{display:"flex",flexDirection:"column", height:"100vh",minWidth:"100%",
        alignItems:"center",justifyContent:"center"}}>
        <div className='startscreen_text'>Waldemar</div>
        <div className='startscreen_text'>Justus</div>
        <a href='#project' className='startscreen_icon' style={{color:"white"}} ><FontAwesomeIcon icon={faChevronDown}  style={{width:"100px",height:"100px"}} 
        /></a>
        </div>
       

       {/* <img src={Blob} className='blob' ></img> */}
        </>
    );
}
export default Startscreen;