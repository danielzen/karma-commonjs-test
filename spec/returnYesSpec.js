var returnYes = require("../js/returnYes").returnYes;

describe("returnYes", function() {

  it("should return Yes", function() {
    expect(returnYes()).toBe("Yes");
  });

});
