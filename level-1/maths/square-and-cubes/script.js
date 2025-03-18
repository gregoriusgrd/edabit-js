function checkSquareAndCube(arr) {
  if (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSquareAndCube([16, 48]));

// minimalist
/*
const checkSquareAndCube = (arr) => Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
*/
