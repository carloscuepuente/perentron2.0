import DateSelect from "../../components/DateSelect/DateSelect";
import DutySelect from "../../components/DutySelect/DutySelect";
import GroupInputGenerator from "../../components/GroupInputGenerator/GroupInputGenerator";
import OverhourAcInfo from "../../components/OverhourAcInfo/OverhourAcInfo";
import OverhourDLCause from "../../components/OverhourDLCause/OverhourDLCause";
import OverhourSelector from "../../components/OverhourSelector/OverhourSelector";
import OverhourShiftRelief from "../../components/OverhourShiftRelief/OverhourShiftRelief";
import OverhourShiftAbsence from "../../components/OverHourShiftAbsence/OverHourShiftAbsence";
import OverhourServices from "../../components/OverhourServices/OverhourServices";
import OverhourExceptional from "../../components/OverhourExceptional/OverhourExceptional";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

function Home() {
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
      <DownloadButton />
    </>
  );
}

export default Home;
