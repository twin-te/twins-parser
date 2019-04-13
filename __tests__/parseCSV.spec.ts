import getDBData from "./utils/getDBData";
import { parseCSV } from "../src/parseCSV";

describe("parseCSV", () => {
  it("returns array of csv", async () => {
    const csvText = await getDBData();
    const result = await parseCSV(csvText);
    expect(result).not.toBe("");
  });
});
