/**
 * Function that determines if a number is prime.
 * @param {number} number - number
 */

export default (number) => {
  for (let i = 2; i < Math.trunc(number / 2) + 1; i += 1) {
    console.log(i);
    if (!(number % i)) {
      return false;
    }
  }
  return true;
};
