import printPrimeNumbers from './printPrimeNumbers';
import isItAPrimeNumber from '../utils/logicalOperators';

jest.mock('../utils/logicalOperators', () => jest.fn()
  .mockImplementationOnce(false)
  .mockReturnValue(true));

describe('Print primer numbers tests', () => {
  it('should return a list of prime numbers for numbers equal or greater than 2',
    () => {
      const primeNumbersMock = [7, 6, 5, 4, 3, 2];
      const req = {
        params: {
          number: 8,
        },
      };
      const res = {
        json: jest.fn().mockReturnValue(primeNumbersMock),
      };

      const result = printPrimeNumbers(req, res);

      expect(result).toEqual(primeNumbersMock);
      expect(isItAPrimeNumber).toHaveBeenCalledTimes(7);
      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(primeNumbersMock);
    });

  it('should return a bad request message if the input is not a number', () => {
    const errorMessage = 'Bad Request';
    const res = {
      status: jest.fn().mockReturnValue(
        {
          json: jest.fn().mockReturnValue(errorMessage),
        },
      ),
    };

    const req = {
      params: {
        number: 'dummyString',
      },
    };
    const result = printPrimeNumbers(req, res);

    expect(result).toEqual(errorMessage);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status().json).toHaveBeenCalledTimes(1);
  });

  it('should return a bad request message if the input is a number less than 2', () => {
    const errorMessage = 'Bad Request';
    const res = {
      status: jest.fn().mockReturnValue(
        {
          json: jest.fn().mockReturnValue(errorMessage),
        },
      ),
    };

    const req = {
      params: {
        number: 0,
      },
    };
    const result = printPrimeNumbers(req, res);

    expect(result).toEqual(errorMessage);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status().json).toHaveBeenCalledTimes(1);
  });
});
