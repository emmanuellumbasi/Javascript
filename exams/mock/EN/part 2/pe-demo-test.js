import assert from "assert";
import util from "util";
import esmock from "esmock";

import path from "path";

function toString(msg) {
    return util.inspect(msg, { colors: false, depth: null });
}

function test(input, expectedOutput) {
    input = [...input].reverse(); // copy
    const output = [];
    return esmock(path.resolve("./exercises/pe/pe-demo.js"), {
        "../utils/io-for-pf.js": {
            read: () => {
                const i = input.pop();
                //console.log("read:",i);
                return i;
            },
            write: (msg) => {
                output.push(toString(msg));
            },
        },
    }).then(() => {
        expectedOutput = expectedOutput.map(toString);
        //console.log("Done", output, expectedOutput);
        assert.deepStrictEqual(output, expectedOutput);
        return false;
    });
}

describe("Partial Exam (demo)", function () {

    it("Empty file works (will fail if you made the exercise, that is as expected)", async function () {
        await test([],[]);
    });

    it("Three-two", async function () {
        await test(["3","2"],[[0,0,0],["a","b","c"],"b"]);
    });

    it("Three-Oh", async function () {
        await test(["3","0"],[[0,0,0],["a","b","c"],"Ongeldige positie"]);
    });

    it("Five-two", async function () {
        await test(["5","2"],[[0,0,0,0,0],["a","b","c","d","e"],"b"]);
    });

    it("Oh-oh", async function () {
        await test(["0","0"],[[0,0,0,0,0],["a","b","c","d","e"],"Ongeldige positie"]);
    });
    
    
});