type HasName = {
  name: string;
}


class UseR implements HasName {
  name: string
  age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  isAdult(): boolean {
    return this.age >= 20
  }
}

