function hurdleJump(hurdles, jumpHeight) {
  let maxHurdle = Math.max(...hurdles);
  if (jumpHeight >= maxHurdle) {
    return true;
  } else {
    return false;
  }
}

hurdleJump([1, 2, 3, 4, 5], 5); // ➞ true

hurdleJump([5, 5, 3, 4, 5], 3); // ➞ false

// minimalist
/*
function hurdleJump(hurdles, jumpHeight) {
	return Math.max(...hurdles) <= jumpHeight;
}
*/
