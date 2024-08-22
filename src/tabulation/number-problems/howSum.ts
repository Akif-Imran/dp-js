/**
 * A function that returns an array containing the numbers that add up to the targetSum or null if
 * not possible. Using the tabulation approach.
 * @param targetSum the value to get to.
 * @param values an array containing number to choose from to generate targetSum.
 * @returns an array containing the numbers that add up to the targetSum or null if not possible.
 * @complexity
 * m: targetSum
 * n: values.length
 * @time
 * Time: O(n * m * m) => O(n * m^2)
 * @space
 * Space: O(m * m) => O(m^2)
 */
export const howSum = (targetSum: number, values: number[]): number[] => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === null) continue;
    for (let value of values) {
      const index = i + value;
      if (index > targetSum) continue;
      table[index] = [...table[i], value];
    }
  }
  return table[targetSum];
};
