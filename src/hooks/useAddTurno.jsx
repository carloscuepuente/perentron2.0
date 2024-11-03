import { useEffect } from "react";
import { useGroupInfo } from "../context/GroupInfoContext";
import getDuration from "../utils/getDuration";
import { useOverhourSelector } from "../context/OverhourSelectorContext";

const useAddTurno = (id, name, clockIn, clockOut, realClockOut) => {
  const [groupInfo, setGroupInfo] = useGroupInfo();

  const [overtimeType] = useOverhourSelector();

  let overtime;

  if (overtimeType === "entrada") {
    // si es entrada en realidad el realClockOut se convierte en la entrada real
    // pero para no cambiar las variables en el código simplemente usamos el getDuration con las horas reales y ya
    overtime = (getDuration(realClockOut, clockIn) / 60).toFixed(2);
  } else {
    overtime = (getDuration(clockOut, realClockOut) / 60).toFixed(2);
  }

  useEffect(() => {
    const updatedGroupInfo = groupInfo.map((group) =>
      group.id === id
        ? {
            ...group,
            name: name,
            clockIn: clockIn,
            clockOut: clockOut,
            realClockOut: realClockOut,
            overtime: overtime,
          }
        : group
    );
    setGroupInfo(updatedGroupInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, name, clockIn, clockOut, realClockOut]);
};

export default useAddTurno;
