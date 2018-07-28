
const chai = require('chai');
const mocha = require('mocha');
const utils = require('../utils');

const { assert } = chai;
const { describe, it } = mocha;
const { pow } = utils;

//-------- tests --------

describe("pow", function() {

  describe("возводит x в степень 3", function() {
    const makeTest = (x) => {
      const expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("возводит x в степень 2 - before, after", function() {
    before(() => console.log("- Начало всех тестов"));
    after(() => console.log("- Окончание всех тестов"));
    beforeEach(() => console.log("  - Вход в тест"));
    afterEach(() => console.log("  - Выход из теста"));

    const makeTest = (x) => {
      const expected = x * x;
      it("при возведении " + x + " в степень 2 результат: " + expected, function() {
        assert.equal(pow(x, 2), expected);
      });
    }

    for (let x = 1; x <= 3; x++) {
      makeTest(x);
    }
  });

  describe("прочее", function() {
    it("при возведении в отрицательную степень результат NaN", function() {
      assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function() {
      assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
    });

    it("ноль в нулевой степени даёт NaN", function() {
      assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
    });
  });
});

