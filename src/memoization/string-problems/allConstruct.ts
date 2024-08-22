/**
 * A function that takes a target string and an array of strings as arguments.
 * It should return a 2D array containing all the ways the target can be constructed
 * by concatenating elements of the wordBank array.
 * @param {string} target - the string to generate
 * @param {string[]} wordBank - the array containing strings used to generate the target.
 * @returns {boolean} - A 2D array containing all the ways the target can be generated using the wordBank.
 * Time Complexity: O(n^m) where n is the length of the target and m is the length of the wordBank.
 * Space Complexity: O(m) where m is the length of the target.
 * Complexities explained further in the fast implementation.
 */
export const all_construct_slow = (target: string, wordBank: string[]): string[][] => {
  if (target === "") return [[]];

  let ways: string[][] = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const result = all_construct_slow(suffix, wordBank);
      //   ways = [...ways, ...result.map((res) => [word, ...res])];
      ways = ways.concat(result.map((res) => [word, ...res]));
    }
  }
  return ways;
};

/**
 * A function that takes a target string and an array of strings as arguments.
 * It should return a 2D array containing all the ways the target can be constructed
 * by concatenating elements of the wordBank array.
 * @param target the string to generate
 * @param wordBank the array containing strings used to generate the target.
 * @param memo a memo object to store the results of the function.
 * @returns 2D array containing all the ways the target can be generated using the wordBank.
 * Time Complexity: O(n^m) where n is the length of the target and m is the length of the wordBank.
 * (worst case is when all the array element match and have to generate n^m sub arrays to represent
 * all possible combinations, (leave nodes).
 * Space Complexity: O(m) where m is the length of the target. No need to include size of the space
 * use by the algorithm in the space complexity. Since it will just be exponential in the worst case
 * anyways which is when all the array elements match and have to generate n^m sub arrays (combinations).
 */
export const all_construct_fast = (
  target: string,
  wordBank: string[],
  memo: Record<string, string[][]> = {}
): string[][] => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let ways: string[][] = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const result = all_construct_fast(suffix, wordBank, memo);
      //   ways = [...ways, ...result.map((res) => [word, ...res])];
      ways = ways.concat(result.map((res) => [word, ...res]));
    }
  }
  memo[target] = ways;
  return ways;
};
