export function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
export function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}