import moment from "moment";
import { useContext, useState } from "react";
import { createContext } from "react";

export const DateSelect = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDateSelect = () => useContext(DateSelect);

export const DateSelectProvider = ({ children }) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  return (
    <DateSelect.Provider value={[date, setDate]}>
      {children}
    </DateSelect.Provider>
  );
};
