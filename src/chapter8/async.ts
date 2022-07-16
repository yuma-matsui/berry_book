import { readFile } from 'fs/promises'
import path, { resolve } from 'path'
import { fileURLToPath } from "url"

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, '../uhyo.txt')

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

const errorAfter1ms = async () => {
  await sleep(1)
  throw new Error('TimeOut')
}

const data = await Promise.race([
  readFile(dataFile, 'utf-8'),
  errorAfter1ms()
])

let count = 0
let currentIndex = 0
while (true) {
  const nextIndex = data.indexOf('uhyo', currentIndex)
  if (nextIndex >= 0) {
    count++
    currentIndex = nextIndex + 1
  } else {
    break;
  }
}

console.log(count)
