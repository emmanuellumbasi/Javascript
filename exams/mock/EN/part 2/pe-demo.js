// Place this file in the (new) folder "pe" inside the "exercises" folder.
// Place the test file in the "test" folder, next to the other test files.

/*

For this exercise, the intermediate results are just as important as the final result.
Even if it would be more efficient to do two parts at once, follow the assignment and
implement the parts separately.

# Part 1: the input
Write a program that asks the user for an integer between 1 and 5.
Create an array that has the same length as the given number, filled with zeros.
If the user enters a number outside this interval or something that is not a number,
then make an array of length 5 instead.
Also print this array.

Examples:
> 3
[0, 0, 0]

> 0
[0, 0, 0, 0, 0]

> stop
[0, 0, 0, 0, 0]

# Part 2: the processing

**Replace** all zeros in the array with the letters of the string `"abcde"` (in order, as far as there is space).

**Important:** The exercise says *replace*, so you must modify the original array and you are **not allowed** to create a new array that replaces the original one.

Example output:
["a", "b", "c"]
["a", "b", "c", "d", "e"]
["a", "b", "c", "d", "e"]


# Part 3: the output

Ask the user to provide a number.
Print "the nth element" (human count) from this array.
If the position does not exist, print "Invalid position".

Example:
> 2
b

Example 2:
> 0
Invalid position

Example 3:
> four
Invalid position
*/ 

import io from "../../utils/io-for-pf.js";
import {createArray} from "../../utils/array-utils.js";

