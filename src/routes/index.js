import printPrimeNumbers from './printPrimeNumbers';

/**
 * Setup of the service routes.
 * @param {object} router - express Route.
 */

export default (router) => {
  router.get('/numbers/:number/primer-numbers', printPrimeNumbers);
  return router;
};
