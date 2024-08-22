/**
 * Standard implementation of the fibonacci function.
 * @param n position of the value in the fibonacci sequence to calculate
 * @returns return the number at the nth position in the fibonacci sequence
 */
export const fib_slow = (n: number): number => {
  if (n <= 2) return 1;
  return fib_slow(n - 1) + fib_slow(n - 2);
};

/**
 * Memoized implementation of the fibonacci function.
 * @param n position of the value in the fibonacci sequence to calculate
 * @param memo memo object to store calculated values. (optional)
 * @returns return the number at the nth position in the fibonacci sequence
 */
export const fib_fast = (n: number, memo: { [key: number]: number } = {}): number => {
  // Time: O(2^n) - exponential, Space: O(n) -- basic implementation
  // Time: O(n), Space: O(n) -- memoized implementation
  if (n <= 0) {
    return 0;
  }
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib_fast(n - 1, memo) + fib_fast(n - 2, memo);
  return memo[n];
};

// console.log(fib_fast(50));

/**
 * Standard implementation
 * Time: O(2^n) - exponential, Space: O(n)
 *
 * fib(5)
 * |
 * |-- fib(4)
 * |   |
 * |   |-- fib(3)
 * |   |   |
 * |   |   |-- fib(2)
 * |   |   |
 * |   |   |-- fib(1)
 * |   |
 * |   |-- fib(2)
 * |
 * |-- fib(3)
 *     |
 *     |-- fib(2)
 *     |
 *     |-- fib(1)
 */

/**
   * memoized implementation tree structure
   * Time: O(n), Space: O(n)
   *
   *
  fib(5)
  |
  |-- fib(4)
  |   |
  |   |-- fib(3)
  |   |   |
  |   |   |-- fib(2) = 1
  |   |   |
  |   |   |-- fib(1) = 1
  |   |
  |   |-- fib(2) = 1
  |
  |-- fib(3) = 2 (memoized)
  */
