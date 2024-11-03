import { useState } from "react";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourShiftAbsence() {
  const [positionAbsence, setPositionAbsence] = useState("");
  const [nameAbsence, setNameAbsence] = useState("");
  const [causeAbsence, setCauseAbsence] = useState("");

  useAddJustificationInfo({ positionAbsence, nameAbsence, causeAbsence });
  return (
    <div className="form-group-multiple">
      <div>
        <label className="form-control">
          Cargo persona ausente:
          <input
            value={positionAbsence}
            onChange={(event) => setPositionAbsence(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
      <div>
        <label className="form-control">
          Nombre:
          <input
            value={nameAbsence}
            onChange={(event) => setNameAbsence(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
      <div>
        <label className="form-control">
          Motivo de la ausencia:
          <input
            value={causeAbsence}
            onChange={(event) => setCauseAbsence(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
    </div>
  );
}

export default OverhourShiftAbsence;
