import DateSelect from "../../components/DateSelect/DateSelect";
import DutySelect from "../../components/DutySelect/DutySelect";
import GroupInputGenerator from "../../components/GroupInputGenerator/GroupInputGenerator";
import OverhourAcInfo from "../../components/OverhourAcInfo/OverhourAcInfo";
import OverhourDLCause from "../../components/OverhourDLCause/OverhourDLCause";
import OverhourSelector from "../../components/OverhourSelector/OverhourSelector";
import OverhourShiftRelief from "../../components/OverhourShiftRelief/OverhourShiftRelief";
import { useDutySelect } from "../../context/DutySelectContext";

import { useOverhourDLCause } from "../../context/OverhourDLCauseContext";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";

import { useOverhourJustification } from "../../context/OverhourJustificationContext";
import OverhourShiftAbsence from "../../components/OverHourShiftAbsence/OverHourShiftAbsence";
import OverhourServices from "../../components/OverhourServices/OverhourServices";
import OverhourExceptional from "../../components/OverhourExceptional/OverhourExceptional";

function Home() {
  const [overtimeType] = useOverhourSelector();
  const [duty] = useDutySelect();
  const [cause] = useOverhourDLCause();
  const [justificationInfo] = useOverhourJustification();
  console.log(overtimeType);
  console.log(duty);
  console.log(cause);

  console.log(justificationInfo);

  return (
    <>
      <h2>Soy la pagina de home</h2>
      <DateSelect />
      <DutySelect />
      <OverhourSelector />
      <GroupInputGenerator />
      <OverhourDLCause />
      <OverhourAcInfo />
      <OverhourShiftRelief />
      <OverhourShiftAbsence />
      <OverhourServices />
      <OverhourExceptional />
    </>
  );
}

export default Home;
