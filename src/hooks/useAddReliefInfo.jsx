import { useEffect } from "react";
import { useOverhourShiftRelief } from "../context/OverhourShiftReliefContext";

const useAddReliefInfo = (position, name, cause) => {
  const [reliefInfo, setReliefInfo] = useOverhourShiftRelief();

  useEffect(() => {
    setReliefInfo({
      ...reliefInfo,
      position: position,
      name: name,
      cause: cause,
    });
  }, [position, name, cause]);
};

export default useAddReliefInfo;
