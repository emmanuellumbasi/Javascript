/*
# Oh-point-three
Write a program that takes two numbers (`float`) as input.
The program outputs `equal` if the sum of both numbers equals 0.3 or
`not equal` in the other case.

**Hint:** reflect on how a computer stores decimal numbers when
your program behaves unexpectedly.

## Examples:
    > 0.5
    > -0.2
    equal

    > 0.3
    > 0
    equal

    > 0.4
    > -0.2
    not equal
*/
//1.2345 -> 0.12345 x 10 ^ 1 -> mantissa 12345 power 1
//123.45 -> 0.12345 x 10 ^ 3 -> mantissa 12345 power 3
//NEVER store money in floating point!
//NEVER use === or !== with floating point (you can however use < > <= >=)
