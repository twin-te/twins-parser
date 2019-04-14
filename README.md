# twins-parser

[![CircleCI](https://circleci.com/gh/sosukesuzuki/twins-parser.svg?style=svg)](https://circleci.com/gh/sosukesuzuki/twins-parser)

twins と kdb からダウンロードした CSV のためのパーサーです。

## インストール

のちのち npm にパブリッシュします。

## ドキュメント

### `parseTwins(csvText: string): string[]`

Twins からダウンロードした CSV の文字列を受け取って、科目番号の配列が返します。

### `parseKDB(csvText: string): Course[]`

KDB からダウンロードした CSV の文字列を受け取って、`Course`型の配列が返します。
が、こちらは間違いなく仕様が変わるので実質 WIP。
