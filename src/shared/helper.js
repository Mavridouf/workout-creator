export const pick = function (obj, props) {
  if (!obj || !props) return;
  let picked = {};
  props.forEach(function (prop) {
    if (obj[prop]) picked[prop] = obj[prop];
  });

  return picked;
};

export const getBreakIndex = (workout) => {
  if (workout.length <= 1) return 0;

  for (let i = 0; i < workout.length; i++) {
    if (workout[i].Name !== 'Break' &&
      i + 1 < workout.length &&
      workout[i + 1].Name !== 'Break') return i + 1;
  }

  return 0;
}
