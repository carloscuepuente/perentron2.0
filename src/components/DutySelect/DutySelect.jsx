import dutys from "./Dutys";
import { useDutySelect } from "../../context/DutySelectContext";

function DutySelect() {
  const [, setDuty] = useDutySelect();
  const handleChange = (event) => {
    setDuty(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="form-group">
      <label className="form-control">
        Selecciona al supervisor:
        <select className="form-control" onChange={handleChange}>
          {dutys.map((name) => {
            return (
              <option className="form-control" value={name} key={name}>
                {name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

export default DutySelect;
