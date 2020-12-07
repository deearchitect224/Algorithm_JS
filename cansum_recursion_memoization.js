const canSum = (targetSum, arrInput) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    
    for(let num of arrInput) {
        const remainder = targetSum - num;
        if(canSum(remainder, arrInput) === true) {
            return true;
        }
    }

    return false;

};

console.log(canSum(7, [2, 3])); //true
console.log(canSum(8, [2, 3, 5, 8])); //true
console.log(canSum(10, [2, 3, 5, 7])); //true
console.log(canSum(7, [2, 4])); //false
//console.log(canSum(300, [7, 14])); //false

const canSumWithMemoization = (targetSum, arrInput, memo={}) => {

    const key = targetSum;
    if(key in memo) return memo[key];

    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    
    for(let num of arrInput) {
        const remainder = targetSum - num;
        if(canSum(remainder, arrInput, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;

};

console.log(canSumWithMemoization(7, [2, 3])); //true
console.log(canSumWithMemoization(8, [2, 3, 5, 8])); //true
console.log(canSumWithMemoization(10, [2, 3, 5, 7])); //true
console.log(canSumWithMemoization(7, [2, 4])); //false
console.log(canSumWithMemoization(300, [7, 14])); //false
