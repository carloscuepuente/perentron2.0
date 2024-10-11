import { useOverhourDLCause } from "../../context/OverhourDLCauseContext";

function OverhourDLCause() {
  const [cause, setCause] = useOverhourDLCause();

  const handleChange = (event) => {
    setCause(event.target.value);
  };
  return (
    <fieldset>
      <legend>Explicación del motivo de la perentoria</legend>

      <div>
        <label>
          Motivo:
          <input
            placeholder="Códigos Delay, etc"
            type="text"
            value={cause}
            onChange={handleChange}
          />
        </label>
      </div>
    </fieldset>
  );
}

export default OverhourDLCause;
