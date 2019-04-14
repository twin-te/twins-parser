import { parseCSV } from "../src/parseCSV";

describe("parseCSV", () => {
  it("returns array of single line csv", async () => {
    const csvText = '"item1","item2","item3"';
    const result = await parseCSV(csvText);
    expect(result).toEqual([["item1", "item2", "item3"]]);
  });

  it("returns array of multi line csv", async () => {
    const csvText =
      '"item1-1","item1-2","item1-3"\n"item2-1","item2-2","item2-3"';
    const result = await parseCSV(csvText);
    expect(result).toEqual([
      ["item1-1", "item1-2", "item1-3"],
      ["item2-1", "item2-2", "item2-3"]
    ]);
  });

  it("throws error with invalid csv", async () => {
    const csvText = '"item1",,"item2"';
    try {
      parseCSV(csvText);
    } catch (error) {
      const expectedError = new Error(`Unexpected char "," is found.`);
      expect(error).toEqual(expectedError);
    }
  });
});
