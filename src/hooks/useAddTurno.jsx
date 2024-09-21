import { useEffect } from "react";
import { useGroupInfo } from "../context/GroupInfoContext";

const useAddTurno = (
  id,
  name,
  turnoProgramadoIni,
  turnoProgramadoFin,
  turnoSalida
) => {
  const [groupInfo, setGroupInfo] = useGroupInfo();

  useEffect(() => {
    const updatedGroupInfo = groupInfo.map((group) =>
      group.id === id
        ? {
            ...group,
            name: name,
            turnoProgramadoIni: turnoProgramadoIni,
            turnoProgramadoFin: turnoProgramadoFin,
            turnoSalida: turnoSalida,
          }
        : group
    );
    setGroupInfo(updatedGroupInfo);
  }, [id, name, turnoProgramadoIni, turnoProgramadoFin, turnoSalida]);
};

export default useAddTurno;
