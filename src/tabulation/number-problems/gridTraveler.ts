/**
 * Given two positive integers m and n, this function calculates the number of distinct ways to travel
 * from the top-left corner to the bottom-right corner of an m x n grid. The allowed moves are to move
 * one square down or one square right using tabulation strategy.
 * @param m represents number of rows in the grid.
 * @param n represents number of columns in the grid.
 * @returns a number representing the number of distinct ways to travel from the top-left corner to the bottom-right corner of the grid.
 * Time complexity: O(mn)
 * Space complexity: O(mn)
 */
export const gridTraveler = (m: number, n: number): number => {
  const table: number[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  table[1][1] = 1;
  for (let row = 1; row <= m; row++) {
    for (let col = 1; col <= n; col++) {
      if (col + 1 <= n) table[row][col + 1] += table[row][col];
      if (row + 1 <= m) table[row + 1][col] += table[row][col];
    }
  }
  return table[m][n];
};
