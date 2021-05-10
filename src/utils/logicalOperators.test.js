import isItAPrimeNumber from './logicalOperators';

describe('logicalOperators tests', () => {
  it('should return true if the input is a prime number', () => {
    const result = isItAPrimeNumber(13);

    expect(result).toBeTruthy();
  });

  it('should return false if the input is not a prime number', () => {
    const result = isItAPrimeNumber(4);

    expect(result).toBeFalsy();
  });
});
