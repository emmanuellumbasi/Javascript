import { createPathAndTestCase } from "./utils.js";

describe("2. selection", function () {
  this.slow(250);

  describe("1. # Check Sign", function () {
    it("Positive numbers are positive.", createPathAndTestCase(2, 1)
      .withInput("123")
      .andExpectedOutput("+"));

    it("Explicitly positive numbers are positive.", createPathAndTestCase(2, 1)
      .withInput("+123").andExpectedOutput("+"));

    it("Zero is positive.", createPathAndTestCase(2, 1)
      .withInput("0").andExpectedOutput("+"));

    it("Negative numbers are negative..", createPathAndTestCase(2, 1)
      .withInput("-123").andExpectedOutput("-"));

  });

  describe("2. Check Sign (II)", function () {
    it("Positive numbers are positive.", createPathAndTestCase(2, 2)
      .withInput("123").andExpectedOutput("+"));

    it("Explicitly positive numbers are positive.", createPathAndTestCase(2, 2)
      .withInput("+123").andExpectedOutput("+"));

    it("Zero is zero.", createPathAndTestCase(2, 2)
      .withInput("0").andExpectedOutput("0"));

    it("Negative numbers are negative..", createPathAndTestCase(2, 2)
      .withInput("-123").andExpectedOutput("-"));
  });

  describe("3. Circle Surface", function () {
    it("The surface of the non-existing circle is 0", createPathAndTestCase(2, 3)
      .withIntegerInput(0).andExpectedFloatingPoint(0, 3));

    it("The surface of the unit-circle is pi", createPathAndTestCase(2, 3)
      .withIntegerInput(1).andExpectedFloatingPoint(Math.PI, 3));

    it("Doubling the radius quadruples the surface of a circle", createPathAndTestCase(2, 3)
      .withIntegerInput(2).andExpectedFloatingPoint(4 * Math.PI, 3));

    it("A negative radius does not exist.", createPathAndTestCase(2, 3)
      .withIntegerInput(-123).andExpectedOutput("?"));
  });

  describe("4. # Odd", function () {
    for (let i = -5; i <= 5; i += 2) {
      it(i.toString() + " is odd", createPathAndTestCase(2, 4)
        .withIntegerInput(i).andExpectedOutput("odd"));

      it((i + 1).toString() + " is even", createPathAndTestCase(2, 4)
        .withIntegerInput(i + 1).andExpectedOutput("even"));
    }
  });

  describe("5. # Floating Point", function () {
    it("0.15 + 0.15 = 0.3 (eq, as expected)", createPathAndTestCase(2, 5)
      .withInput("0.15", "0.15")
      .andExpectedOutput("equal"));
    it("0.1 + 0.4 = 0.5 (neq, as expected)", createPathAndTestCase(2, 5)
      .withInput("0.1", "0.4")
      .andExpectedOutput("not equal"));
    it("0.1 + 0.2 = 0.3 (eq, mind the rounding errors)", createPathAndTestCase(2, 5)
      .withInput("0.1", "0.2")
      .andExpectedOutput("equal"));
    it("-1000 + -2000 = -3000 (eq, mind negatives)", createPathAndTestCase(2, 5)
        .withInput("-1000", "-2000")
          .andExpectedOutput("not equal"));
  });

  describe("6. # Digit Swap", function () {
    it("Simple swap", createPathAndTestCase(2, 6)
      .withIntegerInput(23).andExpectedInteger(32));

    it("Negative swap", createPathAndTestCase(2, 6)
      .withIntegerInput(-23).andExpectedInteger(-32));

    it("Numbers of more than two digits should not be swapped.", createPathAndTestCase(2, 6)
      .withIntegerInput(123).andExpectedInteger(123));

    it("Numbers of more than two digits should not be swapped. (negative)", createPathAndTestCase(2, 6)
      .withIntegerInput(-123).andExpectedInteger(-123));

    it("Numbers of less than two digits should not be swapped.", createPathAndTestCase(2, 6)
      .withIntegerInput(2).andExpectedInteger(2));

    it("Numbers of less than two digits should not be swapped.", createPathAndTestCase(2, 6)
      .withIntegerInput(-2).andExpectedInteger(-2));

    it("No leading zeros.", createPathAndTestCase(2, 6)
      .withIntegerInput(70).andExpectedInteger(7));

    it("No leading zeros, negative case.", createPathAndTestCase(2, 6)
      .withIntegerInput(-70).andExpectedInteger(-7));
  });

  describe("7. # Check Input", function () {
    it("int", createPathAndTestCase(2, 7)
      .withInput("123").andExpectedOutput("yes"));
    it("dec", createPathAndTestCase(2, 7)
      .withInput("3.14").andExpectedOutput("yes"));
    it("nan", createPathAndTestCase(2, 7)
      .withInput("azerty").andExpectedOutput("no"));
  });

  describe("8. # Check Input II", function () {
    it("int", createPathAndTestCase(2, 8)
      .withInput("123").andExpectedOutput("int"));
    it("dec", createPathAndTestCase(2, 8)
      .withInput("3.14").andExpectedOutput("dec"));
    it("nan", createPathAndTestCase(2, 8)
      .withInput("azerty").andExpectedOutput("not a number"));
  });
});

