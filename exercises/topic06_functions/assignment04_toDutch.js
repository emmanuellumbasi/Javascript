/*
# To Dutch
Write the function`toDutch`, such that all tests succeed.

The key of this exercise is to start small: make your
function work for simple and small input.
E.G., make your `toDutch` function first for digits,
than for 2-digit numbers, etc.

We stop at 'biljard' because then JS looses precision.
(https://eslint.org/docs/latest/rules/no-loss-of-precision)

Just like in the previous exercises the key is to reuse existing functions.
On exams, you are expected to do these refactorings (extract and reuse code) even when you are not explicitly asked to do so.

*If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.

If you need an integer division (which does not exist in JavaScript), however,
you can simulate it by doing a regular (decimal) division, and then "round the result to the floor" (naar beneden afronden).
This can be done in JavaScript using `Math.floor(x/y)`. There is no need to implement `Math.floor` yourself.
*
*/

const SMALL = [
  /*"nul", "een", "twee", "drie", "vier",
  "vijf", "zes", "zeven", "acht", "negen",

  "tien", "elf", "twaalf", "dertien", "veertien",
  "vijftien", "zestien", "zeventien", "achttien", "negentien"*/
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

const TENS = [/*"nul", "tien", "twintig", "dertig", "veertig",
  "vijftig", "zestig", "zeventig", "tachtig", "negentig"*/
    "zero", "ten", "twenty", "thirty", "forty",
  "fifty", "sixty", "seventy", "eighty", "ninety"];

const SCALES = [/*"een", "tien", "honderd", "duizend ", " miljoen ",
  " miljard ", " biljoen ", " biljard "*/
  "one", "ten", "hundred", "thousand ", " million ",
    " billion ", " trillion ", " quadrillion "];

function toEnglish19(n) {
  return SMALL[n];
}

function toEnglish99(n) {
  let res = "";
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  if(tens >= 2) {
    res = TENS[tens];
    if (ones > 0) res += " " + toEnglish19(ones);
  }
  else
    res = toEnglish19(n);
  return res;
}

function toEnglish999(n) {
  let res = "";
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  if(hundreds >= 1) {
    res = SMALL[hundreds] + " hundred";
    if (rest > 0) res += " and " + toEnglish99(rest);
  }
  else
    res = toEnglish99(n);
  return res;
}

function toEnglish999999(n) {
  let res = "";
  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;
  if(thousands >= 1) {
    res = toEnglish999(thousands) + " thousand";
    if (rest > 0) res += " and " + toEnglish999(rest);
  }
  else
    res = toEnglish999(n);
  return res;
}

for (let i = 999999; i <= 999999; i++) {
  console.log(i + " " + toEnglish999999(i));
}

function toDutch() {
}

export { toDutch };
