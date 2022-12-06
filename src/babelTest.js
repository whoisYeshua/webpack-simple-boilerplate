import 'core-js/actual/array/group.js'

async function start() {
  const promise = Promise.resolve('Promise is working')
  return promise
}

// eslint-disable-next-line unicorn/prefer-top-level-await
start().then(console.log)

// eslint-disable-next-line unicorn/no-static-only-class
class Util {
  static id = Date.now()
}

console.log('Static Class field:', Util.id)

const array = [1, 2, 3, 4, 5]

// group groups items by arbitrary key.
// In this case, we're grouping by even/odd keys
const newGroupArray = array.group(element => {
  return element % 2 === 0 ? 'even' : 'odd'
})

console.log('Array group method:', newGroupArray)
