import { parseCSV } from "./parseCSV";

type Course = {
  id: string;
  title: string;
  credit: string;
  annuals: string;
  terms: string;
  periods: string;
  rooms: string;
  instructors: string;
  overview: string;
  remark: string;
};

export function parseKDB(csvText: string): Course[] {
  const parsed = parseCSV(csvText);
  const courses: Course[] = [];

  for (const row of parsed) {
    const course: Course = {
      id: row[0],
      title: row[1],
      credit: row[3],
      annuals: row[4],
      terms: row[5],
      periods: row[6],
      rooms: row[7],
      instructors: row[8],
      overview: row[9],
      remark: row[10]
    };

    courses.push(course);
  }

  return courses;
}
