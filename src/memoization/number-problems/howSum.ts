/**
 * A function to calculate how the targetSum is possible from the given numbers array, returns number[]
 * or null if not possible to generate targetSum.
 * @param targetSum number to get to
 * @param numbers an array of number from which to choose to add up to the targetSum
 * @returns number[] containing the numbers that add up to the targetSum or null if not possible.
 */
export const how_sum_slow = (targetSum: number, numbers: number[]): number[] | null => {
  if (targetSum === 0) return [];
  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      const result = how_sum_slow(remainder, numbers);
      if (result !== null) {
        result.push(value);
        return result;
      }
    }
  }

  return null;
};

/**
 * A function to calculate how the targetSum is possible from the given numbers array, returns number[]
 * or null if not possible to generate targetSum. This function memoizes the sub-problems to reduce
 * duplicate exploration.
 * @param targetSum number to get to.
 * @param numbers an array of number from which to choose to add up to the targetSum.
 * @param memo key value store for memoization.
 * @returns number[] containing the numbers that add up to the targetSum or null if not possible.
 */
export const how_sum_fast = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      let result = how_sum_fast(remainder, numbers, memo);
      if (result !== null) {
        memo[targetSum] = [...result, value];
        console.log(memo);
        return memo[targetSum];
      }
    }
  }
  memo[targetSum] = null;
  return null;
};
/* 
export const howSum_fast_2 = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  for (let value of numbers) {
    if (value <= targetSum) {
      const remainder = targetSum - value;
      let result = howSum_fast(remainder, numbers, memo);
      if (result !== null) {
        result.push(value);
        //wrong approach, copy of array should be stored. instead of using same references.
        memo[targetSum] = result;
        console.log(memo);
        return memo[targetSum];
      }
    }
  }
  memo[targetSum] = null;
  return null;
}; 
*/
