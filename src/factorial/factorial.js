import { typeErrorMessage, rangeErrorMessage } from './utils';

export default function getFactorial(number) {
  const isNotNumber = typeof number !== 'number';
  const isNumberOutOfRange = number < 0;
  const isNumberOneOrZero = number === 0 || number === 1;

  if (isNotNumber) {
    throw new TypeError(typeErrorMessage);
  }

  if (isNumberOutOfRange) {
    throw new RangeError(rangeErrorMessage);
  }

  return isNumberOneOrZero ? 1 : number * getFactorial(number - 1);
}