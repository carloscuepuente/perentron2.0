import { useContext, useState } from "react";
import { createContext } from "react";

export const GroupInfo = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGroupInfo = () => useContext(GroupInfo);

export const GroupInfoProvider = ({ children }) => {
  const [groupInfo, setGroupInfo] = useState([]);

  return (
    <GroupInfo.Provider value={[groupInfo, setGroupInfo]}>
      {children}
    </GroupInfo.Provider>
  );
};
