// import { useState } from "react";
// import moment from "moment";
import { useDateSelect } from "../../context/DateSelectContext";

function DateSelect() {
  //   const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useDateSelect();

  return (
    <div>
      <label>
        Selecciona la fecha
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
    </div>
  );
}

export default DateSelect;
