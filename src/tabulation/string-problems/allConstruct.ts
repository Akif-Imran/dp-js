/**
 * A function that uses tabulation to construct all possible ways to generate the target string from the
 * the given wordBank array.
 * @param target string to get to
 * @param wordBank an array of strings that can be used to construct the target string
 * @returns a 2D array containing all the ways to construct the target string
 * @complexity
 * Let m: target.length n: wordBank.length
 * @time
 * Time: O(n^m)
 * @space
 * Space: O(n^m)
 */
export const allConstruct = (target: string, wordBank: string[]): string[][] => {
  const table: string[][][] = Array.from({ length: target.length + 1 }, () => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const combinations = table[i].map((combination) => [...combination, word]);
        table[i + word.length].push(...combinations);
      }
    }
  }
  return table[target.length];
};
