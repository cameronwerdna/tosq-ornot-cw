//function takes an array of ints. if int has sq rt, that is its new value. otherwise, int*int is returned.
function squareOrSquareRoot(array) {
    return array.map(x => {
      return Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x*x
    })
  }


console.log(squareOrSquareRoot([9,3,49,81])) // => [3, 9, 7, 9]
console.log(squareOrSquareRoot([100,19,77,3,144])) // => [10, 361, 5929, 9, 12]
console.log(squareOrSquareRoot([121,9,81,5,64])) // => [ 11, 3, 9, 25, 8 ]
