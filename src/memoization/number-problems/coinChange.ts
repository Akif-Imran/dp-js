/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coin_change = function (
  coins: number[],
  amount: number,
  memo: Record<number, number> = {}
) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;

  let shortest = -1;
  for (let value of coins) {
    if (value <= amount) {
      const remainder = amount - value;
      const result = coin_change(coins, remainder, memo);
      if (result !== -1) {
        const combination = result + 1;
        if (shortest === -1 || combination < shortest) {
          shortest = combination;
        }
      }
    }
  }
  memo[amount] = shortest;
  return shortest;
};

//[1, 2, 5], 11
export const coin_change_loop = (coins: number[], amount: number) => {
  const mem = new Array(amount + 1).fill(amount + 1);
  mem[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    for (let j = coin; j <= amount; j++) {
      const val = mem[j - coin] + 1;

      if (val < mem[j]) {
        mem[j] = val;
      }
    }
  }

  return mem[amount] > amount ? -1 : mem[amount];
};
//coins = [1, 2, 5]
//coins.length = 3
//amount = 11
// const mem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// i = {0, 1}
//coin = {1, 2}
//j = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,}
//val = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}
//------------------------------------------
// index mem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const mem = [0, 1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//coin = {1, 2}
//j = {2, 3}
//val = {1, 2}
