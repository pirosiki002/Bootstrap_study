// 参考：TypeScriptのゾッとする話 ~ Zodの紹介 ~
// https://zenn.dev/uttk/articles/bd264fa884e026

import * as z from "zod";

// スキーマを作成
const schema = z.object({
  str: z.string(),
});

// 値を検証する
try {
  const ok = schema.parse({ str: "" });
  const throw_error = schema.parse({ str: 0 });
} catch (err) {
  // 検証に失敗するとエラーが投げられます。

  console.error(err);
  /*
    // エラーオブジェクトの内容👇
    [
      {
        "code": "invalid_type", // エラータイプ
        "expected": "string",   // 期待した型
        "received": "number",   // 受け取った値の型
        "path": [ "str" ],      // エラーが発生したプロパティへのパス
        "message": "Expected string, received number" // エラー内容
      }
    ]
  */
}
