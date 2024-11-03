import { useContext, useState } from "react";
import { createContext } from "react";

export const OverhourJustificationContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useOverhourJustification = () =>
  useContext(OverhourJustificationContext);

export const OverhourJustificationProvider = ({ children }) => {
  const [justificationInfo, setJustificationInfo] = useState({});

  return (
    <OverhourJustificationContext.Provider
      value={[justificationInfo, setJustificationInfo]}
    >
      {children}
    </OverhourJustificationContext.Provider>
  );
};
