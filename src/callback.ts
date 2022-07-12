function map<ParamT, ReturnT>(array: ParamT[], callback: (number: ParamT) => ReturnT): ReturnT[] {
  const newArray: ReturnT[] = []
  for (const item of array) {
    newArray.push(callback(item))
  }
  return newArray
}

const numbers = [1, 1, 2, 3, 5, 8, 13]
const result = map<number, number>(numbers, x => x * 10)
console.log(result)

const numbers2 = [1, -3, -2, 8, 0, -1]
const result2 = map<number, boolean>(numbers2, x => x >= 0)
console.log(result2)
