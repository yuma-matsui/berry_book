class User {
  readonly #name: string
  readonly #age: number
  constructor (name: string, age: number) {
    this.#name = name
    this.#age = age
  }

  getMessage (message: string): string {
    return `${this.#name}(${this.#age}) 「${message}」`
  }
}

const uhyo: User = new User('uhyo', 26)
console.log(uhyo.getMessage('こんにちは'))
