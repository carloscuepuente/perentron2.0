import { useContext, useState } from "react";
import { createContext } from "react";

export const OverhourDLCause = createContext();

export const useOverhourDLCause = () => useContext(OverhourDLCause);

export const OverhourDLCauseProvider = ({ children }) => {
  const [cause, setCause] = useState("");

  return (
    <OverhourDLCause.Provider value={[cause, setCause]}>
      {children}
    </OverhourDLCause.Provider>
  );
};
