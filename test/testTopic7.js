import assert from "assert";

import {createRGBColor,createPerson, colorDistance, findMatch} from "../exercises/topic07_objects/assignment01_objects_as_entities.js";
import {countLetters, orderLettersByFrequency, popMostFrequent} from "../exercises/topic07_objects/assignment02_objects_as_dictionaries.js";
import {combine, zip} from "../exercises/topic07_objects/assignment03_abstract_objects.js";

describe("7 Objects", function () {
  describe("1 Objects as Entities", function () {
    it("createRGBColor", function () {
      assert.deepStrictEqual(createRGBColor(1,2,3 ), {r:1,g:2,b:3});
    });
    it("createPerson", function () {
      assert.deepStrictEqual(
        createPerson("Alice", 123, createRGBColor(1,2,3 )),
        {name:"Alice", age:123, favoriteColor:{r:1,g:2,b:3}}
      );
    });
    it("colorDistance", function () {
      assert.strictEqual(colorDistance({r:1,g:2,b:3}, {r:1,g:2,b:3}), 0);
      assert.strictEqual(colorDistance({r:0,g:2,b:3}, {r:1,g:2,b:3}), 1);
      assert.strictEqual(colorDistance({r:1,g:0,b:3}, {r:1,g:2,b:3}), 4);
      assert.strictEqual(colorDistance({r:1,g:2,b:0}, {r:1,g:2,b:3}), 9);
    });
    it("findMatch", function () {
      let cupid  = createPerson("Cupid", 123, createRGBColor(255, 0 ,0));

      let alice  = createPerson("Alice", 123, createRGBColor(0, 255 ,0));
      let bob  = createPerson("Bob", 123, createRGBColor(250, 10 ,10));
      let carol  = createPerson("Carol", 123, createRGBColor(0, 0 ,255));

      assert.deepStrictEqual(findMatch(cupid, [alice, bob, carol]), bob);
    });
  });

  describe("2 Objects as Dictionaries", function () {
    describe("countLetters", function () {
      let table = countLetters("azertyAZERTY!?123ccc");

      it("upper and lower are counted equally as lower", function () {
        for(let ch of "azerty") {
          assert.strictEqual(table[ch], 2);
        }

        for(let ch of "AZERTY") {
          assert.ok(!(ch in table));
        }
      });

      it("higher frequency", function () {
        assert.strictEqual(table["c"], 3);
      });

      it ("numbers do not occur", function () {
        assert.ok(!("1" in table));
      });
    });
    describe("popMostFrequent", function () {
      it("You get the most frequent letter", function () {
        let table = {a: 1, b : 2};
        assert.strictEqual(popMostFrequent(table), "b");
      });
      it("Only others remain", function () {
        let table = {a: 1, b : 2};
        popMostFrequent(table);
        assert.deepStrictEqual(table, {a: 1});
      });

    });
    it("orderLettersByFrequency", function () {
      assert.deepStrictEqual(orderLettersByFrequency("abbccc"), "cba");
    });
  });

  describe("Abstract object functions", function () {
    describe("combine", function () {
      it("Disjoint objects", function () {
        assert.deepStrictEqual(combine({a:1},{b:2}), {a:1,b:2});
        assert.deepStrictEqual(combine({a:1},{b:2}), {b:2,a:1});
      });

      it("Same value", function () {
        assert.deepStrictEqual(combine({a:1,c:3},{b:2,c:3}), {a:1,b:2,c:3});
      });

      it("Different value", function () {
        assert.deepStrictEqual(combine({a:1,c:3},{b:2,c:4}), {a:1,b:2,c:[3,4]});
      });
    });
    describe("zip", function (){
      it("Expected", function () {
        assert.deepStrictEqual(zip(["a", "b", "c"], [1,2,3]), {
          a:1,b:2,c:3
        });
      });

      it("Empty", function () {
        assert.deepStrictEqual(zip([], []), {});
      });

      it("Too many keys", function () {
        assert.deepStrictEqual(zip(["a", "b", "c"], [1,2]), undefined);
      });

      it("Too few keys", function () {
        assert.deepStrictEqual(zip(["a", "b"], [1,2, 3]), undefined);
      });
    });
  });
});

