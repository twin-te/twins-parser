export async function parseCSV(csvText: string): Promise<string[][]> {
  return new CSVParser(csvText).parse();
}

class CSVParser {
  text: string;

  cursor: number = 0;

  constructor(text: string) {
    this.text = text;
  }

  async parse(): Promise<string[][]> {
    const rows: string[][] = [];
    while (this.cursor < this.text.length) {
      rows.push(this.nextRow());
    }

    return rows;
  }

  nextRow(): string[] {
    const items: string[] = [];

    let char: string = "";
    do {
      items.push(this.nextItem());
      char = this.nextChar();
    } while (char != "\n");

    return items;
  }

  nextItem(): string {
    const firstChar = this.nextChar();
    if (firstChar != '"') {
      throw new Error(`Unexpected char ${firstChar} is found.`);
    }

    let item = "";
    let char = this.nextChar();
    while (char != '"') {
      item += char;
      char = this.nextChar();
    }

    return item;
  }

  nextChar(): string {
    this.cursor += 1;
    return this.text.charAt(this.cursor - 1);
  }
}
