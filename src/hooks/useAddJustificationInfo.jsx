import { useEffect, useMemo } from "react";
import { useOverhourJustification } from "../context/OverhourJustificationContext";

const useAddJustificationInfo = (newInfo) => {
  const [, setJustificationInfo] = useOverhourJustification();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoNewInfo = useMemo(() => newInfo, [JSON.stringify(newInfo)]);

  useEffect(() => {
    setJustificationInfo((prevInfo) => ({
      ...prevInfo,
      ...newInfo,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoNewInfo]);
};

export default useAddJustificationInfo;
