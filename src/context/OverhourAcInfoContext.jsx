import { useContext, useState } from "react";
import { createContext } from "react";

export const OverhourAcInfo = createContext();

export const useOverhourAcInfo = () => useContext(OverhourAcInfo);

export const OverhourAcInfoProvider = ({ children }) => {
  const [acInfo, setAcInfo] = useState({});

  return (
    <OverhourAcInfo.Provider value={[acInfo, setAcInfo]}>
      {children}
    </OverhourAcInfo.Provider>
  );
};
