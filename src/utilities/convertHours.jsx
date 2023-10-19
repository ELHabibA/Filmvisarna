
function convertHours(min) {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  let time = hours + "." + minutes;

  return time;
};

export default convertHours;