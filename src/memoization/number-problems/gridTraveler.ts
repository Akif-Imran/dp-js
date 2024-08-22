/**
 * Say that you are a traveler on a 2D grid. You begin in the top-left corner and you goal is
 * to travel to the bottom-right corner. You may only move down or right.
 * In how many ways can you travel to the goal on a grid with dimensions m * n?
 * @param m the number of rows in the grid
 * @param n the number of columns in the grid
 * @returns the number of ways to travel to the goal
 * @example gridTraveler(2, 3) = 3
 */
export const grid_traveler_slow = (m: number, n: number): number => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  return grid_traveler_slow(m - 1, n) + grid_traveler_slow(m, n - 1);
};

/**
 * Memoized implementation of gridTraveler as gridTraveler_fast.
 * @param m the number of rows in the grid.
 * @param n the number of columns in the grid.
 * @param memo (Optional) Default memo object to keep track of traversed subtrees (cached sub problems)
 * @returns the distinct number of ways to travel to the goal.
 */
export const grid_traveler_fast = (
  m: number,
  n: number,
  memo: Record<string, number> = {}
): number => {
  const key = `${m}:${n}`;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  memo[key] = grid_traveler_fast(m - 1, n, memo) + grid_traveler_fast(m, n - 1, memo);
  return memo[key];
};
