import { useState } from "react";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourExceptional() {
  const [exceptional, setExceptional] = useState("");
  useAddJustificationInfo({ exceptional: exceptional });

  return (
    <fieldset>
      <legend>Otras circunstancias excepcionales</legend>

      <div>
        <label>
          Motivo:
          <input
            placeholder=""
            type="text"
            value={exceptional}
            onChange={(event) => setExceptional(event.target.value)}
          />
        </label>
      </div>
    </fieldset>
  );
}

export default OverhourExceptional;
