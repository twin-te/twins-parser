export function parseTwins(csvText: string): string[] {
  function generateError() {
    return new Error("Invalid CSV.");
  }

  const splitted = csvText.split("\n");

  if (splitted.length < 1) {
    throw generateError();
  }

  const results: string[] = [];
  for (let i = 0; i < splitted.length; i++) {
    results[i] = splitted[i].replace(/\"/g, "");

    if (!results[i].match(/^[A-Z0-9]{7}/)) {
      throw generateError();
    }
  }
  return results;
}
