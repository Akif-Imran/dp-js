/**
 * canSum function return a boolean value if targetSum is possible using numbers in the given array.
 * @param targetSum number to get to.
 * @param numbers array of numbers to choose from to add up to the targetSum.
 * @returns true if the targetSum can be formed by adding numbers from the numbers array otherwise false.
 */
export const can_sum_slow = (targetSum: number, numbers: number[]): boolean => {
  if (targetSum === 0) return true;
  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      if (can_sum_slow(remainder, numbers) === true) {
        return true;
      }
    }
  }
  return false;
};

/**
 * return a boolean indicating if targetSum is possible from the numbers array.
 * @param targetSum number to get to.
 * @param numbers an array of numbers.
 * @param memo Memo object to store the results of the visited sub-problems.
 * @returns true if targetSum can be formed by adding numbers from the numbers array otherwise false.
 */
export const can_sum_fast = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, boolean> = {}
): boolean => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;

  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      if (can_sum_fast(remainder, numbers, memo) === true) {
        memo[targetSum] = true;
        return true;
      }
    }
  }
  memo[targetSum] = false;
  return false;
};
