import GroupInputGenerator from "../../components/GroupInputGenerator/GroupInputGenerator";
import OverhourSelector from "../../components/OverhourSelector/OverhourSelector";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";
function Home() {
  const [overtimeType] = useOverhourSelector();
  console.log(overtimeType);

  return (
    <>
      <h2>Soy la pagina de home</h2>
      <OverhourSelector />
      <GroupInputGenerator />
    </>
  );
}

export default Home;
