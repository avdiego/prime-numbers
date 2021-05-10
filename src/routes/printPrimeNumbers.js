import isItAPrimeNumber from '../utils/logicalOperators';

/**
 * Route serving prime numbers print.
 * @param {string} path - path
 * @param {callback} callback - callback.
 */

export default (req, res) => {
  const reqNumber = req.params.number;
  if (!+reqNumber || reqNumber < 2) {
    return res.status(400).json({
      errorMessage: 'The input must be of type number and greater than two',
    });
  }

  const primeNumbers = [];
  for (let i = Math.trunc(reqNumber); i >= 2; i -= 1) {
    if (isItAPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }
  // eslint-disable-next-line no-console
  console.log(`The prime numbers between 2 and ${reqNumber} are ${primeNumbers}`);
  return res.json(primeNumbers);
};
