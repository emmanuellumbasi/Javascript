/*
# Battleship (partial exam)
Battleship (zeeslag) is a pen-and-paper game played on a field of 10 by 10.
Variables `a` and `b` contain such a field, which is represented in JavaScript as
an array of arrays.

Variable `a` contains the field on which all vessels are marked:
-  `_` implies empty, no vessel;
- a single letter implies a part of vessel;
- no other content is possible.

Variable `b` contains the field on which all attacks are marked:
-  `_` implies no attacks recorded;
- the letter 'x' implies successful attack;
- the letter 'o' implies failed attack;
- no other content is possible.

Write a program that computes two ratios:
- **Damage**: what amount of the fleet has been hit
    (the number of successful attacks divided by
    the total number of vessel(parts));
- **Efficiency**: what amount of the attacks was successful
    (number of successful attacks divided by total number of attacks);

Your programs should print these two ratios. Take a look at the tests to see what the formatting
should look like.

Example output:
Damage: 0.50
Efficiency: 0.50
*/
import io from "../../utils/io-for-pf.js";

const _ = false;
const A = "A";
const B = "B";
const X = "x";
const O = "o";

const a = [
  [_, A, _, _, _, _, _, _, _, _],
  [_, _, A, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, B, _],
  [_, _, _, _, _, _, _, _, B, _],
  [_, _, _, _, _, _, _, _, B, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _]
];
const b = [
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, X, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, O, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, O, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _]
];
