// snake-case represent memoization functions to solve the problem.
//camel-case represents tabulation approach function to the same problem

const howSum = (
  target: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (target in memo) return memo[target];
  if (target === 0) return [];

  for (let num of numbers) {
    if (num > target) continue;
    const remainder = target - num;
    const result = howSum(remainder, numbers, memo);

    if (result !== null) {
      const combination = [num, ...result];
      memo[target] = combination;
      return combination;
    }
  }

  memo[target] = null;
  return null;
};

const howSum_tabulation = (target: number, numbers: number[]): number[] | null => {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    for (let num of numbers) {
      if (table[i] === null) continue;
      const index = i + num;

      if (index > target) continue;
      table[index] = [...table[i], num];
    }
  }

  return table[target];
};

const fib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

const fibTabulation = (n: number) => {
  const table = Array.from({ length: n + 1 }, () => 0);
  table[1] = 1;
  for (let i = 1; i <= n; i++) {
    if (i + 1 <= n) table[i + 1] += table[i];
    if (i + 2 <= n) table[i + 2] += table[i];
  }
  return table[n];
};
console.log(fibTabulation(3));
// console.log(gridTraveler(5, 5));
// console.log(howSum_tabulation(7, [5, 3, 4, 7]));
// console.log(howSum_tabulation(7, [2, 4])); //null
// console.log(howSum_tabulation(8, [5, 3, 4, 7]));
// console.log(howSum_tabulation(2, [5, 3, 4, 7])); //null
// console.log(howSum_tabulation(7, [5, 3, 4, 7]));
// console.log(howSum_tabulation(8, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(5, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(6, [2, 5, 3]));
// console.log(howSum_tabulation(7, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(8, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(103, [1, 2, 5, 25]));
// console.log(howSum_tabulation(100, [25, 1, 2, 5]));
// console.log(howSum_tabulation(300, [7, 14]));
// console.log(allConstruct("", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
// console.log(allConstruct("eeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
