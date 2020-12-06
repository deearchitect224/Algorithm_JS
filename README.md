# Algorithms Javascript

## Dynamic Programming
### Recursion and Memoization

Write a function `fib(n)` that takes an number as an argument and returns the n-th number of the Fibonacci sequence

What is Fibonacci sequence?
> The 1st and 2nd number of sequence is 1. To generate the next number of the sequence, we sum the previous 2.
> fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34...
> n		  : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...

What is Recursion?
For running repeated code blocks, recursion is a very straightforward and an unintelligent way to do so i.e. it does not remember if that particular computation was already done.

What is the intuition behind Memoization?
The intuition behind memoization is that we use a memo to keep track of previous computations. In certain recursion scenarios, the previously computed values can help save time if cached in memory and reused.

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(2<sup>n</sup>) | O(n) |
| Memoization | O(n) | O(n) |



