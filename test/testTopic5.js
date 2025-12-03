import { createPathAndTestCase } from "./utils.js";

describe("5. All round", function () {
  this.slow(250);

  describe("1. # Sentinel Extreme", function () {
    it("No input, yields double-oh.", createPathAndTestCase(5, 1)
      .withIntegerInput(0)
      .andExpectedIntegers(0, 0));

    it("Single input is both the max and the min (positive).", createPathAndTestCase(5, 1)
      .withIntegerInput(1, 0)
      .andExpectedIntegers(1, 1));

    it("Single input is both the max and the min (negative).", createPathAndTestCase(5, 1)
      .withIntegerInput(-1, 0)
      .andExpectedIntegers(-1, -1));

    it("Two inputs computes a simple min/max.", createPathAndTestCase(5, 1)
      .withIntegerInput(-1, 1, 0)
      .andExpectedIntegers(-1, 1));

    it("Many inputs compute a (more)complex min/max.", createPathAndTestCase(5, 1)
      .withIntegerInput(-2, -1, 1, 2, 0)
      .andExpectedIntegers(-2, 2));

  });

  describe("2. # Factorial (II)", function () {
    it("The factorial of negative numbers cannot be computed.", createPathAndTestCase(5, 2)
      .withIntegerInput(-1)
      .andExpectedOutput("does not compute"));

    it("The factorial of zero is one.", createPathAndTestCase(5, 2)
      .withIntegerInput(0)
      .andExpectedIntegers(1));

    it("The factorial of one is one.", createPathAndTestCase(5, 2)
      .withIntegerInput(1)
      .andExpectedIntegers(1));

    it("The factorial of 5 is 120.", createPathAndTestCase(5, 2)
      .withIntegerInput(5)
      .andExpectedIntegers(120));
  });

  describe("3. # Factorial (III)", function () {

    it("The factorial of zero is one.", createPathAndTestCase(5, 3)
      .withIntegerInput(0)
      .andExpectedIntegers(1));

    it("The factorial of one is one.", createPathAndTestCase(5, 3)
      .withIntegerInput(1)
      .andExpectedIntegers(1));

    it("The factorial of 5 is 120.", createPathAndTestCase(5, 3)
      .withIntegerInput(5)
      .andExpectedIntegers(120));

    it("The factorial of negative numbers cannot be computed, so keep asking until 5.", createPathAndTestCase(5, 3)
      .withIntegerInput(-1, -2, 5)
      .andExpectedIntegers(120));
  });

  describe("4. # K-permutations of n (Dutch: \"Variation\")", function () {

    it("Simple, small:", createPathAndTestCase(5, 4)
      .withIntegerInput(1, 2)
      .andExpectedIntegers(2));

    it("Five out of five:", createPathAndTestCase(5, 4)
      .withIntegerInput(5, 5)
      .andExpectedIntegers(120));

    it("Five out of six:", createPathAndTestCase(5, 4)
      .withIntegerInput(5, 6)
      .andExpectedIntegers(720));

    it("The input cannot contain negative numbers", createPathAndTestCase(5, 4)
      .withIntegerInput(-1, 100)
      .andExpectedOutput("does not compute"));

    it("The input cannot contain negative numbers", createPathAndTestCase(5, 4)
      .withIntegerInput(100, -1)
      .andExpectedOutput("does not compute"));

    it("The input cannot contain negative numbers", createPathAndTestCase(5, 4)
      .withIntegerInput(-1, -100)
      .andExpectedOutput("does not compute"));

    it("When the second input is less than the first, there are no options of making the selection.", createPathAndTestCase(5, 4)
      .withIntegerInput(6, 5)
      .andExpectedIntegers(0));

    it("On large inputs, you have to watch out ...", createPathAndTestCase(5, 4)
      .withIntegerInput(1, 1000)
      .andExpectedIntegers(1000));

  });

  describe("5. # Sentinel Extreme Pro", function () {

    it("One input", createPathAndTestCase(5, 5)
      .withIntegerInput(1, 0)
      .andExpectedIntegers(1, 1));

    it("Nine inputs", createPathAndTestCase(5, 5)
      .withIntegerInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
      .andExpectedIntegers(1, 9));

    it("Ten inputs, no zero", createPathAndTestCase(5, 5)
      .withIntegerInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .andExpectedIntegers(1, 10));

    it("Immediate zero", createPathAndTestCase(5, 5)
      .withIntegerInput(0)
      .andExpectedIntegers(0, 0));

    it("More than ten inputs, no zero", createPathAndTestCase(5, 5)
      .withIntegerInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
      .andExpectedIntegers(1, 10));
  });

  describe("6. # Sentinel Armageddon", function () {

    it("One input", createPathAndTestCase(5, 6)
      .withIntegerInput(1, 0)
      .andExpectedIntegers(1, 1));

    it("Nine inputs", createPathAndTestCase(5, 6)
      .withIntegerInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
      .andExpectedIntegers(1, 9));

    it("Nine inputs, non linear", createPathAndTestCase(5, 6)
      .withIntegerInput(1, 2, 3, -10, 100, 6, 7, 8, 9, 0)
      .andExpectedIntegers(4, 5));

    it("Ten inputs, no zero", createPathAndTestCase(5, 6)
      .withIntegerInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .andExpectedIntegers(1, 10));

    it("Immediate zero", createPathAndTestCase(5, 6)
      .withIntegerInput(0)
      .andExpectedIntegers(0, 0));

    it("More than ten inputs, no zero", createPathAndTestCase(5, 6)
      .withIntegerInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
      .andExpectedIntegers(1, 10));
  });

});
