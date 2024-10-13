import { useEffect, useMemo } from "react";
import { useOverhourJustification } from "../context/OverhourJustificationContext";

const useAddJustificationInfo = (newInfo) => {
  const [, setJustificationInfo] = useOverhourJustification();

  const memoNewInfo = useMemo(() => newInfo, [JSON.stringify(newInfo)]);

  useEffect(() => {
    setJustificationInfo((prevInfo) => ({
      ...prevInfo,
      ...newInfo,
    }));
  }, [memoNewInfo]);
};

export default useAddJustificationInfo;
