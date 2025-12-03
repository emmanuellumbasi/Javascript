import { createPathAndTestCase } from "./utils.js";

describe("4. Sequences (array and string)", function () {
  this.slow(250);

  describe("1. # Reverse Sequence", function () {
    const input = new Array(100).fill(0).map((_, idx) => idx + 123);
    it("Reverse all numbers from 123 to 223.", createPathAndTestCase(4, 1)
      .withIntegerInput(...input)
      .andExpectedOutput(...input.map(x => x.toString()).reverse()));
  });

  const highestFrequencyInputs = [
    [1, 2, 2, 1, 3, 5, 3, 1, 678], // 1
    [1, 3, 2, 1, 3, 5, 3, 1, 678], // 1 3
    [50, 3, 2, 50, 3, 5, 3, 50, 678] // 3 50
  ];

  describe("2. # Highest Frequency", function () {

    it("One occurs the most frequent.", createPathAndTestCase(4, 2)
      .withIntegerInput(...highestFrequencyInputs[0])
      .andExpectedInteger(1));

    it("One and three occur the most frequent, one is smaller", createPathAndTestCase(4, 2)
      .withIntegerInput(...highestFrequencyInputs[1])
      .andExpectedInteger(1));

    it("Three and fifty occur the most frequent, three is smaller", createPathAndTestCase(4, 2)
      .withIntegerInput(...highestFrequencyInputs[2])
      .andExpectedInteger(3));

    it("No real input, yields -1.", createPathAndTestCase(4, 2)
      .withIntegerInput(-1)
      .andExpectedInteger(-1));

    it("No real input, yields -1.", createPathAndTestCase(4, 2)
      .withIntegerInput(123)
      .andExpectedInteger(-1));
  });

  describe("3. # Highest Frequency (II)", function () {
    it("One occurs the most frequent.", createPathAndTestCase(4, 3)
      .withIntegerInput(...highestFrequencyInputs[0])
      .andExpectedInteger(1));

    it("One and three occur the most frequent, three is larger", createPathAndTestCase(4, 3)
      .withIntegerInput(...highestFrequencyInputs[1])
      .andExpectedInteger(3));

    it("Three and fifty occur the most frequent, fifty is larger", createPathAndTestCase(4, 3)
      .withIntegerInput(...highestFrequencyInputs[2])
      .andExpectedInteger(50));

    it("No real input, yields -1.", createPathAndTestCase(4, 3)
      .withIntegerInput(-1)
      .andExpectedInteger(-1));

    it("No real input, yields -1.", createPathAndTestCase(4, 3)
      .withIntegerInput(123)
      .andExpectedInteger(-1));
  });

  describe("4. # Highest Frequency (III)", function () {
    it("One occurs the most frequent.", createPathAndTestCase(4, 4)
      .withIntegerInput(...highestFrequencyInputs[0])
      .andExpectedInteger(1));

    it("One and three occur the most frequent.", createPathAndTestCase(4, 4)
      .withIntegerInput(...highestFrequencyInputs[1])
      .andExpectedIntegers(1, 3));

    it("Three and fifty occur the most frequent.", createPathAndTestCase(4, 4)
      .withIntegerInput(...highestFrequencyInputs[2])
      .andExpectedIntegers(3, 50));

    it("No real input, yields -1.", createPathAndTestCase(4, 4)
      .withIntegerInput(-1)
      .andExpectedInteger(-1));

    it("No real input, yields -1.", createPathAndTestCase(4, 4)
      .withIntegerInput(123)
      .andExpectedInteger(-1));
  });

  const sortInputWithoutDoubles = [4, 3, 2, 1, 5];
  const sortInputWithDoubles = [4, 3, 2, 3, 1, 5];

  describe("5. # Count Sort", function () {
    it("Sorting sequence without doubles, shows no doubles.", createPathAndTestCase(4, 5)
      .withIntegerInput(...sortInputWithoutDoubles, 100)
      .andExpectedIntegers(...sortInputWithoutDoubles.map(x => x).sort()));

    it("Sorting sequence with doubles, shows no doubles.", createPathAndTestCase(4, 5)
      .withIntegerInput(...sortInputWithDoubles, 100)
      .andExpectedIntegers(...sortInputWithoutDoubles.map(x => x).sort())); // not a typo: remove the doubles !
  });

  describe("6. # Count Sort (II)", function () {
    it("Sorting sequence without doubles, shows no doubles.", createPathAndTestCase(4, 6)
      .withIntegerInput(...sortInputWithoutDoubles, 100)
      .andExpectedIntegers(...sortInputWithoutDoubles.map(x => x).sort()));

    it("Sorting sequence with doubles, shows doubles.", createPathAndTestCase(4, 6)
      .withIntegerInput(...sortInputWithDoubles, 100)
      .andExpectedIntegers(...sortInputWithDoubles.map(x => x).sort()));
  });

  describe("7. # Sieve of Eratosthenes", function () {
    it("All primes below 10.", createPathAndTestCase(4, 7)
      .withIntegerInput(10)
      .andExpectedIntegers(2, 3, 5, 7));
    it("All primes below 13.", createPathAndTestCase(4, 7)
      .withIntegerInput(13)
      .andExpectedIntegers(2, 3, 5, 7, 11, 13));
    it("All primes below 14.", createPathAndTestCase(4, 7)
      .withIntegerInput(14)
      .andExpectedIntegers(2, 3, 5, 7, 11, 13));
  });

  describe("8. # Battleship", function () {
    it("One out of five boat(parts) have been hit in three shots.", createPathAndTestCase(4, 8)
      .withoutInput()
      .andExpectedOutput("Damage: 0.20",
        "Efficiency: 0.33"
      ));
  });
});

