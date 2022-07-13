type whichFunc =
  | ((string: string) => string)
  | ((string: string) => number)

function MyFunction(func: whichFunc) {
  const result = func('hoge')
  console.log(result)
}
