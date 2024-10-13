import { useEffect } from "react";
// import { useOverhourAcInfo } from "../context/OverhourAcInfoContext";
import { useOverhourJustification } from "../context/OverhourJustificationContext";

const useAddAcInfo = (fltNumber, sta, ata, reg) => {
  const [justificationInfo, setJustificationInfo] = useOverhourJustification();
  // const [acInfo, setAcInfo] = useOverhourAcInfo();

  useEffect(() => {
    setJustificationInfo({
      ...justificationInfo,
      fltNumber: fltNumber,
      sta: sta,
      ata: ata,
      reg: reg,
    });
  }, [fltNumber, sta, ata, reg]);
};

export default useAddAcInfo;
