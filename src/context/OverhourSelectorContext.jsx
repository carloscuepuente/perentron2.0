import { useContext, useState } from "react";
import { createContext } from "react";

export const OverhourSelector = createContext();

export const useOverhourSelector = () => useContext(OverhourSelector);

export const OverhourSelectorProvider = ({ children }) => {
  const [overtimeType, setOvertimeType] = useState("");

  return (
    <OverhourSelector.Provider value={[overtimeType, setOvertimeType]}>
      {children}
    </OverhourSelector.Provider>
  );
};
