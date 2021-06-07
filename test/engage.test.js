//const engages = require("./engage");
const { palette } = require("../src/pages/api/ImageProcess");

let pl = palette();

describe("check image color", () => {
  it("should execute color count palette equal to 32768", () => {
    let result = pl.length;
    expect(result).toBe(32768);
  });

  it("should execute Color uniqueness", () => {
    const result = new Set(pl);
    const isArrayUnique = result.size === pl.length;
    expect(isArrayUnique).toBe(true);
  });
});
