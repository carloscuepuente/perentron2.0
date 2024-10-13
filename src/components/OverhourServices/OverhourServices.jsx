import { useState } from "react";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourServices() {
  const [services, setServices] = useState("");
  useAddJustificationInfo({ services });

  return (
    <fieldset>
      <legend>Servicios o reparaciones urgentes</legend>

      <div>
        <label>
          Motivo:
          <input
            placeholder=""
            type="text"
            value={services}
            onChange={(event) => setServices(event.target.value)}
          />
        </label>
      </div>
    </fieldset>
  );
}

export default OverhourServices;
