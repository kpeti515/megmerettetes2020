
// képlet: (a*X+c) MOD 1048576

let placeInArray = 1000

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}

let X = (placeInArray, a, c, modDivider) => {
  if (placeInArray === 0) {
    return 11
  }
  return (a * X(placeInArray - 1, a, c, modDivider) + c) % modDivider
}

X = memoize(X)


const arraySolution = (placeInArray) => {
  let array = []
  for (let index = 0; index < placeInArray; index++) {
    let element = X(index)
    array.push(element)
  }
  let sum = (total, actual) => {
    return total + actual
  }
  return array.reduce(sum, 0)
}
console.log(X(2, 97, 11, 1048576))
console.log(arraySolution(3))
export {X, arraySolution}
