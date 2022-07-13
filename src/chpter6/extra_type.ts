type Human = {
  name: string;
  age: number;
}

type Animal = {
  name: string;
  age?: number;
}

type Creature = Human | Animal

function getAge (creature: Creature): number {
  if (creature.age === undefined) return 0
  return creature.age
}

