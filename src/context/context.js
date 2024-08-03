import React, { useEffect,useState,createContext,useRef } from "react";

export const UsefullContext = createContext();

export const UsefullProvider = ({ children }) => {
  const [id, setID] = useState(null);
  const refSection = useRef(null);

  return (
    <UsefullContext.Provider
      value={{ id, setID, refSection }}>
      {children}
    </UsefullContext.Provider>
  );
};
