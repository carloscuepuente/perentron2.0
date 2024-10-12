import { useEffect } from "react";
import { useOverhourAcInfo } from "../context/OverhourAcInfoContext";

const useAddAcInfo = (fltNumber, sta, ata, reg) => {
  const [acInfo, setAcInfo] = useOverhourAcInfo();

  useEffect(() => {
    setAcInfo({
      ...acInfo,
      fltNumber: fltNumber,
      sta: sta,
      ata: ata,
      reg: reg,
    });
  }, [fltNumber, sta, ata, reg]);
};

export default useAddAcInfo;
