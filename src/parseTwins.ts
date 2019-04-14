import { parseCSV } from "./lib/parseCSV";

export function parseTwins(csvText: string): string[] {
  function generateError() {
    return new Error("Invalid CSV.");
  }

  const parsed = parseCSV(csvText);

  if (parsed.length < 1) {
    throw generateError();
  }

  const results: string[] = [];

  for (let i = 0; i < parsed.length; i++) {
    if (!parsed[i][0].match(/^[A-Z0-9]{7}/)) {
      throw generateError();
    }

    results[i] = parsed[i][0];
  }

  return results;
}
