import { useDateSelect } from "../../context/DateSelectContext";
import { useDutySelect } from "../../context/DutySelectContext";
import { useOverhourDLCause } from "../../context/OverhourDLCauseContext";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";
import { useOverhourJustification } from "../../context/OverhourJustificationContext";

import saveOnWord from "../../utils/saveOnWord";
import { useGroupInfo } from "../../context/GroupInfoContext";

import "./DownloadButton.css";

function DownloadButton() {
  const [date] = useDateSelect();
  const [overtimeType] = useOverhourSelector();
  const [duty] = useDutySelect();
  const [cause] = useOverhourDLCause();
  const [justificationInfo] = useOverhourJustification();
  const [groupInfo] = useGroupInfo();

  const handleOnClick = () => {
    // console.log(date);
    // console.log(overtimeType);
    // console.log(duty);
    // console.log(cause);
    // console.log(justificationInfo);
    saveOnWord(date, overtimeType, duty, cause, justificationInfo, groupInfo);
  };

  return (
    <button className="button" onClick={handleOnClick}>
      Descargar Word
    </button>
  );
}

export default DownloadButton;
