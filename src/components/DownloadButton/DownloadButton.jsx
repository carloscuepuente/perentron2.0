// !! quitar esto que no se va a usar aquí
import { useDateSelect } from "../../context/DateSelectContext";
import { useDutySelect } from "../../context/DutySelectContext";
import { useOverhourDLCause } from "../../context/OverhourDLCauseContext";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";
import { useOverhourJustification } from "../../context/OverhourJustificationContext";

function DownloadButton() {
  // !! quitar esto que no se va a usar aquí
  const [date] = useDateSelect();
  const [overtimeType] = useOverhourSelector();
  const [duty] = useDutySelect();
  const [cause] = useOverhourDLCause();
  const [justificationInfo] = useOverhourJustification();

  const handleOnClick = () => {
    console.log(date);
    console.log(overtimeType);
    console.log(duty);
    console.log(cause);
    console.log(justificationInfo);
  };

  return <button onClick={handleOnClick}>Descargar Word</button>;
}

export default DownloadButton;
