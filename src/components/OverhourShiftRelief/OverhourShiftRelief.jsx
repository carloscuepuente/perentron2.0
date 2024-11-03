import { useState } from "react";
// import useAddReliefInfo from "../../hooks/useAddReliefInfo";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourShiftRelief() {
  const [positionRelief, setPosition] = useState("");
  const [nameRelief, setName] = useState("");
  const [causeRelief, setCause] = useState("");

  useAddJustificationInfo({ positionRelief, nameRelief, causeRelief });

  return (
    <div className="form-group-multiple">
      <div>
        <label className="form-control">
          Cargo:
          <input
            value={positionRelief}
            onChange={(event) => setPosition(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
      <div>
        <label className="form-control">
          Nombre:
          <input
            value={nameRelief}
            onChange={(event) => setName(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
      <div>
        <label className="form-control">
          Motivo del retraso:
          <input
            value={causeRelief}
            onChange={(event) => setCause(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
    </div>
  );
}

export default OverhourShiftRelief;
