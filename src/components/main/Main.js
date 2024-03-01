import '../../App.css';
import { useContext,useState } from 'react';
import Startscreen from '../Start'
import Section from '../Sections';
import Project from '../Project';
import { ExpandContext } from '../../context/context';

function Main() {
    const [id, setID] = useState(" ");
    return(
        <>
        
        {/*<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 949.79 639.74" 
        style={{position:"absolute",top:"-800px",right:"-900px",zIndex:"-1",fill:"#e91e63",width:"1800px"}}>
        <path class="cls-3" d="m67.29,181.22s-196,367,81,423,545,40,633-8,285-361,75-436S351.29-170.78,67.29,181.22Z"/>
         </svg>
         <svg id="Ebene_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1243.15 1082.92"
         style={{position:"absolute",top:"-500px",right:"-250px",zIndex:"-2",fill:"#651fff",width:"1500px"}}>
         <path class="cls-4" d="m200.7,187.04s-433,302-27,448,518,493,704,443,324-153,315-391,124-481-9-625-866-10-983,125Z"/>
         </svg>*/}
        <Startscreen></Startscreen>
        <ExpandContext.Provider value={{id,setID}}>

        
        <Section></Section>
        <Project></Project>
        </ExpandContext.Provider>
        </>
    );
}
export default Main;