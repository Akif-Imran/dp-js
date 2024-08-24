/**
 * This function uses tabulation to solve the problem of whether the target string can be constructed
 * using the words in the wordBank array.
 * @param target string to get to
 * @param wordBank an array of strings that can be used to construct the target string
 * @returns true if the target string can be constructed from the wordBank, false otherwise
 * @complexity
 * Let m: target.length
 * Let n: wordBank.length
 * @time
 * Time: O(m^2 * n)
 * => m:string comparison.
 * m: looping the table of target.length roughly.
 * n: looping the wordBank
 * @space
 * Space: O(m)
 * => just need to store the table of roughly target.length
 */
export const canConstruct = (target: string, wordBank: string[]): boolean => {
  const table: boolean[] = Array(target.length + 1).fill(false);

  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === false) continue;

    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] = true;
      }
    }
  }
  return table[target.length];
};
