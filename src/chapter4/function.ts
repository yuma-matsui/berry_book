function generateCopyArray<Type> (el: Type, repeatNum: number): Type[] {
  const array: Type[] = []
  for (let i = 0; i < repeatNum; i++) {
    array.push(el)
  }
  return array
}

console.log(generateCopyArray<string>('hello', 5))
console.log(generateCopyArray<boolean>(true, 3))
console.log(generateCopyArray<number>(1, 5))
