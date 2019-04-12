import getDBData from "./utils/getDBData";

describe("parseKDB", () => {
  it("returns array of course", async () => {
    const h = await getDBData()
    console.log(h)
  });
});
