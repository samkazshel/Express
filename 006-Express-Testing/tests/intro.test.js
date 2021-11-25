describe("Testing if basic math works", () => {
  it("Should print the world hello", function () {
    console.log("hello");
  });

  it("Should print the number 5", function () {
    console.log(5);
  });

  before(function () {
    console.log("This will run first");
  });

  after(function () {
    console.log("This will run last");
  });
});
