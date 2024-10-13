import { useState } from "react";
import useAddReliefInfo from "../../hooks/useAddReliefInfo";

function OverhourShiftRelief() {
  const [positionRelief, setPosition] = useState("");
  const [nameRelief, setName] = useState("");
  const [causeRelief, setCause] = useState("");

  useAddReliefInfo(positionRelief, nameRelief, causeRelief);

  return (
    <fieldset>
      <legend>Retraso en relevo de turno</legend>
      <div>
        <label>
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
        <label>
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
        <label>
          Motivo del retraso:
          <input
            value={causeRelief}
            onChange={(event) => setCause(event.target.value)}
            placeholder=""
            type="text"
          />
        </label>
      </div>
    </fieldset>
  );
}

export default OverhourShiftRelief;
