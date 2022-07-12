function getFizzBuzz(number: number): string | number {
  if (isFizzBuzz(number)) return 'FizzBuzz'
  if (isFizz(number)) return 'Fizz'
  if (isBuzz(number)) return 'Buzz'
  return number
}

type CheckFizzBuzz = (number: number) => boolean
type Sequence = (startNum: number, endNum: number) => number[]


const isFizzBuzz: CheckFizzBuzz = number => isFizz(number) && isBuzz(number)

const isFizz: CheckFizzBuzz = number => number % 3 === 0

const isBuzz: CheckFizzBuzz = number => number % 5 === 0

const sequence: Sequence = (startNum, endNum) => {
  const array = []
  for(let i = startNum; i <= endNum; i++) {
    array.push(i)
  }
  return array
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzz(i)
  console.log(message)
}
