import { ReadLine } from "readline"

const p = new Promise<string>((resolve) => {
  resolve('hello')
})

function getPromise<T>(param: T): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(param)
  })
}

p.then((result) => {
  console.log(result)
})
const numberPromise = await getPromise(100)
const hello = await p

console.log(numberPromise, hello)
