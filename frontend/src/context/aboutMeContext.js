import React, { createContext, useRef } from "react";

export const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const refAboutMe = useRef(null);

  const scrollToAboutMe = () => {
    refAboutMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AboutMeContext.Provider
      value={{
        refAboutMe,
        scrollToAboutMe,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};
