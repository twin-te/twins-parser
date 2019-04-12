import fs from "fs";
import path from "path";
import Iconv from "iconv";

function createError<E extends Error>(filename: string, error: E): Error {
  return new Error(`Unable to read ${filename}: ${error.message}`);
}

function getfileContentOrNull(filename: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if (error && error.code !== "ENOENT") {
        reject(createError(filename, error));
      } else {
        if (error) throw error;
        resolve(data);
      }
    });
  });
}

function decode(buffer: Buffer): string {
  const iconv = (Iconv as any).Iconv("Shift_JIS", "UTF-8//TRANSLIT//IGNORE");
  return iconv.convert(buffer).toString();
}

export default async function() {
  const filename = path.join(__dirname, "..", "db", "kdb_20190413022300.csv");
  const buffer = await getfileContentOrNull(filename);
  return decode(buffer);
}
