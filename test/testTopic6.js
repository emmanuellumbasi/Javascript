import assert from "assert";

import fs from "fs";

import { avg,factorial, gcd, largestPrime, swapDigits, variation}
  from "../exercises/topic06_functions/assignment01_remake.js";

import { isAlpha, isDigit, isInt, toLower, toUpper, trim }
  from "../exercises/topic06_functions/assignment02_strings.js";

import {reverse, isPalindrome, substringOfLength, find, findAll, replace, decompose}
  from "../exercises/topic06_functions/assignment03_strings2.js";

import { toDutch }
  from "../exercises/topic06_functions/assignment04_toDutch.js";

import { isLeapYear, numberOfDaysInYear, numberOfDaysInMonth, numberOfDay , dayDifference}
  from "../exercises/topic06_functions/assignment05_dates.js";

import {extreme, shiftToPositive, shiftToPositiveInPlace, sort, sortCopy}
  from "../exercises/topic06_functions/assignment06_extreme_arrays.js";

import {line, rectangle, square}
  from "../exercises/topic06_functions/assignment07_shapes.js";

import {    find_index_v1, find_index_v2, find_index_v3, find_index_v4, find_index_v5}
  from "../exercises/topic06_functions/assignment08_find.js";

import {fib, fibFast}
  from "../exercises/topic06_functions/assignment09_fib.js";
describe("6 Functions", function () {
  describe("1 Remake", function () {

    describe("1 # Greatest Common Divisor", function () {

      it("gcd(225, 15) = 15", function () {
        assert.strictEqual(gcd(225, 15), 15);
      });

      it("gcd(15, 225) = 15", function () {
        assert.strictEqual(gcd(15, 225), 15);
      });

      it("gcd(12, 15) = 3", function () {
        assert.strictEqual(gcd(12, 15), 3);
      });

      it("gcd(15, 12) = 3", function () {
        assert.strictEqual(gcd(15, 12), 3);
      });

      it("gcd(a, a) = a", function () {
        assert.strictEqual(gcd(15, 15), 15);
      });
    });

    describe("2 # Swap digits", function () {

      it("Positive", function () {
        assert.strictEqual(swapDigits(123), 321);
      });

      it("Negative", function () {
        assert.strictEqual(swapDigits(-123), -321);
      });

      it("Trailing zeros", function () {
        assert.strictEqual(swapDigits(700), 7);
      });

      it("Large", function () {
        assert.strictEqual(swapDigits(123456789), 987654321);
      });

    });

    describe("3 # Factorial", function () {

      it("Five", function () {
        assert.strictEqual(factorial(5), 120);
      });

      it("One", function () {
        assert.strictEqual(factorial(1), 1);
      });

      it("Zero", function () {
        assert.strictEqual(factorial(0), 1);
      });

      it("Negative", function () {
        assert.strictEqual(factorial(-1), NaN);
      });
    });

    describe("4 # Variation", function () {
      it("Simple, small", function () {
        assert.strictEqual(variation(1, 2), 2);
      });

      it("Five out of five:", function () {
        assert.strictEqual(variation(5, 5), 120);
      });

      it("Five out of six:", function () {
        assert.strictEqual(variation(5, 6), 720);
      });

      it("The input cannot contain negative numbers", function () {
        assert.strictEqual(variation(-1, 100), NaN);
      });

      it("The input cannot contain negative numbers", function () {
        assert.strictEqual(variation(100, -1), NaN);
      });

      it("The input cannot contain negative numbers", function () {
        assert.strictEqual(variation(-100, -1), NaN);
      });

      it("When the second input is less than the first, there are no options of making the selection.", function () {
        assert.strictEqual(variation(6, 5), 0);
      });

      it("On large inputs, you have to watch out ...", function () {
        assert.strictEqual(variation(1, 1000), 1000);
      });

    });

    describe("5 # Average", function () {
      // Note that we only supply test-examples with integer results, so we do not run into rounding errors when asserting.
      it("Simple, small", function () {
        assert.strictEqual(avg([1, 2, 3]), 2);
      });

      it("Single", function () {
        assert.strictEqual(avg([123]), 123);
      });

      it("Empty", function () {
        assert.strictEqual(avg([]), NaN);
      });
    });

    describe("6 # Largest prime", function () {
      // Note that we only supply test-examples with integer results, so we do not run into rounding errors when asserting.
      it("Itself", function () {
        assert.strictEqual(largestPrime(101), 101);
      });

      it("One below", function () {
        assert.strictEqual(largestPrime(102), 101);
      });

      it("Smallest", function () {
        assert.strictEqual(largestPrime(2), 2);
      });

      it("No primes below 2", function () {
        assert.strictEqual(largestPrime(1), NaN);
      });

      it("No negative primes", function () {
        assert.strictEqual(largestPrime(-100), NaN);
      });
    });
  });
  describe("2 Basic text functions", function () {
    describe("Is digit", function () {
      it("Is digit", function () {
        assert.ok(isDigit("9"));
        assert.ok(!isDigit("a"));
        assert.ok(!isDigit("A"));
        assert.ok(!isDigit("z"));
        assert.ok(!isDigit("Z"));
        assert.ok(!isDigit("@"));
      });
    });

    describe("Is alpha", function () {
      it("Is alpha", function () {
        assert.ok(!isAlpha("9"));
        assert.ok(isAlpha("a"));
        assert.ok(isAlpha("A"));
        assert.ok(isAlpha("z"));
        assert.ok(isAlpha("Z"));
        assert.ok(!isAlpha("@"));
      });
    });

    describe("To upper", function () {
      it("To upper", function () {
        assert.strictEqual("123ABCXYZ#@&", toUpper("123abcXYZ#@&"));
      });
    });

    describe("To lower", function () {
      it("To lower", function () {
        assert.strictEqual("123abcxyz#@&", toLower("123abcXYZ#@&"));
      });
    });

    describe("Is integer", function () {
      it("Simple integer", function () {
        assert.ok(isInt("314"));
      });

      it("Simple negative integer", function () {
        assert.ok(isInt("-314"));
      });

      it("Explicit positive integer", function () {
        assert.ok(isInt("+314"));
      });

      it("Explicit positive integer, with whitespace between sign and number", function () {
        assert.ok(isInt("+  314"));
      });

      it("Integer with leading whitespace", function () {
        assert.ok(isInt("  314"));
      });

      it("Integer with trailing whitespace", function () {
        assert.ok(isInt("314  "));
      });

      it("No floating points", function () {
        assert.ok(!isInt("-3.14"));
      });

      it("No illegal leading signs", function () {
        assert.ok(!isInt("@  314"));
      });

      it("No intermittent whitespace", function () {
        assert.ok(!isInt("3 1 4"));
      });

    });

    describe("Trim", function () {
      it("Leading and trailing, 'long'", function () {
        assert.strictEqual("abc", trim(" \t\r\nabc \t\r\n"));
      });

      it("Leading and trailing, 'short'", function () {
        assert.strictEqual("a", trim(" \t\r\na \t\r\n"));
      });

      it("Leading and trailing, 'empty'", function () {
        assert.strictEqual("", trim(" \t\r\n \t\r\n"));
      });

      it("Intermittent whitespaces are preserved", function () {
        assert.strictEqual("a\rb", trim(" \t\ra\rb \t\r\n"));
      });

    });

  });
  describe("3 Advanced text functions", function () {
    describe("Reverse", function (){
      it("Empty", function () {
        assert.strictEqual(reverse(""), "");
      });

      it("Non empty", function () {
        assert.strictEqual(reverse("bal"), "lab");
      });
    });

    describe("Palindrome", function (){
      it("Palindrome", function () {
        assert.ok(isPalindrome("aibohphobia"));
      });

      it("Empty string is a Palindrome", function () {
        assert.ok(isPalindrome(""));
      });

      it("Not a Palindrome", function () {
        assert.ok(!isPalindrome("bal"));
      });
    });

    describe("Substring (of length)", function (){
      it("Simple", function () {
        assert.strictEqual(substringOfLength("voetbalveld", 0, 0),"");
        assert.strictEqual(substringOfLength("voetbalveld", 0, 4),"voet");
        assert.strictEqual(substringOfLength("voetbalveld", 4, 3), "bal");
        assert.strictEqual(substringOfLength("voetbalveld", 7, 4),"veld");
      });

      it("Too far or too long", function () {
        assert.strictEqual(substringOfLength("voetbalveld", 11, 1),"");
        assert.strictEqual(substringOfLength("voetbalveld", 10, 2),"d");
      });

      it("Negative start", function (){
        assert.strictEqual(substringOfLength("voetbalveld", -11, 4),"voet");
        assert.strictEqual(substringOfLength("voetbalveld", -7, 3),"bal");
      });

      it("Negative length", function (){

        assert.strictEqual(substringOfLength("voetbalveld", 7, -3),"bal");
        assert.strictEqual(substringOfLength("voetbalveld", 0, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", 11, -4),"veld");
      });

      it("Negative values", function (){
        assert.strictEqual(substringOfLength("voetbalveld", -11, 4),"voet");
        assert.strictEqual(substringOfLength("voetbalveld", -7, 3),"bal");

        assert.strictEqual(substringOfLength("voetbalveld", 7, -3),"bal");
        assert.strictEqual(substringOfLength("voetbalveld", 0, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", 11, -4),"veld");

        assert.strictEqual(substringOfLength("voetbalveld", -11, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", -15, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", -4, -3),"bal");
      });
    });

    describe("Find", function (){
      it("Find", function () {
        assert.strictEqual(find("bal", "voetbalbal"),4);
        assert.strictEqual(find("haha", "hahaha"),0);
        assert.strictEqual(find("haha", "ha"),-1);
      });

      it("Find from", function () {
        assert.strictEqual(find("bal", "voetbalbal", 4),4);
        assert.strictEqual(find("bal", "voetbalbal", 5),7);
        assert.strictEqual(find("haha", "hahaha", 1),2);
        assert.strictEqual(find("haha", "hahaha", 3),-1);
      });
    });

    describe("Find All", function (){
      it("Find all", function () {
        assert.deepStrictEqual(findAll("ha", "hahaha"), [0, 2, 4]);
        assert.deepStrictEqual(findAll("haha", "hahaha"),[0, 2]);
        assert.deepStrictEqual(findAll("haha", "hahahihahahahihiha"), [0, 6, 8]);
      });

      it("Find all with explicit overlap", function () {
        assert.deepStrictEqual(findAll("ha", "hahaha", true), [0, 2, 4]);
        assert.deepStrictEqual(findAll("haha", "hahaha", true),[0, 2]);
        assert.deepStrictEqual(findAll("haha", "hahahihahahahihiha", true), [0, 6, 8]);
      });

      it("Find all without overlap", function () {
        assert.deepStrictEqual(findAll("haha", "hahaha", false),[0]);
        assert.deepStrictEqual(findAll("haha", "hahahihahahahihiha", false),[0, 6]);
      });
    });

    describe("Replace", function (){
      it("replace", function () {
        assert.strictEqual( replace("bal", "lob", "voetbalbal"), "voetloblob");
        assert.strictEqual( replace("bal", "", "voetbalbal"),"voet");
        assert.strictEqual( replace("voet", "", "voetbalbal"),"balbal");
        assert.strictEqual( replace("sok", "lob", "voetbalbal"),"voetbalbal");
        assert.strictEqual(replace("haha", "hoho", "hahaha"), "hohoha");
      });
    });

    describe("Decompose", function (){
      it("decompose", function () {
        assert.deepStrictEqual( decompose(30201), [1, 0, 2, 0, 3]);
      });
    });
  });
  describe("4 To Dutch", function () {

    it("Below 10 (positive)", function () {
      assert.strictEqual(toDutch(0), "nul");
      assert.strictEqual(toDutch(9), "negen");
    });

    it("Below 100 (positive)", function () {
      assert.strictEqual(toDutch(12), "twaalf");
      assert.strictEqual(toDutch(22), "tweeëntwintig");
      assert.strictEqual(toDutch(57), "zevenenvijftig");
    });

    it("Below 1000 (positive)", function () {
      assert.strictEqual(toDutch(110), "honderdtien"); // !!!
      assert.strictEqual(toDutch(315), "driehonderdvijftien");
      assert.strictEqual(toDutch(333), "driehonderddrieëndertig");
      assert.strictEqual(toDutch(300), "driehonderd");
      assert.strictEqual(toDutch(307), "driehonderdenzeven");
    });

    it("Big positive", function () {
      assert.strictEqual(
        toDutch(781452321),
        "zevenhonderdeenentachtig miljoen " +
        "vierhonderdtweeënvijftigduizend " +
        "driehonderdeenentwintig");
    });

    it("Huge positive (more or less max)", function (){
      assert.strictEqual(toDutch(1000000000000123),
        "een biljard honderddrieëntwintig");
    });

    it("Negative", function () {
      assert.strictEqual(toDutch(0), "nul");
      assert.strictEqual(toDutch(-0), "nul");
      assert.strictEqual(toDutch(-9), "min negen");
      assert.strictEqual(toDutch(-22), "min tweeëntwintig");
      assert.strictEqual(toDutch(-333), "min driehonderddrieëndertig");
      assert.strictEqual(toDutch(-781452321), "min zevenhonderdeenentachtig miljoen " +
        "vierhonderdtweeënvijftigduizend " +
        "driehonderdeenentwintig");
    });

  });
  describe("5 Dates", function () {

    it("Leap year", function () {
      assert.ok(isLeapYear(2016));
      assert.ok(!isLeapYear(2017));
      assert.ok(!isLeapYear(1997));
      assert.ok(isLeapYear(1996));
      assert.ok(!isLeapYear(1900));
      assert.ok(isLeapYear(2000));
    });

    it("number of days in month", function () {
      assert.strictEqual(numberOfDaysInMonth(2017, 2),28);
      assert.strictEqual(numberOfDaysInMonth(2016, 2),29);
      assert.strictEqual(numberOfDaysInMonth(1996, 7),31);
    });

    it("number of days in year", function () {
      assert.strictEqual(numberOfDaysInYear(1997), 365);
      assert.strictEqual(numberOfDaysInYear(1996), 366);
    });

    it("Number of day", function () {
      assert.strictEqual( numberOfDay(2017, 12, 31), 365);
      assert.strictEqual( numberOfDay(2016, 12, 31),366);
      assert.strictEqual( numberOfDay(2016, 1, 1),1);
      assert.strictEqual( numberOfDay(2017, 3, 31),90);
      assert.strictEqual( numberOfDay(2016, 3, 31), 91);
    });

    it("Date diff", function () {
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 1, 1), 0);
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 1, 2), 1);
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 1, 3), 2);
      assert.strictEqual( dayDifference(2015, 4, 1, 2017, 3, 31), 730);
      assert.strictEqual( dayDifference(2017, 3, 31, 2015, 4, 1), -730);
      assert.strictEqual( dayDifference(2017, 1, 1, 2017, 3, 31), 89);
      assert.strictEqual( dayDifference(2017, 3, 31, 2017, 1, 1), -89);
      assert.strictEqual( dayDifference(2016, 1, 1, 2016, 3, 31), 90);
      assert.strictEqual( dayDifference(2016, 3, 31, 2016, 1, 1), -90);
    });


  });
  describe("6 Extreme Arrays", function () {

    it("extreme", function () {
      assert.strictEqual( extreme([-2, 1, 0, -3, -7]),-7);
      assert.strictEqual( extreme([1, 7, 0, -3, -7], false), 7);
    });

    it("shift to positive", function () {
      const array = [-2, 1, 0, -3, -7];
      assert.deepStrictEqual( shiftToPositive(array), [5, 8, 7, 4, 0]);
      assert.deepStrictEqual( array, [-2, 1, 0, -3, -7]);
      assert.deepStrictEqual( shiftToPositive([1, 2, 3, 4]), [1, 2, 3, 4]);
    });

    it("shift to positive (in place)", function () {
      const array = [-2, 1, 0, -3, -7];
      shiftToPositiveInPlace(array);
      //assert.deepStrictEqual(shiftToPositiveInPlace(array), [5, 8, 7, 4, 0]);
      assert.deepStrictEqual(array, [5, 8, 7, 4, 0]);
      const posArray = [1, 2, 3, 4];
      shiftToPositiveInPlace(posArray);
      assert.deepStrictEqual(posArray , [1, 2, 3, 4]);
    });

    it("sort", function () {
      const array = [9, 1, 5, 7, 3, 8, 4, 6, 2, 0];
      sort(array);
      assert.deepStrictEqual( array, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("sort copy", function () {
      const array = [9, 1, 5, 7, 3, 8, 4, 6, 2, 0];
      const hardCopy = [9, 1, 5, 7, 3, 8, 4, 6, 2, 0];
      assert.deepStrictEqual( sortCopy(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      assert.deepStrictEqual(hardCopy, array);
      assert.deepStrictEqual( sortCopy([100, -10, 0]), [-10, 0, 100]);
    });
  });
  describe("7 Shapes", function () {
    function readShape(fn){
      return fs.readFileSync("./test/06Functions7_shapes/" + fn, "utf-8").replace(/[\r]/g, "");
    }

    it("Line", function () {
      assert.strictEqual( line(4),"****");
      assert.strictEqual( line(4, false),"*  *");
      assert.strictEqual( line(4, false, 3),"   *  *");
      assert.strictEqual( line(1, true, 0, "+"), "+");
      assert.strictEqual( line(3, false, 1, "+-"), " +- +-");
      assert.strictEqual( line(0, false, 0, "+"), "");
    });

    it("Rectangle", function () {
      assert.strictEqual(rectangle(5, 3), readShape("rectangle_53"));
      assert.strictEqual(rectangle(3,4), readShape("rectangle_34"));
      assert.strictEqual(rectangle(3,4, false), readShape("rectangle_34_not_filled"));
      assert.strictEqual(rectangle(2,4, false), readShape("rectangle_24_not_filled"));
      assert.strictEqual(rectangle(3, 4, true, 2), readShape("rectangle_34_indent"));
      assert.strictEqual(rectangle(3, 4, true, 0, "x"), readShape("rectangle_34_x"));
    });

    it("Square", function () {
      assert.strictEqual(square(5, false, 3, "o"), readShape("square"));
    });
  });
  describe("8 Find", function () {

    it("Find V1", function () {
      assert.strictEqual(find_index_v1("a", "azerty"), 0);
      assert.strictEqual(find_index_v1("z", "azerty"), 1);
      assert.strictEqual(find_index_v1("q", "azerty"), undefined);
    });

    it("Find V2", function () {
      assert.strictEqual(find_index_v2("a", "azerty"), 0);
      assert.strictEqual(find_index_v2("z", "azerty"), 1);
      assert.ok(!find_index_v2("q", "azerty"));
    });

    it("Find V3", function () {
      assert.strictEqual(find_index_v3("a", "azerty"), 0);
      assert.strictEqual(find_index_v3("z", "azerty"), 1);
      assert.strictEqual(find_index_v3("q", "azerty"), NaN);
    });

    it("Find V4", function () {
      assert.strictEqual(find_index_v4("a", "azerty"), 0);
      assert.strictEqual(find_index_v4("z", "azerty"), 1);
      assert.ok(find_index_v4("q", "azerty") < 0);
    });

    it("Find V5", function () {
      assert.strictEqual(find_index_v5("a", "azerty"), 0);
      assert.strictEqual(find_index_v5("z", "azerty"), 1);
      assert.strictEqual(find_index_v5("q", "azerty"), null);
    });
  });
  describe("9 Recursion", function () {
    describe("Recursive Fib", function () {
      it("base", function () {
        assert.strictEqual(fib(0),0);
        assert.strictEqual(fib(1),1);
        assert.strictEqual(fib(2),1);
      });

      it("'big'", function () {
        assert.strictEqual(fib(6),8);
      });

      it("'huge'", function () {
        assert.strictEqual(fibFast(0),0);
        assert.strictEqual(fibFast(1),1);
        assert.strictEqual(fibFast(2),1);
        assert.strictEqual(fibFast(3),2);
        assert.strictEqual(fibFast(4),3);
        assert.strictEqual(fibFast(5),5);
        assert.strictEqual(fibFast(40),102334155);
      }).timeout(100);
    });
  });
});
