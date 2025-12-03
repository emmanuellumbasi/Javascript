<table >
<tr><th colspan="3"><h1> Partial Exam Programming Fundamentals</h1></th></tr>
	<tr><td colspan="3"></td></tr>
	<tr><td rowspan="8">
	</td><td colspan="2">
Bachelor in Applied Computer Science<br>
Bachelor in Cyber Security
</td></tr>
	<tr><td>Academic Year</td><td>2025-2026</td></tr>
	<tr><td>Semester</td><td>1</td></tr>
	<tr><td>Session</td><td>1</td></tr>
	<tr><td>Module</td><td>Programming Fundamentals</td></tr>
	<tr><td>Date and Time</td><td>3/11/2023 13:30 &rarr; 17:30</td></tr>
	<tr><td>Lecturer</td><td>De Wael Mattias</td></tr>
</table>

# Structure and Format of the Exam

Two parts: first, a part on LEHO in lockdown browser
(can also be on paper, depending on organizational reasons),
then a part in your favorite IDE (usually WebStorm).

Part two is exactly what we do in the lab sessions (with or without tests for verification).
At first sight, part one does not seem like what we do in the lab sessions, but actually, it is.
Due to the different question format, we can test specific aspects that are difficult or impossible to test
in an *open exercise*.

## Types of Questions in the LEHO Part:

1. In *Predict the output*, we check if you can read and interpret code, even in the case of details or quirks.<br>
    *you should also be able to do this in an open exercise, but we cannot test it in that format*
2. In *Coffee Stain*, we mainly look for starting values, end conditions, correct operators, ...<br>
   *you could also test this in an open exercise, but to test it sufficiently, the exercise would become too large and take too long*
3. In *Program Structure*, we check if you can find the correct structure to solve a programming problem.<br>
   *you could also test this in an open exercise, but to test it sufficiently, we’d need 5–15 exercises. Then the exam would be far too long.*
4. In *Show you know*, we check whether you can *talk* about (your) code using the correct terminology.<br>
   *you could also test this in an open exercise, by linking it to an oral explanation of your code, but that’s not feasible organizationally in the first year.*

So we test the same competencies, but in a different way.

## Possible Answers

### Predict the output

In *Predict the output*, you get a code snippet for which you must predict
the output. Each snippet stands on its own; there is no connection between snippets.
You may always assume a correct import of `io`.

The output is the exact output of the program. If an error occurs,
you give all output up to the moment of the error, followed by `ERROR`.  
If you **cannot** determine the answer, write `UNDETERMINED: <reason with keywords>`.  
Do not confuse this with `undefined`, which can simply be (part of) the output.

#### Example Answers

- ```1+2+3+4```
- ```["a","b","c"]```
- ```1+undefined+2```
- ```[1,2,3] ERROR```
- ```UNDETERMINED: addition only on Thursdays```

#### Not:
- ```A bunch of numbers from 1 to 4 will be printed```
- ```a b and c in array```
- ```UNDETERMINED: something undetermined will happen```
- ```Doesn’t work```
- ```undefined```

### Coffee Stain

In *Coffee Stain*, you get perfect programs with stains.
You fill in the stains so that the program does what is asked/intended.

io.write("All numbers from 0 up to and including 9: ");
for (let i = ███; i ███ 9; i++) {
io.write(i);
}


You fill in the stain with the correct expression, in this case `0` and `<=`.
Nothing more, nothing less.

### Program Structure

In *Program Structure*, you get a problem statement as you are used to
from the lab sessions. You also get (a sheet) showing various program structures
(combinations of sequence–iteration–selection). Each `while` can also be a `for`.
You choose the correct program structure, which will have a letter, and fill that in.

I want a program that calculates the sum of all numbers from 1 to 100.
You then choose, for example:

A) while (condition) { ... }
B) if (condition) { ... }


The answer is then `A`.

### Show you know

In *Show you know*, you get a code snippet and a few questions about it.
You must answer the questions with the correct terminology or with a simple answer
such as a line number, variable name, count, ...

About `let x = ["a", 1, true]`, I can ask:

- on which index is the `boolean` value? Then the answer is `2`;
- what is the length of this array? Then the answer is `3`;
- what is the data type of the first element (human count)? Then the answer is `string`;
- `x` is an array, but what else can you say about it? Then the answer is `heterogeneous`;
- ...

## Mock Exam

Take this mock exam in lockdown browser on LEHO as
preparation for the real exam. Print this assignment and the snippet files,
since you cannot access them during the mock exam.
During the real exam, you will receive these materials from us.

The questions are similar in form and answer to those on the real exam,
but the difficulty level **is higher on the real exam**.
See the examples discussed in class.

### Predict the output

Question 1:
const x = [5];
io.write(x[1]);

Question 2:
const x = [[5]];
io.write(x[1].length);

### Coffee stain

const tableOf = parseInt(io.read());
io.write("Table of " + tableOf + ": ");
for (let i = 0; i <= 10; █3█) {
io.write(i + " x " + tableOf + █4█ + (i * tableOf));
}


### Program Structure

See snippets.

Question 5: If it rains, I want to jump up and down four times.

Question 6: I want to ask for input until I get a number that equals 100.
Then I want to print "finally" as many times as it took the user
to enter the number 100.

### Show you know

01 let x = ["a", 1, true];
02 x.push(3.14);
03 const y = x.pop();

Question 7: On which line does the length of the array increase?

Question 8: How many variables are defined in this code snippet?
