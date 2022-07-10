import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください', (line) => {
  // 型推論でresult: numberとなる
  const result = Number(line) + 1000
  if (Number.isNaN(result)) {
    console.log('数値を入力してください')
  } else {
    console.log(`${result}が入力されました`)
  }
  rl.close()
})
