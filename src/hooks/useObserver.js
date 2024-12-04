import { useState, useEffect } from "react";
export const useObserver = () => {

    const [isProjectShowcase, setIsProjectShowcase] = useState(false);
    const [isProjectSelection, setIsProjectSelection] = useState(false);

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
          switch (entry.target.id) {
            case "projectShowcase":
              if (entry.isIntersecting) {
                setIsProjectShowcase(true);
              } else {
                setIsProjectShowcase(false);
              }
              break;
            case "projectSelection-box":
              if (entry.isIntersecting) {
                setIsProjectSelection(true);
              } else {
                setIsProjectSelection(false);
              }
              break;
            case "footer":
              if (entry.isIntersecting) {
                setIsProjectShowcase(true);
              } 
              break;
            default:
              break;
          }
        });
      };
      const options = {
        root: null,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver(callback, options);
      useEffect(() => {
        observer.observe(document.getElementById("projectShowcase"));
        observer.observe(document.getElementById("projectSelection-box"));
        observer.observe(document.getElementById("footer"));
      });
      return { isProjectShowcase, isProjectSelection };
}