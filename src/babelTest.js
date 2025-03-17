async function start() {
  const promise = Promise.resolve('Promise is working')
  return promise
}

// eslint-disable-next-line unicorn/prefer-top-level-await
start().then(console.log)

// eslint-disable-next-line unicorn/no-static-only-class
class Utilities {
  static id = Date.now()
}

console.log('Static Class field:', Utilities.id)

const array = [1, 2, 3, 4, 5]

// group items by arbitrary key
// In this case, we're grouping by even/odd keys
const newGroupArray = Object.groupBy(array, element => {
  return element % 2 === 0 ? 'even' : 'odd'
})

console.log('Array group method:', newGroupArray)

const arrayIterator = array.values()

arrayIterator
  .map(v => v * 2)
  .map(v => v + 1)
  .take(2)
  // eslint-disable-next-line unicorn/no-array-for-each
  .forEach((v, index) => console.log(`Iterator helper for index [${index}] - value: ${v}`))
