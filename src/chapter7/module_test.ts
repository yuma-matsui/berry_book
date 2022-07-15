import { readFileSync } from "fs"

function countUhyo (filePath: string) {
  let count = 0
  const data = readFileSync(filePath, { encoding: 'utf-8' })
  const matches = data.match(/uhyo/g)
  if (matches) {
    count = matches.length
  }
  return count
}

console.log(countUhyo('uhyo.txt'))
