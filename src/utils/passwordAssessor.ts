/**
 * @description Function to benchmark password strength
 * and assign score
 */
export const benchmarkPassword = (password: string = "") => {
  /**
   * @description This way, we can scale up each of
   * the password benchmarking algorithm, such as
   * assessing whether there is subsequent 22 chars
   */
  const lowerAndUpperRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const numberOrSymbolRegex = /[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/;

  const isMinimum = password.length >= 8;
  const isMixOfLowerAndUpper = lowerAndUpperRegex.test(password);
  const hasNumberOrSymbol = numberOrSymbolRegex.test(password);
  const score =
    Number(isMinimum) +
    Number(isMixOfLowerAndUpper) +
    Number(hasNumberOrSymbol);

  return {
    isMinimum,
    isMixOfLowerAndUpper,
    hasNumberOrSymbol,
    score,
    totalScore: 3,
  };
};
