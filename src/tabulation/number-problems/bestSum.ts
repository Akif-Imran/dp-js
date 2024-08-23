/**
 * A function that finds the shortest combination of number from the numbers array and returns them as an array.
 * @param targetSum the number to get to.
 * @param numbers an array of numbers to choose from to add up to the targetSum.
 * @returns return an array containing the shortest combination of numbers that add up to the targetSum or null if not possible.
 * @complexity
 * Let m = targetSum, n = numbers.length
 * @time
 * Time: O(m^2 * n)
 * @space
 * Space: O(m^2)
 */
type TableEntry = number[] | null;
export const bestSum = (targetSum: number, numbers: number[]): number[] | null => {
  const table: TableEntry[] = Array.from({ length: targetSum + 1 }, () => null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === null) continue; // skip if no valid combination found for current sum.

    for (let num of numbers) {
      const lookAheadIndex = i + num;
      if (lookAheadIndex > targetSum) continue; // skip if lookAheadIndex is out of bounds.

      //Type assertion: table[i] is a number[]. ...(table[index] as number[]) this ensures it as type assertion
      const combination = [...(table[i] as number[]), num]; // (table[i] as number[]) type inference is confused about null in the table array.
      if (table[lookAheadIndex] === null || combination.length < table[lookAheadIndex].length) {
        table[lookAheadIndex] = combination;
      }
    }
  }
  return table[targetSum];
};

//bestSum(8, [2, 3, 5]) => [3, 5]
