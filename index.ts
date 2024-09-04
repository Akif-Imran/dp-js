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

// console.log(fib(8));
// console.log(gridTraveler(5, 5));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [5, 3, 4, 7]));
console.log(howSum(2, [5, 3, 4, 7]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(8, [2, 5, 3, 4, 7]));
console.log(howSum(5, [2, 5, 3, 4, 7]));
console.log(howSum(6, [2, 5, 3]));
console.log(howSum(7, [2, 5, 3, 4, 7]));
console.log(howSum(8, [2, 5, 3, 4, 7]));
console.log(howSum(103, [1, 2, 5, 25]));
console.log(howSum(100, [25, 1, 2, 5]));
console.log(howSum(300, [7, 14]));
// console.log(allConstruct("", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
// console.log(allConstruct("eeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
