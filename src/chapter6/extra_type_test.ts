type Option<Type> = {
  type: 'some'
  value: Type
} | {
  type: 'none'
}

function printObjectValue(obj: Option<number>): void {
  if (isTypeSome(obj)) console.log(obj.value)
}

const hasValueObject: Option<number> = {
  type: 'some',
  value: 1000
}

const nothing: Option<number> = {
  type: 'none'
}


printObjectValue(hasValueObject)

function isTypeSome<Type> (obj: Option<Type>): obj is { type: 'some', value: Type } {
  return obj.type === 'some'
}

function mapOption<T, U> (obj: Option<T>, callback: (objValue: T) => U): Option<U> {
  switch (obj.type) {
    case 'some':
      return {
        type: 'some',
        value: callback(obj.value)
      }
    case 'none':
      return obj
  }
}

function doubleOption (obj: Option<number>) {
  return mapOption(obj, x => x * 2)
}

console.log(doubleOption(hasValueObject))
console.log(doubleOption(nothing))
