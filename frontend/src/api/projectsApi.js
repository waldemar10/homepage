
const API_URL = process.env.REACT_APP_API_URL + "backend/public/index.php/projects";

export async function fetchProjects() {
   try{
    const response = await fetch(API_URL);
    if(!response.ok){
      throw new Error(`Fehler beim Laden: ${response.statusText}`);
    }
    return await response.json();
   }catch(error){
     console.error("Fehler beim Laden der Projekte", error);
     throw error;
   }
}