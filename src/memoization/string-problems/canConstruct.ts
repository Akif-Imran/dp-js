/**
 * A function that return a boolean indicating whether its possible to generate string using strings
 * from the wordBank array.
 * @param target string to generate
 * @param wordBank list of strings to use to generate the target
 * @returns boolean indicating whether the target can be generated using the wordBank
 */
export const can_construct_slow = (target: string, wordBank: string[]): boolean => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (can_construct_slow(suffix, wordBank)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * A memoized function that returns a boolean indicating whether its possible to generate using string
 * from the wordBank array.
 * @param target string to generate
 * @param wordBank list of strings to use to generate the target
 * @param memo a map structure to store previously computed results.
 * @returns boolean indicating whether the target can be generated using the wordBank
 */
export const can_construct_fast = (
  target: string,
  wordBank: string[],
  memo: Record<string, boolean> = {}
): boolean => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (can_construct_fast(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
