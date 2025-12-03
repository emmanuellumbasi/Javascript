import assert from "assert";


// People and ages:
import {findByName, getAge, getOldest} from "../exercises/topic08_exam_like/age/resit-exam1819.js";

// Measurements:
import { drop, split, take } from "../exercises/topic08_exam_like/measurements-summarize/exam2223_v1.js";
import { selectProperties, extremes, min, max } from "../exercises/topic08_exam_like/measurements-summarize/exam2223_v2.js";
import {summarizePerWeek, generateDemoData} from "../exercises/topic08_exam_like/measurements-summarize/exam2223_v3.js";

// Patients:
import {indexOfFirstSymptomaticDay, indexOfLastSymptomaticDay, firstSymptomaticDay, lastSymptomaticDay} from "../exercises/topic08_exam_like/patients/exam2021_patients_part1.js";
import {getIncubationDays, getSicknessDays, getRecoveredDays} from "../exercises/topic08_exam_like/patients/exam2021_patients_part2.js";
import { hadSymptoms } from "../exercises/topic08_exam_like/patients/exam2021_patients_part3.js";

describe("8 Exam-like", function () {
  describe("1 People and ages (2018-2019)", function () {
    describe("Find by Name", function () {
      it("Existing person, singleton", function () {
        assert.deepStrictEqual(findByName([{name:"Alice", age:123}], "Alice"), {name:"Alice", age:123});
      });

      it("Existing person (list of five)", function () {
        const ppl = [
          {name:"Alice", age:123},
          {name:"Bob", age:123},
          {name:"Carol", age:123},
          {name:"David", age:123},
          {name:"Eve", age:123}
        ];

        for (let person of ppl) {
          assert.deepStrictEqual(findByName(ppl, person.name), person);
        }

      });

      it("Non-Existing person", function () {
        assert.strictEqual(findByName([{name:"Alice", age:123}], "Bob"), null);
      });
    });

    describe("Get age", function () {
      it("Existing person", function () {
        assert.strictEqual(getAge([{name:"Alice", age:123}], "Alice"), 123);
      });

      it("Non-Existing person", function () {
        assert.strictEqual(getAge([{name:"Alice", age:123}], "Bob"), undefined);
      });
    });

    describe("Get oldest", function (){
      it("One", function () {
        assert.deepStrictEqual(getOldest([
          {name:"Alice", age:1},
          {name:"Bob", age:2},
          {name:"Carol", age:9},
          {name:"David", age:3},
          {name:"Eve", age:4}
        ]), [{name:"Carol", age:9}]);
      });

      it("Two", function () {
        assert.deepStrictEqual(getOldest([
          {name:"Alice", age:9},
          {name:"Bob", age:2},
          {name:"Carol", age:9},
          {name:"David", age:3},
          {name:"Eve", age:4}
        ]), [{name:"Alice", age:9}, {name:"Carol", age:9}]);
      });

      it("All", function () {
        const ppl = [
          {name:"Alice", age:123},
          {name:"Bob", age:123},
          {name:"Carol", age:123},
          {name:"David", age:123},
          {name:"Eve", age:123}
        ];
        assert.deepStrictEqual(getOldest(ppl), ppl);
      });
    });
  });
  describe("2 Measurements (2022-2023)", function () {
    describe("File V1", function () {

      describe("take", function () {

        it("None", function () {
          assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 0), []);
        });

        it("Less", function () {
          assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 2), ["a", "b"]);
        });

        it("All", function () {
          assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 5), ["a", "b", "c", "d", "e"]);
        });

        it("Too much", function () {
          assert.deepStrictEqual(take(["a", "b", "c", "d", "e"], 6), ["a", "b", "c", "d", "e"]);
        });

      });

      describe("drop", function () {

        it("None", function () {
          assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 0), ["a", "b", "c", "d", "e"]);
        });

        it("Less", function () {
          assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 2), ["c", "d", "e"]);
        });

        it("All", function () {
          assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 5), []);
        });

        it("Too much", function () {
          assert.deepStrictEqual(drop(["a", "b", "c", "d", "e"], 6), []);
        });

      });

      describe("split", function () {

        it("Divisible", function () {
          assert.deepStrictEqual(split(["a", "b", "c", "d", "e", "f"], 2), [["a", "b"], ["c", "d"], ["e", "f"]]);
        });

        it("Not Divisible", function () {
          assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 2), [["a", "b"], ["c", "d"], ["e"]]);
        });

        it("All", function () {
          assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 5), [["a", "b", "c", "d", "e"]]);
        });

        it("Too much", function () {
          assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 6), [["a", "b", "c", "d", "e"]]);
        });

        it("None", function () {
          assert.deepStrictEqual(split(["a", "b", "c", "d", "e"], 0), []);
        });

      });

    });

    describe("File V2", function () {

      describe("selectProperties", function (){
        it("Empty array", function () {
          assert.deepStrictEqual(selectProperties([], "name"), []);
        });

        it("Select names", function () {
          assert.deepStrictEqual(selectProperties([
            {name: "Alice", age : 100},
            {name: "Bob", age : 101},
            {name: "Carol", age : 102}
          ], "name"), ["Alice", "Bob", "Carol"]);
        });

        it("Select ages", function () {
          assert.deepStrictEqual(selectProperties([
            {name: "Alice", age : 100},
            {name: "Bob", age : 101},
            {name: "Carol", age : 102}
          ], "age"), [100, 101, 102]);
        });

        it("Non existing property", function () {
          assert.strictEqual(selectProperties([
            {name: "Alice", age : 100},
            {name: "Bob", age : 101},
            {name: "Carol", age : 102}
          ], "occupation").length, 3);
        });
      });

      describe("extremes", function (){
        it("All positive", function () {
          assert.deepStrictEqual(extremes([2,1,3]), {min:1,max:3});
        });

        it("All negative", function () {
          assert.deepStrictEqual(extremes([-2,-1,-3]), {min:-3,max:-1});
        });

        it("Mix", function () {
          assert.deepStrictEqual(extremes([-1,0,1]), {min:-1,max:1});
        });

        it("Decimal numbers", function () {
          assert.deepStrictEqual(extremes([3.14,0,-3.14]), {min:-3.14,max:3.14});
        });

        it("Empty", function () {
          assert.deepStrictEqual(extremes([]), {min:NaN,max:NaN});
        });

      });

      describe("min", function (){
        it("All positive", function () {
          assert.strictEqual(min([2,1,3]), 1);
        });

        it("All negative", function () {
          assert.strictEqual(min([-2,-1,-3]), -3);
        });

        it("Mix", function () {
          assert.strictEqual(min([-1,0,1]), -1);
        });

        it("Decimal numbers", function () {
          assert.strictEqual(min([3.14,0,-3.14]), -3.14);
        });

        it("Empty", function () {
          assert.strictEqual(min([]), NaN);
        });
      });

      describe("max", function (){
        it("All positive", function () {
          assert.strictEqual(max([2,1,3]), 3);
        });

        it("All negative", function () {
          assert.strictEqual(max([-2,-1,-3]), -1);
        });

        it("Mix", function () {
          assert.strictEqual(max([-1,0,1]), 1);
        });

        it("Decimal numbers", function () {
          assert.strictEqual(max([3.14,0,-3.14]), 3.14);
        });

        it("Empty", function () {
          assert.strictEqual(max([]), NaN);
        });
      });

    });

    describe("File V3", function () {
      describe("summarizePerWeek", function (){
        it("A year has 52 weeks and a few days", function (){
          assert.strictEqual(summarizePerWeek(generateDemoData()).length, 53);
        });

        it("Every week has summary for temperature", function (){
          const weekSummaries = summarizePerWeek(generateDemoData());
          for(const weekSummary of weekSummaries) {
            assert.ok(weekSummary.temperature);
            assert.strictEqual(typeof weekSummary.temperature.min, "number");
            assert.strictEqual(typeof weekSummary.temperature.max, "number");
            assert.ok(weekSummary.temperature.min <= weekSummary.temperature.max);
          }
        });

        it("Every week has summary for humidity", function (){
          const weekSummaries = summarizePerWeek(generateDemoData());
          for(const weekSummary of weekSummaries) {
            assert.ok(weekSummary.humidity);
            assert.strictEqual(typeof weekSummary.humidity.min, "number");
            assert.strictEqual(typeof weekSummary.humidity.max, "number");
            assert.ok(weekSummary.humidity.min <= weekSummary.humidity.max);
          }
        });


      });
    });
  });
  describe("3 Patients (2021-2022)", function () {
    const myTestData1 = [
      {"date": "2021/01/01", "symptoms": false},
      {"date": "2021/01/02", "symptoms": false},
      {"date": "2021/01/03", "symptoms": false},
      {"date": "2021/01/04", "symptoms": false},
      {"date": "2021/01/05", "symptoms": true},
      {"date": "2021/01/06", "symptoms": false},
      {"date": "2021/01/07", "symptoms": false},
      {"date": "2021/01/08", "symptoms": true},
      {"date": "2021/01/09", "symptoms": true},
      {"date": "2021/01/10", "symptoms": false}
    ];

    const myTestData2 = [
      {"date": "2021/01/01", "symptoms": false},
      {"date": "2021/01/02", "symptoms": true},
      {"date": "2021/01/03", "symptoms": true},
      {"date": "2021/01/04", "symptoms": false},
      {"date": "2021/01/05", "symptoms": true},
      {"date": "2021/01/06", "symptoms": false},
      {"date": "2021/01/07", "symptoms": false},
      {"date": "2021/01/08", "symptoms": false},
      {"date": "2021/01/09", "symptoms": false},
      {"date": "2021/01/10", "symptoms": false}
    ];

    const myTestData3 = [
      {"date": "2021/01/01", "symptoms": false},
      {"date": "2021/01/02", "symptoms": false},
      {"date": "2021/01/03", "symptoms": false},
      {"date": "2021/01/04", "symptoms": false},
      {"date": "2021/01/05", "symptoms": false},
      {"date": "2021/01/06", "symptoms": false},
      {"date": "2021/01/07", "symptoms": false},
      {"date": "2021/01/08", "symptoms": true},
      {"date": "2021/01/09", "symptoms": false},
      {"date": "2021/01/10", "symptoms": true}
    ];

    const myTestDataNoSymptoms = [
      {"date": "2021/01/01", "symptoms": false},
      {"date": "2021/01/02", "symptoms": false},
      {"date": "2021/01/03", "symptoms": false},
      {"date": "2021/01/04", "symptoms": false},
      {"date": "2021/01/05", "symptoms": false},
      {"date": "2021/01/06", "symptoms": false},
      {"date": "2021/01/07", "symptoms": false},
      {"date": "2021/01/08", "symptoms": false},
      {"date": "2021/01/09", "symptoms": false},
      {"date": "2021/01/10", "symptoms": false}
    ];

    describe("Part I", function () {
      describe("Index of first symptomatic day", function () {
        it("Simple", function (){
          assert.strictEqual(indexOfFirstSymptomaticDay(myTestData1), 4);
          assert.strictEqual(indexOfFirstSymptomaticDay(myTestData2), 1);
        });
        it("None", function () {
          assert.ok(isNaN(indexOfFirstSymptomaticDay(myTestDataNoSymptoms)));
        });
      });

      describe("First symptomatic date", function () {
        it("Simple", function (){
          assert.strictEqual(firstSymptomaticDay(myTestData1), "2021/01/05");
          assert.strictEqual(firstSymptomaticDay(myTestData2), "2021/01/02");
        });

        it("None", function () {
          assert.strictEqual(firstSymptomaticDay(myTestDataNoSymptoms), undefined);
        });
      });

      describe("Index of last symptomatic day", function () {
        it("Simple", function (){
          assert.strictEqual(indexOfLastSymptomaticDay(myTestData1), 8);
          assert.strictEqual(indexOfLastSymptomaticDay(myTestData2), 4);
        });

        it("None", function () {
          assert.ok(isNaN(indexOfLastSymptomaticDay(myTestDataNoSymptoms)));
        });
      });

      describe("Last symptomatic date", function () {
        it("Simple", function (){
          assert.strictEqual(lastSymptomaticDay(myTestData1), "2021/01/09");
          assert.strictEqual(lastSymptomaticDay(myTestData2), "2021/01/05");
        });

        it("None", function () {
          assert.strictEqual(lastSymptomaticDay(myTestDataNoSymptoms), undefined);
        });
      });
    });

    describe("Part II", function () {
      describe("Incubation", function () {
        it("Range", function () {
          assert.deepStrictEqual(getIncubationDays(myTestData1),[
            {"date": "2021/01/01", "symptoms": false},
            {"date": "2021/01/02", "symptoms": false},
            {"date": "2021/01/03", "symptoms": false},
            {"date": "2021/01/04", "symptoms": false}
          ]);
        });

        it("Empty", function () {
          assert.deepStrictEqual(getIncubationDays(myTestDataNoSymptoms), []);
        });
      });

      describe("Sickness", function () {
        it("Range", function () {
          assert.deepStrictEqual(getSicknessDays(myTestData1),[
            {"date": "2021/01/05", "symptoms": true},
            {"date": "2021/01/06", "symptoms": false},
            {"date": "2021/01/07", "symptoms": false},
            {"date": "2021/01/08", "symptoms": true},
            {"date": "2021/01/09", "symptoms": true}
          ]);
        });

        it("Empty", function () {
          assert.deepStrictEqual(getSicknessDays(myTestDataNoSymptoms), []);
        });
      });

      describe("Recovered", function () {
        it("Range", function () {
          assert.deepStrictEqual(getRecoveredDays(myTestData1),[
            {"date": "2021/01/10", "symptoms": false}
          ]);
        });

        it("Empty", function () {
          assert.deepStrictEqual(getRecoveredDays(myTestDataNoSymptoms), []);
        });
      });
    });

    describe("Part III", function () {
      describe("Had Symptom", function () {
        it("Present", function () {
          for(let entry of myTestData3) {
            assert.strictEqual(hadSymptoms(myTestData3, entry.date), entry.symptoms);
          }
        });

        it("Absent", function () {
          assert.strictEqual(hadSymptoms(myTestData3, "2020/12/31"), undefined);
          assert.strictEqual(hadSymptoms(myTestData3, "2021/01/11"), undefined);
        });
      });
    });
  });
});
