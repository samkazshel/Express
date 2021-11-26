const { expect } = require("chai");
const chai = require("chai");
const chatHttp = require("chai-http");

describe("Basic Testing Process", () => {
  it("Should print the world hello", function () {
    let testString;
    let name = "sam";

    testString = `Hello ${name}`;

    expect(testString).to.equal(`Hello ${name}`);
    expect(testString).to.be.a("String");
  });

  it("5 times 4 equal to 20", function () {
    let num1 = 5;
    let num2 = 4;
    let sum;

    sum = num1 * num2;

    expect(sum).to.equal(20);
    expect(sum).to.be.a("number");
  });

  it("Should return the value of 1 + 2 + 3 + 4", function () {
    let num1 = 1;
    let num2 = 2;
    let num3 = 3;
    let num4 = 4;
    let sum;

    sum = num1 + num2 + num3 + num4;

    expect(sum).to.equal(10);
    expect(sum).to.be.a("number");
  });

  it("The number 12 should not be undefined", function () {
    let num = 12;

    expect(num).to.not.be.a("undefined");
  });

  it("Should the variable be null", function () {
    let look = null;

    expect(look).to.be.a("null");
  });

  it("should have a property of name", function () {
    let newObject = {
      name: newObject,
      length: 5,
      isExisting: true,
    };

    expect(newObject).to.have.keys("name");
  });
});
