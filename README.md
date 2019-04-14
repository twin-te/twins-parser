# twins-parser

[![CircleCI](https://circleci.com/gh/sosukesuzuki/twins-parser.svg?style=svg)](https://circleci.com/gh/sosukesuzuki/twins-parser)

twins と kdb からダウンロードした CSV のためのパーサーです。

## インストール

```sh
$ npm install --save twins-parser
```

## ドキュメント

### `parseTwins(csvText: string): string[]`

Twins からダウンロードした CSV の文字列を受け取って、講座番号の配列を返します。

例

```ts
import { parseTwins } from "twins-parser";

// twinsからダウンロードしたCSVファイルをデコードしてテキストを取得してください
const twinsCSV = getTwinsCSV();
const parsed = parseTwins(csv); // e.g. ["AAAAAAA", "BBBBBBB", "CCCCCCC"]
```

### `parseKDB(csvText: string): Course[]`

KDB からダウンロードした CSV の文字列を受け取って、`Course`型の配列を返します。
`Course`型は以下のように定義されています。

```ts
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
```

例

```ts
import { parseKDB } from "twins-parser";

// kdbからダウンロードしたCSVファイルをデコードしてテキストを取得してください
const csv = getKDBCSV();
const parsed = parseKDB(csv); /* e.g.
{
  courseNumber: "AAAAAAA",
  courseName: "講座の名前",
  credits: "2.0",
  year: ["1", "2"],
  term: "春AB",
  weekdayAndPeriod: "月1,2",
  classRooms: ["BBBBB", "CCCCC"],
  instructors: ["山田 太郎", "田中 花子"],
  courseOverview: "講座の概要",
  remarks: "備考"
}
*/
```

## ライセンス

MIT
