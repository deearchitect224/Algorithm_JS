const howSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const retVal = howSum(remainder, numbers);
        if(retVal !== null) {
            return [ ...retVal, num ];
        }
    }
    return null;
};

console.log(howSum(7, [2, 3]));//[3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7]));//[4, 3]
console.log(howSum(7, [2, 4])); //null
console.log(howSum(8, [2, 3, 5])); //[2, 2, 2, 2]
//console.log(howSum(300, [7, 14])); //null

const howSumWithMemoization = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const retVal = howSumWithMemoization(remainder, numbers, memo);
        if(retVal !== null) {
            memo[targetSum] = [ ...retVal, num ]
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
};

console.log(howSumWithMemoization(7, [2, 3]));//[3, 2, 2]
console.log(howSumWithMemoization(7, [5, 3, 4, 7]));//[4, 3]
console.log(howSumWithMemoization(7, [2, 4])); //null
console.log(howSumWithMemoization(8, [2, 3, 5])); //[2, 2, 2, 2]
console.log(howSumWithMemoization(300, [7, 14])); //null