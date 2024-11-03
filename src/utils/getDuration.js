import moment from "moment";
const getDuration = (tiempo1, tiempo2) => {
  const momentTiempo1 = moment(tiempo1, "HH:mm");
  const momentTiempo2 = moment(tiempo2, "HH:mm");

  // si el momento2 es despues del momento1 le sumamos un dia para los calculos
  if (momentTiempo2.isBefore(momentTiempo1)) {
    momentTiempo2.add(1, "day");
  }
  // regresa el valor absoluto de la diferencia por lo que siempre es positivo
  const duration = momentTiempo2.diff(momentTiempo1, "minutes");

  return duration;
};

export default getDuration;
