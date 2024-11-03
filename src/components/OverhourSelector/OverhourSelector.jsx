import { useOverhourSelector } from "../../context/OverhourSelectorContext";
import "./OverhourSelector.css";

function OverhourSelector() {
  const [overtimeType, setOvertimeType] = useOverhourSelector();

  return (
    <div className="radio-group">
      <div>
        <label className="form-control">
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
        <label className="form-control">
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
    </div>
  );
}

export default OverhourSelector;
