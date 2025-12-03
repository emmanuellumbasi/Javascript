/*
# K-permutations of n (Dutch: "Variation")

K-permutations of n is number of possible ways to we select k unique
element from a set of size n, and we preserve order.
This number can be computed using the following formula:

(n)k = n! // (n-k)!

 Where n! means faculty of n.

Write a program that asks for such and k and n and computes the number
of k-permutations of n.
If either n or k is negative, your program should print ``does not compute```

EXTRA REQUIREMENT: You should minimize the number of computations,
otherwise the program will be to slow for large numbers.
If your program is too slow, the tests will fail.
*/