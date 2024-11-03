import { useState } from "react";
import useAddJustificationInfo from "../../hooks/useAddJustificationInfo";

function OverhourServices() {
  const [services, setServices] = useState("");
  useAddJustificationInfo({ services });

  return (
    <div className="form-group">
      <label className="form-control">
        Motivo:
        <input
          placeholder=""
          type="text"
          value={services}
          onChange={(event) => setServices(event.target.value)}
        />
      </label>
    </div>
  );
}

export default OverhourServices;
