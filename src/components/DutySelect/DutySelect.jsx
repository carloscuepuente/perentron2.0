import dutys from "./Dutys";
import { useDutySelect } from "../../context/DutySelectContext";

function DutySelect() {
  const [, setDuty] = useDutySelect();
  const handleChange = (event) => {
    setDuty(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <label>
        Selecciona al supervisor:
        <select onChange={handleChange}>
          {dutys.map((name) => {
            return (
              <option value={name} key={name}>
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
