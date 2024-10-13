import { useEffect } from "react";
// import { useOverhourShiftRelief } from "../context/OverhourShiftReliefContext";
import { useOverhourJustification } from "../context/OverhourJustificationContext";

const useAddReliefInfo = (positionRelief, nameRelief, causeRelief) => {
  // const [reliefInfo, setReliefInfo] = useOverhourShiftRelief();
  const [justificationInfo, setJustificationInfo] = useOverhourJustification();

  useEffect(() => {
    setJustificationInfo({
      ...justificationInfo,
      positionRelief: positionRelief,
      nameRelief: nameRelief,
      causeRelief: causeRelief,
    });
  }, [positionRelief, nameRelief, causeRelief]);
};

export default useAddReliefInfo;
