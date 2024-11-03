import { useState } from "react";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourExceptional() {
  const [exceptional, setExceptional] = useState("");
  useAddJustificationInfo({ exceptional: exceptional });

  return (
    <div className="form-group">
      <label className="form-control">
        Motivo:
        <input
          placeholder=""
          type="text"
          value={exceptional}
          onChange={(event) => setExceptional(event.target.value)}
        />
      </label>
    </div>
  );
}

export default OverhourExceptional;
