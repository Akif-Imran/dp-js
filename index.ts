// snake-case represent memoization functions to solve the problem.
//camel-case represents tabulation approach function to the same problem

import { bestSum } from "./src";

// console.log(fib(8));
// console.log(gridTraveler(5, 5));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [5, 3, 4, 7]));
// console.log(howSum(2, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 5, 3, 4, 7]));
console.log(bestSum(5, [2, 5, 3, 4, 7]));
console.log(bestSum(6, [2, 5, 3]));
console.log(bestSum(7, [2, 5, 3, 4, 7]));
console.log(bestSum(0, [2, 5, 3, 4, 7]));
console.log(bestSum(100, [1, 2, 5, 25]));
console.log(bestSum(100, [25, 1, 2, 5]));
