import { useContext, useState } from "react";
import { createContext } from "react";

export const DutySelect = createContext();

export const useDutySelect = () => useContext(DutySelect);

export const DutySelectProvider = ({ children }) => {
  const [duty, setDuty] = useState("");

  return (
    <DutySelect.Provider value={[duty, setDuty]}>
      {children}
    </DutySelect.Provider>
  );
};
