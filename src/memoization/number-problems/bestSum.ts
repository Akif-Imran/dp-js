/**
 * A function that returns an array containing the shortest combination of numbers that add up
 * exactly to the targetSum. If there is no combination possible, it returns null.
 * Time: O(n^m * m)
 * Space: O(m^2)
 * @param targetSum number to get to.
 * @param numbers an array containers number from which to selected the shorted possible combination.
 * @returns number[] containing the shortest combination of numbers that add up to the targetSum
 * or null if not possible.
 */
export const best_sum_slow = (targetSum: number, numbers: number[]): number[] | null => {
  if (targetSum === 0) return [];

  let shortestCombination: number[] | null = null; //uses m additional space in stack in worst case.

  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      const result = best_sum_slow(remainder, numbers); // will explore duplicate sub-trees.

      if (result !== null) {
        const combination = [value, ...result]; //uses m additional time to loop over and copy the array.

        if (shortestCombination === null || combination.length < shortestCombination.length) {
          shortestCombination = combination;
        }
      }
    }
  }
  return shortestCombination;
};

/**
 * A function that returns an array containing the shortest combination of numbers that add up
 * exactly to the targetSum. If there is no combination possible, it returns null.
 * Time: O(n * m^2)
 * Space: O(m^2)
 * @param targetSum number to get to.
 * @param numbers an array containers number from which to selected the shorted possible combination.
 * @param memo a memoization object to store the results of the function.
 * @returns number[] containing the shortest combination of numbers that add up to the targetSum
 * or null if not possible.
 */
export const best_sum_fast = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];

  let shortestCombination: number[] | null = null; //uses m additional space in stack in worst case.

  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      const result = best_sum_fast(remainder, numbers, memo); // will not explore duplicate sub-trees.

      if (result !== null) {
        const combination = [value, ...result]; //uses m additional time to loop over and copy the array.

        if (shortestCombination === null || combination.length < shortestCombination.length) {
          shortestCombination = combination;
        }
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return memo[targetSum];
};
