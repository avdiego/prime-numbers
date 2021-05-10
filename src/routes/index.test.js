import printPrimeNumbers from './printPrimeNumbers';
import routerConfig from './index';

jest.mock('./printPrimeNumbers', () => jest.fn());

describe('index', () => {
  const router = {
    get: jest.fn(),
  };
  it('should configure routes on router', () => {
    routerConfig(router);

    expect(router.get).toHaveBeenCalledWith(
      '/numbers/:number/primer-numbers',
      printPrimeNumbers,
    );
  });

  it('should return router', () => {
    const result = routerConfig(router);

    expect(result).toBe(router);
  });
});
