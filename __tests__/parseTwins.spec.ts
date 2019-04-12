import { parseTwins } from "../src";

function expectToThrow(csv: string) {
  expect(() => {
    parseTwins(csv);
  }).toThrow();
}

describe("parseTwins", () => {
  it("returns array of string", () => {
    const csv = '"AAAAAAA"\n"BBBBBBB"\n"CCCCCCC"';
    const results = parseTwins(csv);
    expect(results).toEqual(["AAAAAAA", "BBBBBBB", "CCCCCCC"]);
  });

  it("throws error when csv length is 0", () => {
    const csv = "";
    expectToThrow(csv);
  });

  it("throws error when parsed item length is not 7", () => {
    const csv = '"AAAAAA"';
    expectToThrow(csv);
  });

  it("throws error when parsed item other than numbers and upper case letters", () => {
    const csv1 = '"aaaaaaa"';
    const csv2 = '"これはななもじ"';
    expectToThrow(csv1);
    expectToThrow(csv2);
  });
});
