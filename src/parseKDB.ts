import { parseCSV } from "./lib/parseCSV";

type Course = {
  courseNumber: string;
  courseName: string;
  credits: string;
  year: string[];
  term: string;
  weekdayAndPeriod: string;
  classRooms: string[];
  instructors: string[];
  courseOverview: string;
  remarks: string;
};

export function parseKDB(csvText: string): Course[] {
  const parsed = parseCSV(csvText);
  const courses: Course[] = [];

  for (const row of parsed) {
    // Convert from a string like "1・2" to an array
    const year = row[4].split("・");

    // Convert from a string like "4A304,3A204" to an array
    const classRooms = row[7].split(",");

    // Convert from a string like "山田 太郎,田中 花子" to an array
    const instructors = row[8].split(",");

    const course: Course = {
      courseNumber: row[0],
      courseName: row[1],
      credits: row[3],
      year,
      term: row[5],
      weekdayAndPeriod: row[6],
      classRooms,
      instructors,
      courseOverview: row[9],
      remarks: row[10]
    };

    courses.push(course);
  }

  return courses;
}
