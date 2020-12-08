const bestSum = (targetSum, numbers) => {

    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const retVal = bestSum(remainder, numbers);
        if(retVal !== null) {
            const combination = [ ...retVal, num ];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 5])); //[3, 5]
console.log(bestSum(8, [1, 4, 5])); //[4, 4]
//console.log(bestSum(100, [1, 2, 5, 25])); //[25, 25, 25, 25]

const bestSumMemoization = (targetSum, numbers, memo={}) => {

    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const retVal = bestSumMemoization(remainder, numbers, memo);
        if(retVal !== null) {
            const combination = [ ...retVal, num ];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
};

console.log(bestSumMemoization(7, [5, 3, 4, 7])); //[7]
console.log(bestSumMemoization(8, [2, 3, 5])); //[3, 5]
console.log(bestSumMemoization(8, [1, 4, 5])); //[4, 4]
console.log(bestSumMemoization(100, [1, 2, 5, 25])); //[25, 25, 25, 25]
console.log(bestSumMemoization(500, [1, 2, 5, 25, 100, 250])); //[250, 250]