const array = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, third, ...other] = array;

console.log(first); // ➞ outputs 1
console.log(second); // ➞ outputs 2
console.log(third); // ➞ outputs 3
console.log(other); // ➞ outputs [4, 5, 6, 7, 8]
