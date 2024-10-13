import { useState } from "react";
import useAddAcInfo from "../../hooks/useAddAcInfo";

function OverhourAcInfo() {
  const [fltNumber, setFltNumber] = useState("");
  const [sta, setSta] = useState("");
  const [ata, setAta] = useState("");
  const [reg, setReg] = useState("");

  useAddAcInfo(fltNumber, sta, ata, reg);

  return (
    <fieldset>
      <legend>Impuntualidad de Aeronaves</legend>
      <div>
        <label>
          Número de vuelo:
          <input
            value={fltNumber}
            onChange={(event) => setFltNumber(event.target.value)}
            placeholder="FR5318"
            type="text"
          />
        </label>
      </div>
      <div>
        <label>
          STA/STD:
          <input
            value={sta}
            onChange={(event) => setSta(event.target.value)}
            placeholder="10:10"
            type="text"
          />
        </label>
      </div>
      <div>
        <label>
          ATA/ATD:
          <input
            value={ata}
            onChange={(event) => setAta(event.target.value)}
            placeholder="11:11"
            type="text"
          />
        </label>
      </div>
      <div>
        <label>
          Matricula:
          <input
            value={reg}
            onChange={(event) => setReg(event.target.value)}
            placeholder="EI-DAC"
            type="text"
          />
        </label>
      </div>
    </fieldset>
  );
}

export default OverhourAcInfo;