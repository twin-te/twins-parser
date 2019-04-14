import getDBData from "./utils/getDBData";
import { parseKDB } from "../src";

describe("parseKDB", () => {
  it("returns array of course", async () => {
    // Get csv data from "../db/kdb_20190414185835.csv" as utf-8
    const csvText = await getDBData();

    const result = parseKDB(csvText);

    const expectedCourse1 = {
      courseNumber: "01MB211",
      courseName: "ヒューマンコンピュータ・インタラクション",
      credits: "2.0",
      year: ["1", "2"],
      term: "春AB",
      weekdayAndPeriod: "月1,2",
      classRooms: ["7A203"],
      instructors: ["井上 智雄", "三河 正彦"],
      courseOverview:
        "現代のコミュニケーションの機会は対面によるものだけでなく、情報機器やコンピュータネットワークを利用したものを含めて多様化している。これらのコミュニケーション環境は人のコミュニケーションそのものや協調活動に大きな影響を与える。\n本科目では、コミュニケーションや協調活動を支援・拡張する情報環境について、最新の研究を題材に、その目的・設計・実装技術・影響等の点から考究する。",
      remarks: "講義科目"
    };
    const expectedCourse2 = {
      courseNumber: "GC51901",
      courseName: "マークアップ言語",
      credits: "2.0",
      year: ["3", "4"],
      term: "春AB",
      weekdayAndPeriod: "月1,2",
      classRooms: ["7A106", "7C202"],
      instructors: ["永森 光晴"],
      courseOverview:
        "データ交換のための表現形式として様々な分野で活用されているXML(Extensible Markup Language)の基礎とXSLT(XML Stylesheet Language Transformations)等の操作言語について取り上げる。また,理解を深めるために受講者が自ら実験できるようなプログラム例やアプリケーションソフトウェアの利用例も必要に応じて紹介する。",
      remarks: "GE71901と同一。\n受講人数は70人程度を上限とする"
    };
    expect(result).toEqual([expectedCourse1, expectedCourse2]);
  });
});
