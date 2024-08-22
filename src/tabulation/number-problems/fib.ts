/**
 * A function that calculates the nth fibonacci number using tabulation strategy.
 * @param n the position of fibonacci number to calculate.
 * @returns number that represents the fibonacci number at nth position.
 * Time: O(n), Space: O(n)
 */
export const fib = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    if (i + 1 <= n) table[i + 1] += table[i];
    if (i + 1 <= n) table[i + 2] += table[i];
  }
  return table[n];
};
