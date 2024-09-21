import { useOverhourSelector } from "../../context/OverhourSelectorContext";
import "./OverhourSelector.css";

function OverhourSelector() {
  const [overtimeType, setOvertimeType] = useOverhourSelector();

  return (
    <fieldset>
      <legend>Selecciona el tipo de perentoria</legend>

      <div>
        <label>
          Salida Tardía
          <input
            type="radio"
            name="type"
            value="salida"
            checked={overtimeType === "salida"}
            onChange={(event) => setOvertimeType(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Entrada Anticipada
          <input
            type="radio"
            name="type"
            value="entrada"
            checked={overtimeType === "entrada"}
            onChange={(event) => setOvertimeType(event.target.value)}
          />
        </label>
      </div>
    </fieldset>
  );
}

export default OverhourSelector;
