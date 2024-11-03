import { useContext, useState } from "react";
import { createContext } from "react";

export const DutySelect = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDutySelect = () => useContext(DutySelect);

export const DutySelectProvider = ({ children }) => {
  const [duty, setDuty] = useState("");

  return (
    <DutySelect.Provider value={[duty, setDuty]}>
      {children}
    </DutySelect.Provider>
  );
};
