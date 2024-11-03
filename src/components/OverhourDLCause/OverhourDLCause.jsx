import { useOverhourDLCause } from "../../context/OverhourDLCauseContext";
import "./OverhourDLCause.css";

function OverhourDLCause() {
  const [cause, setCause] = useOverhourDLCause();

  const handleChange = (event) => {
    setCause(event.target.value);
  };
  return (
    <div className="form-group">
      <label className="form-control">
        Motivo:
        <input
          className="form-control"
          placeholder="Códigos Delay, etc"
          type="text"
          value={cause}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default OverhourDLCause;
