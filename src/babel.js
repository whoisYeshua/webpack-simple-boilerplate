async function start() {
  const promise = Promise.resolve('async is working')
  return promise
}

start().then(console.log)

// eslint-disable-next-line unicorn/no-static-only-class
class Util {
  static id = Date.now()
}

console.log('Util Id:', Util.id)

const unused = 42
console.log(unused)
