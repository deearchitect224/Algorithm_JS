# Algorithms (using Javascript)

## Dynamic Programming 
### Recursion and Memoization 

In this class of problems - the key is to visualize the problem statement as a tree and recognize repetitions in the sub trees. The repetitions can then be implemented in a brute-force manner as Recursion or with Memoization. We will see the implementations below and compare their time and space complexity.

**What is Recursion?**
>For running repeated code blocks, recursion is a very straightforward and an unintelligent way to do so i.e. it does not remember if that particular computation was already done.

**What is the intuition behind Memoization?**
>The intuition behind memoization is that we use a memo to keep track of previous computations. In certain recursion scenarios, the previously computed values can help save time if cached in memory and reused.

- **Fibonacci Sequence Problem**

Write a function `fib(n)` that takes an number as an argument and returns the n<sup>th</sup> number of the Fibonacci sequence

**What is Fibonacci sequence look like in the tree structure?**
>The 1st and 2nd number of sequence is 1. To generate the next number of the sequence, we sum the previous 2.

fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34...<br>
n	  : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...

>Take the index n as the root node. At any given time, the height of the tree is a maximum of n because you have to keep advancing towards the index 0. The number of branches at any node is a maximum of 2 because we can only add the previous 2 numbers. The time complexity is the total number of nodes in the tree which is 2<sup>n</sup>. The space complexity is the height of the tree which is n.

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(2<sup>n</sup>) | O(n) |
| Memoization | O(n) | O(n) |

- **Grid Traveler Problem**

Write a function `gridtraveler(m,n)` that takes m,n as arguments denoting the mxn grid. It returns the number of moves needed to go from left-top to right-bottom cell.

**What does Grid traveler look like in the tree structure?**
>Imagine you have a 2x2 grid and the starting position is 2,2. The goal is to get to 1,1. In order to go from Start to End cell, you will need to move Right,Down or Down,Right. The same problem can be extended to mxn grid. Note that when you are traversing a mxn grid you will have an identical set of moves to reach the goal as in nxm grid. Take the starting cell as the root node. At any given time, the height of the tree is a maximum of m + n because you have to keep subtracting 1 from m or n to advance towards the goal state. The number of branches at any node is a maximum of 2 because we can only go down or right. The time complexity is the total number of nodes in the tree which is 2<sup>m+n</sup>. The space complexity is the height of the tree which is m+n.

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(2<sup>m+n</sup>) | O(m+n) |
| Memoization | O(m\*n) | O(m+n) |

Next we will go through a logical progression of problems that address a similar problem with variations having increasing levels of complexity. 

- **Can-Sum Problem**

Write a function `canSum(targetSum, arrOfIntegers)` where targetSum is a positive integer and arrOfIntegers is an array of positive integers. It returns true if the targetSum can be formed by adding any combination of the integers from the array. The array values can be used as many times as needed. It can be assumed that the targetSum will never be a negative number.

In this series of problems, this first flavor targets on answering the question: "Can you do it? yes / no?" In other words this is a ***Decision Problem***.

**What does canSum look like in the tree structure?**
>Take the targetSum as the root node. Let's denote that number as m and the size of arrOfIntegers as n. You can subtract every number from the arrOfIntegers to go to the next level. This means that at any given time, the height of the tree is a maximum of m. The number of branches at any node is a maximum of n. The time complexity is the total number of nodes in the tree which is n<sup>m</sup>. The space complexity is the height of the tree which is m.

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(n<sup>m</sup>) | O(m) |
| Memoization | O(m\*n) | O(m) |

- **How-Sum Problem**

Write a function `howSum(targetSum, arrOfIntegers)` where targetSum is a positive integer and arrOfIntegers is an array of positive integers. It returns the array containing combination of elements that add up to exactly the targetSum. If there is no combination that adds up to targetSum then return null. If there are multiple combinations, then return any single one. 

The array values can be used as many times as needed. It can be assumed that the targetSum will never be a negative number.

In this series of problems, this second flavor targets on answering the question: "How will you do it?" In other words this is a ***Combinatoric Problem***.

**What does howSum look like in the tree structure?**
>Take the targetSum as the root node. Let's denote that targetSum as m and the size of arrOfIntegers as n. You can subtract every number from the arrOfIntegers to go to the next level. This means that at any given time, the height of the tree is a maximum of m. The number of branches at any node is a maximum of n. The time complexity is the total number of nodes in the tree which is n<sup>m</sup> plus the time it takes to replicate the child array every single iteration - which happens up to m times. The space complexity is the height of the tree which is m.
>Note that in the memoized implementation, we cut down on the brute force time complexity, but we increase space complexity due to storage. Time complexity goes from exponential to polynomial. The space complexity goes from linear to polynomial / quadratic. 
>Note that this is so similar to the canSum tree except we are not returning boolean from every child node. Instead we are returning the edge to be pushed into the result array. If the canSum leaf node resulted in a dead-end (false) in this case it should return null. The canSum leaf node that resulted in 0 will return an empty array which then can be modified to push the edge value while bubbling up the tree all the way to the root node. 

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(n<sup>m</sup> \* m) | O(m) |
| Memoization | O(n\*m<sup>2</sup>) | O(m<sup>2</sup>) |

- **Best-Sum Problem**

Write a function `bestSum(targetSum, arrOfIntegers)` where targetSum is a positive integer and arrOfIntegers is an array of positive integers. It returns the array containing **shortest** combination of elements that add up to exactly the targetSum. If there is a tie for the shortest combination, you may return any one of the shortest. 

The array values can be used as many times as needed. It can be assumed that the targetSum will never be a negative number.

In this series of problems, this third flavor targets on answering the question: "What is the 'best' way do it?" In other words this is a variation of ***Optimization Problem***.

**What does bestSum look like in the tree structure?**
>This problem is very much similar to the howSum. The difference is that we will have to do an exhaustive search in our tree to find the answer with shortest combination in this case. We cannot just return when we find atleast one match. Since we are going to store every combination in the tree, our space complexity becomes m\*m or m<sup>2</sup> even in brute force case.

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(n<sup>m</sup> \* m) | O(m<sup>2</sup>) |
| Memoization | O(n\*m<sup>2</sup>) | O(m<sup>2</sup>) |

- **Can-Construct Problem**

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings. It should return a boolean indicating whether or not the target can be constructed the elements of the `wordBank` array. You may reuse elements of the `wordBank` array as many times as needed. 

Here - when we start thinking about the solution, we can see that - the shorter the target string, the easier it is to solve. For e.g. if the target string is an empty string, then the answer must always be true. This could be one of our base case(s). 

**What does canConstruct look like in the tree structure?**
Imagine that we are starting off with the target string as our root node. Our goal is to keep removing the strings found in the wordBank until we are left with the base case of empty string. If we follow that path and hit the base case, then that means - the wordBank allows the creation of the target string. 

<span style="color:red">*CAUTION*:</span>
When you are traversing the tree branching using the wodBank strings, DO NOT remove the strings from the middle of the target. If you do, then you will end up creating new adjacencies that are not correct based on the given target string. So take caution to NOT fall in this trap. 

The logic we want to follow is - only branch to child when you find a "Matching Prefix" in the wordBank. This will allow you to only look for valid contiguous set of characters. 

***Consider the complexity analysis of Recursion***
>m = target.length
>n = wordBank.length
>height of the tree will be utmost = m
>branching factor of the tree will be related to the number of words in the wordBank i.e. = n
>**The time complexity**  of traversing the tree by brute force would be (branching factor<sup>height</sup>) i.e. O(n<sup>m</sup>)
>This is because for each node (target or suffix), assume you have n matching prefixes, then every level of the tree we will have to keep multiplying by n until we reach the leaf node. 
>Additionally you will need to consider the "slicing" operation. This will act on the target string. So every iteration you will need to perform m operations. Therefore time complexity further becomes O(n<sup>m</sup> \* m)
>**The space complexity** is really the height of this tree i.e. O(m). We also need to make sure if we have any other growing structure. The slice returns a new string in every iteration. Therefore the space complexity becomes O(m<sup>2</sup>).

***Consider the complexity analysis after Memoization***
>When we memoize, we do not have to traverse the entire subtrees. Whenever we encounter the subtree, we can just short circuit and fetch from the memo object. So, at the cost of adding an additional m size data structure, we go from an exponential time complexity to a polynomial. Remember that we still had an m factor due to slicing and that still holds good. So the **time complexity after memoization** now becomes O(n \* m<sup>2</sup>)
>The **space complexity after memoization** still remains polynomial i.e. O(m<sup>2</sup>).

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(n<sup>m</sup> \* m) | O(m<sup>2</sup>) |
| Memoization | O(n\*m<sup>2</sup>) | O(m<sup>2</sup>) |

- **Count-Construct Problem**

Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings. It should return the `total number of ways`  that the target can be constructed by concatenating the elements of the `wordBank` array. You may reuse elements of the `wordBank` array as many times as needed. 

Here - we cannot do an early return anymore as soon as we find a way to form the target string, but we have to actually count the number of ways it can be done using the words in the wordBank. We can visualize the logic slightly differently - i.e. instead of returning true / false at the base case(s), we can return the count. For e.g. in the base case where the suffix can no more be broken down, we can return a zero. For the base case of empty string, we need to return a 1. We can visualize then bubbling up these values and adding them up at the parent. 	

**What does countConstruct look like in the tree structure?**
Imagine that we are starting off with the target string as our root node. Our goal is to keep removing the strings found in the wordBank until we are left with the base case of empty string. If we follow that path and hit the base case, then that means - the wordBank allows the creation of the target string. 

<span style="color:red">*CAUTION*:</span>
When you are traversing the tree branching using the wodBank strings, DO NOT remove the strings from the middle of the target. If you do, then you will end up creating new adjacencies that are not correct based on the given target string. So take caution to NOT fall in this trap. 

The logic we want to follow is - only branch to child when you find a "Matching Prefix" in the wordBank. This will allow you to only look for valid contiguous set of characters. 

***Consider the complexity analysis of Recursion***
>m = target.length
>n = wordBank.length
>height of the tree will be utmost = m
>branching factor of the tree will be related to the number of words in the wordBank i.e. = n
>**The time complexity**  of traversing the tree by brute force would be (branching factor<sup>height</sup>) i.e. O(n<sup>m</sup>)
>This is because for each node (target or suffix), assume you have n matching prefixes, then every level of the tree we will have to keep multiplying by n until we reach the leaf node. 
>Additionally you will need to consider the "slicing" operation. This will act on the target string. So every iteration you will need to perform m operations. Therefore time complexity further becomes O(n<sup>m</sup> \* m)
>**The space complexity** is really the height of this tree i.e. O(m). We also need to make sure if we have any other growing structure. The slice returns a new string in every iteration. Therefore the space complexity becomes O(m<sup>2</sup>).

***Consider the complexity analysis after Memoization***
>When we memoize, we do not have to traverse the entire subtrees. Whenever we encounter the subtree, we can just short circuit and fetch from the memo object. So, at the cost of adding an additional m size data structure, we go from an exponential time complexity to a polynomial. Remember that we still had an m factor due to slicing and that still holds good. So the **time complexity after memoization** now becomes O(n \* m<sup>2</sup>)
>The **space complexity after memoization** still remains polynomial i.e. O(m<sup>2</sup>).

| Implementation | Time Complexity | Space Complexity |
| ----------- | ----------- | ----------- |
| Recursion | O(n<sup>m</sup> \* m) | O(m<sup>2</sup>) |
| Memoization | O(n\*m<sup>2</sup>) | O(m<sup>2</sup>) |


**Alvin's Memoization Recipe**
Always follow the below steps. Do not try to jump to the all correct and efficient solution at the outset. First implement a code with brute-force that correctly solves the problem. Then you can apply the efficiency aspect to it. 

1. Make it work
- Visualize the problem as a tree
- Implement the tree using basic brute-force recursion
- test it for correctness (or course it might be slow for larger inputs)

2. Make it efficient
- Add a memo object
- Add a base case to return memo values
- Store return values into the memo object

Many thanks to [FreeCodeCamp.org](https://www.youtube.com/watch?v=oBt53YbR9Kk)

