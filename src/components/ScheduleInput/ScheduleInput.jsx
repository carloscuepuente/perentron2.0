import { useState } from "react";
import useAddTurno from "../../hooks/useAddTurno";
import "./ScheduleInput.css";

function ScheduleInput({ id }) {
  const [name, setName] = useState("");
  const [clockIn, setClockIn] = useState("");
  const [clockOut, setClockOut] = useState("");
  const [realClockOut, setRealClockOut] = useState("");

  useAddTurno(id, name, clockIn, clockOut, realClockOut);

  return (
    <div>
      <label>
        Nombre del Empleado
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre"
        />
      </label>

      <label>
        Entrada Programada
        <input
          value={clockIn}
          onChange={(e) => setClockIn(e.target.value)}
          type="time"
          required
        />
      </label>
      <label>
        Salida Programada
        <input
          value={clockOut}
          onChange={(e) => setClockOut(e.target.value)}
          type="time"
          required
        />
      </label>
      <label>
        Salida Real
        <input
          value={realClockOut}
          onChange={(e) => setRealClockOut(e.target.value)}
          type="time"
          required
        />
      </label>
    </div>
  );
}

export default ScheduleInput;
