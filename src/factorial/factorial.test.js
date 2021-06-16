import getFactorial from './factorial';
import { typeErrorMessage, rangeErrorMessage } from './utils';

describe("Happy Path", () => {
  test('getFactorial deve ser uma função', () => {
    expect(getFactorial).toBeInstanceOf(Function);
  });
  
  test('getFactorial(3) deve retornar 6', () => {
    const actual = getFactorial(3);
    const expected = 6;
  
    expect(actual).toBe(expected);
  });
  
  test('getFactorial(4) deve retornar 24', () => {
    const actual = getFactorial(4);
    const expected = 24;
  
    expect(actual).toBe(expected);
  });
})

describe("Unhappy Path", () => {
  test('getFactorial() deve retornar um TypeError', () => {
    try {
      getFactorial();
    } catch({ name }) {
      expect(name).toBe('TypeError')
    }
  });

  test(`getFactorial() deve retornar um TypeError com a mensagem "${typeErrorMessage}"`, () => {
    try {
      getFactorial();
    } catch({ message }) {
      expect(message).toBe(typeErrorMessage);
    }
  });

  test('getFactorial(0) deve retornar 1', () => {
    const actual = getFactorial(0);
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test('getFactorial(-1) deve retornar um RangeError', () => {
    try {
      getFactorial(-1);
    } catch({ name }) {
      expect(name).toBe('RangeError');
    }
  });

  test(`getFactorial(-1) deve retornar um RangeError com a mensagem "${rangeErrorMessage}"`, () => {
    try {
      getFactorial(-1);
    } catch({ message }) {
      expect(message).toBe(rangeErrorMessage);
    }
  });
})
