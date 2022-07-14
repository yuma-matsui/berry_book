const myName = 'yum'

const yum = {
  myName,
  age: 30
}

type Name = typeof myName // => 'yum'(リテラル型)
type Person = typeof yum // => { myName: string, age: number }
