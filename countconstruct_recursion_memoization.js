const countConstructRecurse = (target, wordBank) => {

    if(target === "") return 1;

    let totalCount = 0;

    for( let word of wordBank ) {
        if(target.indexOf(word) === 0) {
            const numWaysToFormSubTargets = countConstructRecurse(target.slice(word.length), wordBank)
            totalCount += numWaysToFormSubTargets;
        }
    }

    return totalCount;
};

console.log(countConstructRecurse("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstructRecurse("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstructRecurse("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0
console.log(countConstructRecurse("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //4
// console.log(countConstructRecurse("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e", 
//     "ee", 
//     "eee", 
//     "eeee", 
//     "eeeee",
//     "eeeeee"
// ])); //0

const countConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === "") return 1;

    let totalCount = 0;

    for( let word of wordBank ) {
        if(target.indexOf(word) === 0) {
            const numWaysToFormSubTargets = countConstruct(target.slice(word.length), wordBank, memo)
            totalCount += numWaysToFormSubTargets;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", 
    "ee", 
    "eee", 
    "eeee", 
    "eeeee",
    "eeeeee"
])); //0



