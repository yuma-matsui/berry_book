import { time } from "console"

type Human = {
  name: string
  age: number
}

function getHumanAge(human: Human | undefined) {
  const validAge = human?.age
  console.log(validAge) // => undefined
}

type GetTime = () => Date

function showTime (getTimeFunc: GetTime | undefined) {
  const timeOrUndefined = getTimeFunc?.().toTimeString()
  return timeOrUndefined
}

console.log(showTime(undefined)) // undefined
