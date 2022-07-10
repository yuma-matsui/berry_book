function FizzBuzz(num: number): void {
  if (num % 15 === 0) {
    process.stdout.write('FizzBuzz')
  } else if (num % 3 === 0) {
    process.stdout.write('Fizz') 
  } else if (num % 5 === 0) {
    process.stdout.write('Buzz') 
  } else {
    process.stdout.write(`${num}`)
  }
  process.stdout.write(' ')
}

for (let index = 1; index <= 100; index++) FizzBuzz(index)
