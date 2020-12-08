const canConstructRecurse = (target, wordBank) => {

    if(target === '') {
        return true;
    }

    for( let word of wordBank ) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstructRecurse(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;

};

console.log(canConstructRecurse("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstructRecurse("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstructRecurse("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //true
// console.log(canConstructRecurse("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e", 
//     "ee", 
//     "eee", 
//     "eeee", 
//     "eeeee",
//     "eeeeee"
// ])); //false


const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '')  return true;

    for( let word of wordBank ) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;

};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", 
    "ee", 
    "eee", 
    "eeee", 
    "eeeee",
    "eeeeee"
])); //false

