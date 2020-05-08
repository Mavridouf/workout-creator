export const pick = function (obj, props) {
  if (!obj || !props) return;
  let picked = {};
  props.forEach(function (prop) {
    if (obj[prop]) picked[prop] = obj[prop];
  });

  return picked;
};
