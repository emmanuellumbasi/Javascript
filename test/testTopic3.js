import { createPathAndTestCase } from "./utils.js";
import assert from "assert";

describe("3. iteration", function () {
  this.slow(250);
  function getPathToShapeFile (shapeName) {
    return "./test/03Iteration_shapes/" + shapeName;
  }

  const numbers = [1.4, -2.1, 3.0, -4, 0];
  const symmetricalNumbers = [1.4, 2.1, 3.0, -3.0, -2.1, -1.4, 0];

  const sumAsNumber = numbers.reduce((a, b) => a + b, 0);
  const countAsNumber = numbers.length - 1;
  const avgAsNumber = sumAsNumber / countAsNumber;

  describe("1. # Sum", function () {
    it("With no real data the output should be zero (1 digit).", createPathAndTestCase(3, 1)
      .withIntegerInput(0)
      .andExpectedFloatingPoint(0, 1));

    it("With one data point the output should be equal to that input (1 digit).", createPathAndTestCase(3, 1)
      .withIntegerInput(1, 0)
      .andExpectedFloatingPoint(1, 1));

    it("With multiple data point the output should compute the sum (1 digit).", createPathAndTestCase(3, 1)
      .withIntegerInput(...numbers)
      .andExpectedFloatingPoint(sumAsNumber, 1));
  });

  describe("2. # Count", function () {
    it("With no real data the output should be zero.", createPathAndTestCase(3, 2)
      .withIntegerInput(0)
      .andExpectedInteger(0));

    it("With one data point the output should be 1.", createPathAndTestCase(3, 2)
      .withIntegerInput(1, 0)
      .andExpectedInteger(1));

    it("With multiple data points the output should count them.", createPathAndTestCase(3, 2)
      .withIntegerInput(...numbers)
      .andExpectedInteger(countAsNumber));
  });

  describe("3. # Average", function () {
    it("With no real data the output should be 'no data'.", createPathAndTestCase(3, 3)
      .withIntegerInput(0)
      .andExpectedOutput("no data"));

    it("With one data point the output should be equal to that number (3 digits).", createPathAndTestCase(3, 3)
      .withIntegerInput(1, 0)
      .andExpectedFloatingPoint(1, 3));

    it("With multiple data points the output should compute the average (3 digits).", createPathAndTestCase(3, 3)
      .withIntegerInput(...numbers)
      .andExpectedFloatingPoint(avgAsNumber, 3));

    it("With symmetrical data points the output should still compute the average (3 digits).", createPathAndTestCase(3, 3)
        .withIntegerInput(...symmetricalNumbers)
        .andExpectedFloatingPoint(0.0, 3));
  });

  describe("4. # All exclusive", function () {
    it("The output should contain all numbers upperbound exclusive.", createPathAndTestCase(3, 4)
      .withIntegerInput(3)
      .andExpectedOutput("0", "1", "2"));

    it("The output should be empty for zero.", createPathAndTestCase(3, 4)
      .withIntegerInput(0)
      .andExpectedOutput(/* nothing */));

    it("The output should be empty for negative numbers.", createPathAndTestCase(3, 4)
      .withIntegerInput(-1)
      .andExpectedOutput(/* nothing */));
  });

  describe("5. # All inclusive", function () {
    it("The output should contain all numbers upperbound inclusive.", createPathAndTestCase(3, 5)
      .withIntegerInput(3)
      .andExpectedOutput("0", "1", "2", "3"));

    it("The output for zero should be 'zero'.", createPathAndTestCase(3, 5)
      .withIntegerInput(0)
      .andExpectedOutput("0"));

    it("The output should be empty for negative numbers.", createPathAndTestCase(3, 5)
      .withIntegerInput(-1)
      .andExpectedOutput(/* nothing */));
  });

  describe("6. # All inclusive from one", function () {
    it("The output should contain all numbers upperbound inclusive, starting form 1.", createPathAndTestCase(3, 6)
      .withIntegerInput(3)
      .andExpectedOutput("1", "2", "3"));

    it("The output should be empty for zero.", createPathAndTestCase(3, 6)
      .withIntegerInput(0)
      .andExpectedOutput(/* nothing */));

    it("The output should be empty for negative numbers.", createPathAndTestCase(3, 6)
      .withIntegerInput(-1)
      .andExpectedOutput(/* nothing */));
  });

  describe("7. # Factorial", function () {
    it("The output should be 'does not compute' for negative numbers.", createPathAndTestCase(3, 7)
      .withIntegerInput(-123)
      .andExpectedOutput("does not compute"));

    it("The output should be 1 for zero.", createPathAndTestCase(3, 7)
      .withIntegerInput(0)
      .andExpectedInteger(1));

    it("The output should be 1 for one.", createPathAndTestCase(3, 7)
      .withIntegerInput(1)
      .andExpectedInteger(1));

    it("The output should be 120 for five.", createPathAndTestCase(3, 7)
      .withIntegerInput(5)
      .andExpectedInteger(120));
  });

  describe("8. # Rectangle", function () {
    it("The output should be a 3 by 4 rectangle of stars.", createPathAndTestCase(3, 8)
      .withIntegerInput(3, 4)
      .andExpectedOutput("****", "****", "****"));

    it("The output should be empty.(negative/zero width)", createPathAndTestCase(3, 8)
      .withIntegerInput(3, 0)
      .andExpectedOutput(/* nothing */));

    it("The output should be empty. (negative/zero height)", createPathAndTestCase(3, 8)
      .withIntegerInput(0, 4)
      .andExpectedOutput(/* nothing */));
  });

  const wrongInputForTriangles = [-2, -1, 0];

  describe("9. # Isosceles 1", function () {
    it("A triangle of size three.", createPathAndTestCase(3, 9)
      .withIntegerInput(3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles1_3")));

    it("A triangle of size three after wrong input.", createPathAndTestCase(3, 9)
      .withIntegerInput(...wrongInputForTriangles, 3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles1_3")));
  });

  describe("10. # Isosceles 2", function () {
    it("A triangle of size three.", createPathAndTestCase(3, 10)
      .withIntegerInput(3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles2_3")));

    it("A triangle of size three after wrong input.", createPathAndTestCase(3, 10)
      .withIntegerInput(...wrongInputForTriangles, 3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles2_3")));
  });

  describe("11. # Isosceles 3", function () {
    it("A triangle of size three.", createPathAndTestCase(3, 11)
      .withIntegerInput(3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles3_3")));

    it("A triangle of size three after wrong input.", createPathAndTestCase(3, 11)
      .withIntegerInput(...wrongInputForTriangles, 3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles3_3")));
  });

  describe("12. # Isosceles 4", function () {
    it("A triangle of size three.", createPathAndTestCase(3, 12)
      .withIntegerInput(3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles4_3")));

    it("A triangle of size three after wrong input.", createPathAndTestCase(3, 12)
      .withIntegerInput(...wrongInputForTriangles, 3)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles4_3")));
  });

  describe("13. # Isosceles 5", function () {
    it("A triangle of size five (width).", createPathAndTestCase(3, 13)
      .withIntegerInput(5)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles5_5")));

    it("A triangle of size size five (width) after wrong input.", createPathAndTestCase(3, 13)
      .withIntegerInput(...wrongInputForTriangles, 5)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles5_5")));

    it("A triangle of size six (width).", createPathAndTestCase(3, 13)
      .withIntegerInput(6)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles5_6")));

    describe("A large even triangle.", ()=>{
      for (let i = 10; i < 100 ; i += 12) {
        const h = i / 2;
        it("A large even triangle." + i, createPathAndTestCase(3, 13)
          .withIntegerInput(i)
          .andExpectedOutput(actualOutputs => {
            assert.strictEqual(actualOutputs.length, h); // check height
            assert.strictEqual(actualOutputs[0].trim(), "**"); // check first line
            assert.strictEqual(actualOutputs[h - 1], "*".repeat(i)); // check last line
          }));
      }
    });

    describe("A large odd triangle.", ()=>{
      for (let i = 11; i < 100 ; i += 12) {
        const h = (i + 1) / 2;
        it("A large odd triangle." + i, createPathAndTestCase(3, 13)
          .withIntegerInput(i)
          .andExpectedOutput(actualOutputs => {
            assert.strictEqual(actualOutputs.length, h); // check height
            assert.strictEqual(actualOutputs[0].trim(), "*"); // check first line
            assert.strictEqual(actualOutputs[h - 1], "*".repeat(i)); // check last line
          }));
      }
    });
  });

  describe("14. # Isosceles 6", function () {
    it("A triangle of size five (width).", createPathAndTestCase(3, 14)
      .withIntegerInput(5)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles6_5")));

    it("A triangle of size size five (width) after wrong input.", createPathAndTestCase(3, 14)
      .withIntegerInput(...wrongInputForTriangles, "5")
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles6_5")));

    it("A triangle of size six (width).", createPathAndTestCase(3, 14)
      .withIntegerInput(6)
      .andExpectedOutputLikeFile(getPathToShapeFile("isosceles6_6")));

    describe("A large even triangle.", ()=>{
      for (let i = 10; i < 100 ; i += 12) {
        const h = i / 2;
        it("A large even triangle." + i, createPathAndTestCase(3, 14)
          .withIntegerInput(i)
          .andExpectedOutput(actualOutputs => {
            assert.strictEqual(actualOutputs.length, h); // check height
            assert.strictEqual(actualOutputs[0], "*".repeat(i)); // check first line
            assert.strictEqual(actualOutputs[h - 1].trim(), "**"); // check last line
          }));
      }
    });

    describe("A large odd triangle.", ()=>{
      for (let i = 11; i < 100 ; i += 12) {
        const h = (i + 1) / 2;
        it("A large odd triangle." + i, createPathAndTestCase(3, 14)
          .withIntegerInput(i)
          .andExpectedOutput(actualOutputs => {
            assert.strictEqual(actualOutputs.length, h); // check height
            assert.strictEqual(actualOutputs[0], "*".repeat(i)); // check first line
            assert.strictEqual(actualOutputs[h - 1].trim(), "*"); // check last line
          }));
      }
    });
  });

  describe("15. # Euclid's Algorithm", function () {
    it("gcd(225, 15) = 15", createPathAndTestCase(3, 15)
      .withIntegerInput(225, 15).andExpectedInteger(15));

    it("gcd(15, 225) = 15", createPathAndTestCase(3, 15)
      .withIntegerInput(15, 225).andExpectedInteger(15));

    it("gcd(12, 15) = 3", createPathAndTestCase(3, 15)
      .withIntegerInput(12, 15).andExpectedInteger(3));

    it("gcd(15, 12) = 3", createPathAndTestCase(3, 15)
      .withIntegerInput(15, 12).andExpectedInteger(3));

    it("gcd(a, a) = a", createPathAndTestCase(3, 15)
      .withIntegerInput(225, 225).andExpectedInteger(225));
  });

  describe("16. # Digit Swap (II)", function () {
    it("1234 -> 4321", createPathAndTestCase(3, 16)
      .withIntegerInput(1234).andExpectedInteger(4321));

    it("-1234 -> -4321", createPathAndTestCase(3, 16)
      .withIntegerInput(-1234).andExpectedInteger(-4321));

    it("0 -> 0", createPathAndTestCase(3, 16)
      .withIntegerInput(0).andExpectedInteger(0));

    it("6 -> 6", createPathAndTestCase(3, 16)
      .withIntegerInput(6).andExpectedInteger(6));

    it("-6 -> -6", createPathAndTestCase(3, 16)
      .withIntegerInput(-6).andExpectedInteger(-6));

    it("700 -> 7", createPathAndTestCase(3, 16)
      .withIntegerInput(700).andExpectedInteger(7));

    it("-700 -> -7", createPathAndTestCase(3, 16)
      .withIntegerInput(-700).andExpectedInteger(-7));
  });

  describe("17. # Centered Square", function () {
    [3, 5, 7].forEach(size => {
      it(`A square of size ${size}.`, createPathAndTestCase(3, 17)
        .withIntegerInput(size)
        .andExpectedOutputLikeFile(getPathToShapeFile(`centered_square_${size}`)));
    });

    it("A square of size 3 after to small input.", createPathAndTestCase(3, 17)
      .withIntegerInput(-3,-2, -1,0, 1, 2, 3)
      .andExpectedOutputLikeFile(getPathToShapeFile("centered_square_3")));

    it("A square of size 3 after even input.", createPathAndTestCase(3, 17)
      .withIntegerInput(6, 4, 3)
      .andExpectedOutputLikeFile(getPathToShapeFile("centered_square_3")));
  });

  describe("18. # Square of Numbers", function () {
    [-1, 0, 1, 10, 11].forEach(size => {
      it(`Too big or too small inputs (${size}) cause 'no output'.`, createPathAndTestCase(3, 18)
        .withIntegerInput(size)
        .andExpectedOutput("No Output"));
    });

    it("A square of size 9.", createPathAndTestCase(3, 18)
      .withIntegerInput(9)
      .andExpectedOutputLikeFile(getPathToShapeFile("square_of_numbers")));
  });
});

