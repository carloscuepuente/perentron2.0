import { useState } from "react";
// import useAddAcInfo from "../../hooks/useAddAcInfo";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourAcInfo() {
  const [fltNumber, setFltNumber] = useState("");
  const [sta, setSta] = useState("");
  const [ata, setAta] = useState("");
  const [reg, setReg] = useState("");

  // useAddAcInfo({fltNumber, sta, ata, reg});
  useAddJustificationInfo({ fltNumber, sta, ata, reg });

  return (
    <div className="form-group-multiple">
      <div className="form-control">
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
        <label className="form-control">
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
        <label className="form-control">
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
        <label className="form-control">
          Matricula:
          <input
            value={reg}
            onChange={(event) => setReg(event.target.value)}
            placeholder="EI-DAC"
            type="text"
          />
        </label>
      </div>
    </div>
  );
}

export default OverhourAcInfo;
