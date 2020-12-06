const gridtraveler = (m,n) => {
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
    return gridtraveler(m-1, n) + gridtraveler(m , n-1);
};

console.log(gridtraveler(2,3));
console.log(gridtraveler(3,2));
//console.log(gridtraveler(10,20));

const gridtravelerWithMemoization = (m,n, memo={}) => {
    let key = m + ',' + n;
    if(key in memo) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
    memo[key] = gridtraveler(m-1, n) + gridtraveler(m , n-1);
    return memo[key];
};

console.log(gridtravelerWithMemoization(2,3));
console.log(gridtravelerWithMemoization(3,2));
console.log(gridtravelerWithMemoization(10,20));
//console.log(gridtravelerWithMemoization(100,80));


