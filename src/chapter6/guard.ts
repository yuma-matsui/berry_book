type Human2 = {
  type: 'Human'
  name: string
  age: number
}

type Animal2 = {
  type: 'Animal'
  name: string
}

type Creature2 = Human2 | Animal2

function getAge(creature: Creature2): number | string {
  if (isHuman(creature)) return creature.age
  return '獣医さんに聞いてみてください'
}

function isHuman(creature: Creature2): creature is Human2 {
  return creature.type === 'Human'
}

const yumyum: Human2 = {
  type: 'Human',
  name: 'yum',
  age: 30
}

console.log(getAge(yumyum)) // => 30
