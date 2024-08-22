/**
 * A function that returns number of ways that the target string can be constructed using
 * elements from the wordBank array.
 * @param target the string to generate
 * @param wordBank an array containing the strings to use to generate target.
 * @returns number of ways the given target string can be constructed
 * Time Complexity: O(n^m * m) where n is the length of wordBank and m is the length of target
 * Space Complexity: O(m^2) where m is the length of target
 */
export const count_construct_slow = (target: string, wordBank: string[]): number => {
  if (target === "") return 1;
  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      totalCount += count_construct_slow(suffix, wordBank);
    }
  }
  return totalCount;
};

/**
 * A function that returns number of ways that the target string can be constructed using
 * elements from the wordBank array.
 * @param target the string to generate
 * @param wordBank an array containing the strings to use to generate target.
 * @param memo a memo object to store the results of the function calls.
 * @returns number of ways the given target string can be constructed
 * Time Complexity: O(n * m^2) where n is the length of wordBank and m is the length of target
 * Space Complexity: O(m^2) where m is the length of target
 */
export const count_construct_fast = (
  target: string,
  wordBank: string[],
  memo: Record<string, number> = {}
): number => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      totalCount += count_construct_fast(suffix, wordBank, memo);
    }
  }
  memo[target] = totalCount;
  return totalCount;
};
