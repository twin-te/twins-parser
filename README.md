# twins-parser

twinsとkdbからダウンロードしたCSVのためのパーサーです。

## インストール

のちのちnpmにパブリッシュします。

## ドキュメント

### `parseTwins(csvText: string): string[]`

TwinsからダウンロードしたCSVの文字列を受け取って、科目番号の配列が返します。

### `parseKDB(csvText: string): Cource[]`
KDBからダウンロードしたCSVの文字列を受け取って、`Cource`型の配列が返します。
が、こちらは間違いなく仕様が変わるので実質WIP。

## TODO

- [ ] `parseKDB`のテストを書く
- [ ] `parseKDB`のそれぞれの項目を文字列で返してるけどもう少し親切に返す
- [ ] `parseKDB`のバリデーション
- [ ] npmへのpublish
