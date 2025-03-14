function difference(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return max - min;
}

difference([10, 15, 20, 2, 10, 6]); // ➞ 18
// 20 - 2 = 18

difference([-3, 4, -9, -1, -2, 15]); // ➞ 24
// 15 - (-9) = 24
