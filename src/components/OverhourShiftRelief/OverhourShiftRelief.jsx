import { useState } from "react";
import useAddReliefInfo from "../../hooks/useAddReliefInfo";

function OverhourShiftRelief() {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [cause, setCause] = useState("");

  useAddReliefInfo(position, name, cause);

  return (
    <fieldset>
      <legend>Retraso en relevo de turno</legend>
      <div>
        <label>
          Cargo:
          <input
            value={position}
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
            value={name}
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
            value={cause}
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
