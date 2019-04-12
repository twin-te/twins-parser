import { parseCsv } from "../src";

describe("parseCSV", () => {
  it("returns array of string", () => {
    const csv = "\"AAAAAAA\"\n\"BBBBBBB\"\n\"CCCCCCC\"";
    const results = parseCsv(csv);
    expect(results).toEqual(["AAAAAAA", "BBBBBBB", "CCCCCCC"]);
  });

  it("throws error when csv length is 0", () => {
    const csv = "";
    expect(() => {
      parseCsv(csv);
    }).toThrow();
  });

  it("throws error when parsed item length is not 7", () => {
    const csv = "\"AAAAAA\"";
    expect(() => {
      parseCsv(csv);
    }).toThrow();
  });

  it("throws error when parsed item other than numbers and upper case letters", () => {
    const csv1 = "\"aaaaaaa\"";
    const csv2 = "\"これはななもじ\"";
    expect(() => {
      parseCsv(csv1);
    }).toThrow();
    expect(() => {
      parseCsv(csv2);
    }).toThrow();
  });
});
