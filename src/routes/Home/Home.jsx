import DateSelect from "../../components/DateSelect/DateSelect";
import DutySelect from "../../components/DutySelect/DutySelect";
import GroupInputGenerator from "../../components/GroupInputGenerator/GroupInputGenerator";
import OverhourAcInfo from "../../components/OverhourAcInfo/OverhourAcInfo";
import OverhourDLCause from "../../components/OverhourDLCause/OverhourDLCause";
import OverhourSelector from "../../components/OverhourSelector/OverhourSelector";
import OverhourShiftRelief from "../../components/OverhourShiftRelief/OverhourShiftRelief";
import OverhourShiftAbsence from "../../components/OverhourShiftAbsence/OverhourShiftAbsence";
import OverhourServices from "../../components/OverhourServices/OverhourServices";
import OverhourExceptional from "../../components/OverhourExceptional/OverhourExceptional";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="main-column">
        <section className="section">
          <DateSelect />
          <DutySelect />
        </section>
        <section className="section">
          <h3 className="section-header">Selecciona el tipo de perentoria</h3>
          <OverhourSelector />
        </section>

        <section className="section">
          <h3 className="section-header">
            Explicación del motivo de la perentoria
          </h3>
          <OverhourDLCause />
        </section>

        <section className="section">
          <h3 className="section-header">Impuntualidad de Aeronaves</h3>
          <OverhourAcInfo />
        </section>

        <section className="section">
          <h3 className="section-header">Retraso en relevo de turno</h3>
          <OverhourShiftRelief />
        </section>

        <section className="section">
          <h3 className="section-header">
            Ausencia imprevista de trabajadores
          </h3>
          <OverhourShiftAbsence />
        </section>

        <section className="section">
          <h3 className="section-header">Servicios o reparaciones urgentes</h3>
          <OverhourServices />
        </section>

        <section className="section">
          <h3 className="section-header">Otras circunstancias excepcionales</h3>
          <OverhourExceptional />
        </section>

        <DownloadButton />
      </div>

      <div className="employee-column">
        <section className="section">
          <GroupInputGenerator />
        </section>
      </div>
    </div>
  );
}

export default Home;
