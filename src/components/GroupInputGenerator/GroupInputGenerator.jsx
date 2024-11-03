import { useGroupInfo } from "../../context/GroupInfoContext";
import { v4 as uuidv4 } from "uuid";
import ScheduleInput from "../ScheduleInput/ScheduleInput";
import "./GroupInputGenerator.css";

function GroupInputGenerator() {
  const [groupInfo, setGroupInfo] = useGroupInfo();
  // groupInfo es un array

  const handleOnClick = () => {
    setGroupInfo([...groupInfo, { id: uuidv4() }]);
  };
  return (
    <>
      <button className="button" onClick={handleOnClick}>
        Agregar Empleado
      </button>

      {groupInfo?.map((group) => {
        return <ScheduleInput id={group.id} key={group.id} />;
      })}
    </>
  );
}

export default GroupInputGenerator;
