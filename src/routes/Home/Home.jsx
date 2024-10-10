import DateSelect from "../../components/DateSelect/DateSelect";
import DutySelect from "../../components/DutySelect/DutySelect";
import GroupInputGenerator from "../../components/GroupInputGenerator/GroupInputGenerator";
import OverhourSelector from "../../components/OverhourSelector/OverhourSelector";
import { useDutySelect } from "../../context/DutySelectContext";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";

function Home() {
  const [overtimeType] = useOverhourSelector();
  const [duty] = useDutySelect();
  console.log(overtimeType);
  console.log(duty);

  return (
    <>
      <h2>Soy la pagina de home</h2>
      <DateSelect />
      <DutySelect />
      <OverhourSelector />
      <GroupInputGenerator />
    </>
  );
}

export default Home;
