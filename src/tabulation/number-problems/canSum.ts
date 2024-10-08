/**
 * A function that indicates, using boolean values, if its possible to generate the target number using
 * integer values form the values array.
 * @param targetSum the value to get to.
 * @param values an array of values to choose from to generate the target.
 * @returns true if target can be reached, otherwise false.
 * Time: O(n * m) => O(mn) where n is the target value and m is the length of the values array.
 * Space: O(m)
 * m: the target value
 * n: the length of the values array
 */
export const canSum = (targetSum: number, values: number[]): boolean => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true; //base case for recursive scenario
  for (let i = 0; i <= targetSum; i++) {
    for (let value of values) {
      if (table[i] === true) {
        const index = i + value;
        if (index <= targetSum) table[index] = true;
      }
    }
  }
  return table[targetSum];
};
