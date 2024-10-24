import { useEffect } from "react";
import { useGroupInfo } from "../context/GroupInfoContext";

const useAddTurno = (id, name, clockIn, clockOut, realClockOut) => {
  const [groupInfo, setGroupInfo] = useGroupInfo();

  useEffect(() => {
    const updatedGroupInfo = groupInfo.map((group) =>
      group.id === id
        ? {
            ...group,
            name: name,
            clockIn: clockIn,
            clockOut: clockOut,
            realClockOut: realClockOut,
          }
        : group
    );
    setGroupInfo(updatedGroupInfo);
  }, [id, name, clockIn, clockOut, realClockOut]);
};

export default useAddTurno;
