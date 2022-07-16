import { readFile } from 'fs/promises'

const data = readFile('uhyo.txt', 'utf-8')

data.then((result) => {
  console.log(result)
})

