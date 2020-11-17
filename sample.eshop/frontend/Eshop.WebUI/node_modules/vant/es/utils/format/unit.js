import { isDef } from '..';
import { isNumber } from '../validate/number';
export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? value + "px" : value;
}