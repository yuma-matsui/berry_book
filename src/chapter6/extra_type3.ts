type Animal = {
  tag: 'Animal'
  name: string
  age: number
}

type Human =  {
  tag: 'Human'
  name: string
  age: number
  gender: string
}

type Creature = Human | Animal

function getGender (creature: Creature): string {
  switch (creature.tag) {
    case 'Animal':
      return '獣医さんに調べてもらってください'
    case 'Human':
      return creature.gender
  }
}

