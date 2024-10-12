import { useContext, useState } from "react";
import { createContext } from "react";

export const OverhourShiftRelief = createContext();

export const useOverhourShiftRelief = () => useContext(OverhourShiftRelief);

export const OverhourShiftReliefProvider = ({ children }) => {
  const [reliefInfo, setReliefInfo] = useState({});

  return (
    <OverhourShiftRelief.Provider value={[reliefInfo, setReliefInfo]}>
      {children}
    </OverhourShiftRelief.Provider>
  );
};
