export const name = 'yum'
export const age = 100

function getName () {
  return 'yum'
}

function getAge () {
  return 100
}

export type Human = {
  name: string
  age: number
}

type Animal = {
  name: string
  feet: number
}

export { Animal }
export { getName, getAge }
