import assert from "assert";
import fs from "fs";
import path from "path";
import io from "../utils/io-for-pf.js";

const paths = [
  "paths",
  ["topic01_warm_up",
    "assignment01_hello_world.js",
    "assignment02_echo.js",
    "assignment03_rectangle.js",
    "assignment04_swap.js",
    "assignment05_swap2.js",
    "assignment06_circle_surface.js",
    "assignment07_reverse_sequence.js",
    "assignment08_product.js",
    "assignment09_sum.js"
  ],
  ["topic02_selection",
    "assignment01_check_sign.js",
    "assignment02_check_sign2.js",
    "assignment03_circle_surface2.js",
    "assignment04_odd.js",
    "assignment05_floating_point.js",
    "assignment06_digit_swap.js",
    "assignment07_check_input.js",
    "assignment08_check_input_II.js"
  ],
  ["topic03_iteration",
    "assignment01_sum.js",
    "assignment02_count.js",
    "assignment03_average.js",
    "assignment04_all_ex.js",
    "assignment05_all_in.js",
    "assignment06_all_in_from_one.js",
    "assignment07_factorial.js",
    "assignment08_star_rectangle.js",
    "assignment09_isosceles1.js",
    "assignment10_isosceles2.js",
    "assignment11_isosceles3.js",
    "assignment12_isosceles4.js",
    "assignment13_isosceles5.js",
    "assignment14_isosceles6.js",
    "assignment15_euclid.js",
    "assignment16_digit_swap2.js",
    "assignment17_centered_square_iteration_only.js",
    "assignment18_square_of_numbers.js"
  ],
  ["topic04_lists",
    "assignment01_reverse_sequence.js",
    "assignment02_highest_frequency.js",
    "assignment03_highest_frequency2.js",
    "assignment04_highest_frequency3.js",
    "assignment05_count_sort.js",
    "assignment06_count_sort2.js",
    "assignment07_eratosthenes.js",
    "assignment08_battleship.js"
  ],
  ["topic05_allround",
    "assignment01_sentinel_extreme.js",
    "assignment02_factorial2.js",
    "assignment03_factorial3.js",
    "assignment04_variation.js",
    "assignment05_sentinel_extreme_pro.js",
    "assignment06_sentinel_armageddon.js"
  ]
];

function createPath (topic, assignment) {
  return path.join(path.resolve(), `./exercises/${paths[topic][0]}/${paths[topic][assignment]}`);
}

export function createPathAndTestCase (topic, assignment) {
  return createTestCase(createPath(topic, assignment));
}

function readFile (aPath) {
  return fs.readFileSync(aPath, "utf-8").replace(/[\r]/g, "").split("\n");
}

export function createTestCase (path2test) {
  let input = false;
  let output = false;

  let theFunction = () => {
    if (!input) {
      throw new Error("No input set");
    }
    if (!output) {
      throw new Error("No output set");
    }

    return io.runFileWithInputs(path2test, ...input).then(actualOutputStrings => {
      assert.strictEqual("", actualOutputStrings.pop()); // last line is always empty because println.
      return actualOutputStrings;
    }).then(output);
  };

  theFunction.withInput = (...inputStrings) => {
    input = inputStrings;
    return theFunction;
  };
  theFunction.withoutInput = () => {
    input = [];
    return theFunction;
  };
  theFunction.withIntegerInput = (...inputInts) => {
    input = inputInts.map(n => n.toString());
    return theFunction;
  };

  theFunction.andExpectedOutput = (...expectedOutput) => {
    // A single function-argument is (should be) a lambda that manually checks the output.
    if (expectedOutput.length === 1 && expectedOutput[0] instanceof Function) {
      output = expectedOutput[0];
    } else {
      output = actualOutputs => assert.deepStrictEqual(actualOutputs, expectedOutput);
    }


    return theFunction;
  };

  theFunction.andExpectedFloatingPoint = (number, fractionDigits) => {
    return theFunction.andExpectedOutput(number.toFixed(fractionDigits));
  };
  theFunction.andExpectedInteger = (number) => {
    return theFunction.andExpectedOutput(number.toString());
  };
  theFunction.andExpectedIntegers = (...numbers) => {
    return theFunction.andExpectedOutput(...numbers.map(x => x.toString()));
  };
  theFunction.andExpectedOutputLikeFile = (path2output) => {
    return theFunction.andExpectedOutput(...readFile(path2output));
  };

  return theFunction;
}
