type F = (repeatNum: number) => string

// Fの関数型からnumと返り値の型を推論する
const xRepeat: F = (num) => 'x'.repeat(num)



type myObj = {
  method: (string: string) => string;
}

const obj: myObj = {
  method: (string) => string
}
