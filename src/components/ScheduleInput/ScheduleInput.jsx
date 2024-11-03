import { useState } from "react";
import { useGroupInfo } from "../../context/GroupInfoContext";
import useAddTurno from "../../hooks/useAddTurno";
import "./ScheduleInput.css";
import { useOverhourSelector } from "../../context/OverhourSelectorContext";

function ScheduleInput({ id }) {
  const [name, setName] = useState("");
  const [clockIn, setClockIn] = useState("");
  const [clockOut, setClockOut] = useState("");
  const [realClockOut, setRealClockOut] = useState("");
  const [groupInfo, setGroupInfo] = useGroupInfo();

  const [overtimeType] = useOverhourSelector();

  useAddTurno(id, name, clockIn, clockOut, realClockOut);

  const handleDeleteClick = (id) => {
    const filteredGroupInfo = groupInfo.filter((group) => group.id !== id);
    setGroupInfo(filteredGroupInfo);
  };

  return (
    <div className="form-group">
      <div className="form-group-employee">
        <label className="form-control">
          Nombre del Empleado
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre"
          />
        </label>

        <label className="form-control">
          Entrada Programada
          <input
            value={clockIn}
            onChange={(e) => setClockIn(e.target.value)}
            type="time"
            required
          />
        </label>
        <label className="form-control">
          Salida Programada
          <input
            value={clockOut}
            onChange={(e) => setClockOut(e.target.value)}
            type="time"
            required
          />
        </label>
        <label className="form-control">
          {overtimeType === "entrada" ? "Entrada Real" : "Salida Real"}
          <input
            value={realClockOut}
            onChange={(e) => setRealClockOut(e.target.value)}
            type="time"
            required
          />
        </label>
        <button className="button" onClick={() => handleDeleteClick(id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default ScheduleInput;
