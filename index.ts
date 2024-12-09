// snake-case represent memoization functions to solve the problem.
//camel-case represents tabulation approach function to the same problem

export const canSumFast = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, boolean> = {}
) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  for (let num of numbers) {
    if (num > targetSum) continue;
    const remainder = targetSum - num;
    if (canSumFast(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

export const howSumFast = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  for (let num of numbers) {
    if (num > targetSum) continue;
    const combination = howSumFast(targetSum - num, numbers, memo);
    if (combination !== null) {
      const newCombination = [num, ...combination];
      memo[targetSum] = newCombination;
      return newCombination;
    }
  }
  memo[targetSum] = null;
  return null;
};

export const bestSumFast = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];

  let shortestCombination: number[] | null = null;

  for (let num of numbers) {
    if (num > targetSum) continue;

    const result = bestSumFast(targetSum - num, numbers, memo);
    if (result !== null) {
      const combination = [num, ...result];
      if (shortestCombination === null || shortestCombination.length > combination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
// console.log(fibTabulation(3));
// console.log(gridTraveler(5, 5));
console.log(bestSumFast(7, [5, 3, 4, 7]));
console.log(bestSumFast(7, [2, 4])); //null
console.log(bestSumFast(8, [5, 3, 4, 7]));
console.log(bestSumFast(2, [5, 3, 4, 7])); //null
// console.log(howSum_tabulation(7, [5, 3, 4, 7]));
// console.log(howSum_tabulation(8, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(5, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(6, [2, 5, 3]));
// console.log(howSum_tabulation(7, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(8, [2, 5, 3, 4, 7]));
// console.log(howSum_tabulation(103, [1, 2, 5, 25]));
// console.log(howSum_tabulation(100, [25, 1, 2, 5]));
console.log(howSumFast(300, [7, 14]));
// console.log(allConstruct("", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
// console.log(allConstruct("eeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
