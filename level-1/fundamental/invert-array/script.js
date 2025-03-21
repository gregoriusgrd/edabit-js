// classic for
function negative(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * -1);
  }
  return result;
}

console.log(negative([-1, -2])); // [1, 2]
console.log(negative([3, -5, 7])); // [-3, 5, -7]

// using arr.map()
/*
function negative(arr) {
    return arr.map(num => -Math.abs(num));
}
*/

// for...of loop
/*
function negative(arr) {
    let result = [];

    for (let num of arr) {
        result.push(num * -1);
    }

    return result;
}

console.log(negative([-1, -2])); // [1, 2]
console.log(negative([3, -5, 7])); // [-3, 5, -7]
*/
