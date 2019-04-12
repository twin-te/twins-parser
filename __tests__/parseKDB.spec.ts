import getDBData from "./utils/getDBData";
import { parseKDB } from "../src";

describe("parseKDB", () => {
  it("returns array of course", async () => {
    const csvText = await getDBData();
    const result = parseKDB(csvText);
    // TODO: テスト書く
    expect(result).not.toBe("");
  });
});
