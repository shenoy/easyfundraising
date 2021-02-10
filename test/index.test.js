const { expect } = require("chai");
const { add } = require("../index");

describe("Unit Tests", () => {
  it("should return the sum of two numbers", () => {
    let numbers = "1,2";
    let actual = add(numbers);
    let expected = 3;
    expect(actual).to.equal(expected);
      numbers = "1";
      actual = add(numbers);
      expected = 1;
     expect(actual).to.equal(expected);
      numbers = " ";
      actual = add(numbers);
      expected = 0;
      expect(actual).to.equal(expected);
  });

  it("should handle an unknown amount of numbers numbers", () => {
    let numbers = "1,2,3,4,5,7.8,9.2";
    let actual = add(numbers);
    let expected = 32;
    expect(actual).to.equal(expected);
  });

  it("should throw Error for negative numbers and show all the negative numbers", () => {
    let numbers = "1,-2,3,-4,5";
    let actual = add(numbers);
    let expected = "-2,-4 - negative numbers not allowed";
    expect(actual).to.equal(expected);
  });

  it("should ignore numbers greater than 1000", () => {
    let numbers = "1,2,1000";
    let actual = add(numbers);
    let expected = 1003;
    expect(actual).to.equal(expected);
  });

  it("should support different delimiters", () => {
    let numbers = "//\n;1;2;1";
    let actual = add(numbers);
    let expected = 4;
    expect(actual).to.equal(expected);
    numbers = "//\n|1|2|2";
    actual = add(numbers);
    expected = 5;
    expect(actual).to.equal(expected);
    numbers = "//\n-1-2-3";
    actual = add(numbers);
    expected = 6;
    expect(actual).to.equal(expected);
  });
});
