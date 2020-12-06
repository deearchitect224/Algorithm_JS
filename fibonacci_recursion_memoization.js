const fib = (n) => {
    if(isNaN(n)) {
         return "Error. Only numeric params expected";
    }
    if(n <= 2) {
        return 1;
    } 
    return fib(n-1) + fib(n-2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));

const fibWithMemoization = (n, memo={}) => {
    if(isNaN(n)) {
         return "Error. Only numeric params expected";
    }
    if(n <= 2) {
        return 1;
    } 
    
    if(n in memo) return memo[n];
    else memo[n] = fibWithMemoization(n-1, memo) + fibWithMemoization(n-2, memo);
    return memo[n];
};

console.log(fibWithMemoization(6));
console.log(fibWithMemoization(7));
console.log(fibWithMemoization(8));
console.log(fibWithMemoization(100));


