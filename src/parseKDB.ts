import neatCsv from "neat-csv";

// TODO: 講座の型を作る
type Course = {
  way: string;
  id: string;
  title: string;
  credit: string;
  annual: string;
  terms: string;
  periods: string;
  room: string;
  instructors: string;
  overview: string;
  remark: string;
};

export async function parseKDB(csvText: string): Promise<Course[]> {
  const parsed = await neatCsv(csvText);
  const lines = parsed.map((row, i) =>
    i === 0 ? Object.keys(row) : Object.values(row)
  );
  const courses = lines.map(line => {
    const way = line[0];
    const id = line[1];
    const title = line[2];
    const credit = line[3];
    const annual = line[4];
    const terms = line[5];
    const periods = line[6];
    const room = line[7];
    const instructors = line[8];
    const overview = line[9];
    const remark = line[10];
    return {
      way,
      id,
      title,
      credit,
      annual,
      terms,
      periods,
      room,
      instructors,
      overview,
      remark
    };
  });
  return courses;
}
