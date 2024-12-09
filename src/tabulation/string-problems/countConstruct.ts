/**
 * A function that uses the tabulation strategy to count then number of ways the target string
 * can be constructed using string from the wordBank array.
 * @param target string to get to
 * @param wordBank an array of strings that can be used to construct the target
 * @returns number of ways to construct the target from the wordBank
 * @complexity
 * Let m: target.length Let n: wordBank.length
 * @time
 * Time: O(m^2 * n)
 * @space
 * Space: O(m)
 */
export const countConstruct = (target: string, wordBank: string[]) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
};
