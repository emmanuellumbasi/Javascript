import { createPathAndTestCase } from "./utils.js";

describe("1. warming up", function () {
  this.slow(250);

  describe("1. # hello world", function () {
    it("The output should exactly match with 'Hello, World!'", createPathAndTestCase(1, 1)
      .withoutInput()
      .andExpectedOutput("Hello, World!"));
  });

  describe("2. # echo", function () {
    it("The output should exactly match with the input (one word)", createPathAndTestCase(1, 2)
      .withInput("test")
      .andExpectedOutput("test"));

    it("The output should exactly match with the input (spaces and punctuation)", createPathAndTestCase(1, 2)
      .withInput("test, mic check one two!")
      .andExpectedOutput("test, mic check one two!"));
  });

  describe("3. # Rectangle", function () {
    it("The output should be a 3 by 4 rectangle of stars.", createPathAndTestCase(1, 3)
      .withoutInput()
      .andExpectedOutput("****", "****", "****"));
  });

  describe("4. # Swap (I)", function () {
    it("The output should be the inverse of the input", createPathAndTestCase(1, 4)
      .withInput("a", "b")
      .andExpectedOutput("b", "a"));
  });

  describe("5. # Swap (II)", function () {
    it("The output should be the inverse of the input (++)", createPathAndTestCase(1, 5)
      .withIntegerInput(1, 2)
      .andExpectedOutput("2", "1"));

    it("The output should be the inverse of the input (-+)", createPathAndTestCase(1, 5)
      .withIntegerInput(-1, 2)
      .andExpectedOutput("2", "-1"));

    it("The output should be the inverse of the input (+-)", createPathAndTestCase(1, 5)
      .withIntegerInput(1, -2)
      .andExpectedOutput("-2", "1"));

    it("The output should be the inverse of the input (--)", createPathAndTestCase(1, 5)
      .withIntegerInput(-1, -2)
      .andExpectedOutput("-2", "-1"));
  });

  describe("6. Circle Surface", function () {
    it("The surface of the non-existing circle is 0", createPathAndTestCase(1, 6)
      .withIntegerInput(0)
      .andExpectedFloatingPoint(0, 3));

    it("The surface of the unit-circle is pi", createPathAndTestCase(1, 6)
      .withIntegerInput(1)
      .andExpectedFloatingPoint(Math.PI, 3));

    it("Doubling the radius quadruples the surface of a circle", createPathAndTestCase(1, 6)
      .withIntegerInput(2)
      .andExpectedFloatingPoint(4 * Math.PI, 3));
  });

  describe("7. # Reverse Sequence", function () {
    it("The output should be the same as the result of calling 'reverse'", createPathAndTestCase(1, 7)
      .withInput("1", "22", "333", "4444", "55555")
      .andExpectedOutput(...["1", "22", "333", "4444", "55555"].reverse()));
  });

  describe("8. # Product", function () {
    it("ints", createPathAndTestCase(1, 8).withIntegerInput(2,3).andExpectedInteger(6));
    it("txt", createPathAndTestCase(1, 8).withInput("a", "b").andExpectedOutput("NaN"));
  });

  describe("9. # Sum", function () {
    it("ints", createPathAndTestCase(1, 9).withIntegerInput(2,3).andExpectedInteger(5));
    it("txt", createPathAndTestCase(1, 9).withInput("a", "b").andExpectedOutput("NaN"));
  });
});



