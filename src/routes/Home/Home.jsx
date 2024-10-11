import DateSelect from "../../components/DateSelect/DateSelect";
import DutySelect from "../../components/DutySelect/DutySelect";
import GroupInputGenerator from "../../components/GroupInputGenerator/GroupInputGenerator";
import OverhourDLCause from "../../components/OverhourDLCause/OverhourDLCause";
import OverhourSelector from "../../components/OverhourSelector/OverhourSelector";
import { useDutySelect } from "../../context/DutySelectContext";
import { useOverhourDLCause } from "../../context/OverhourDLCauseContext";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";

function Home() {
  const [overtimeType] = useOverhourSelector();
  const [duty] = useDutySelect();
  const [cause] = useOverhourDLCause();
  console.log(overtimeType);
  console.log(duty);
  // console.log(cause);

  return (
    <>
      <h2>Soy la pagina de home</h2>
      <DateSelect />
      <DutySelect />
      <OverhourSelector />
      <GroupInputGenerator />
      <OverhourDLCause />
    </>
  );
}

export default Home;
