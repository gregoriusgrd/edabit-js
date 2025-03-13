/*
The Rubik's cube of side length 1 has 6 stickers.
The Rubik's cube of side length 2 has 24 stickers.
*/

function howManyStickers(n) {
  return 6 * n ** 2;
}

howManyStickers(1); // ➞ 6
howManyStickers(2); // ➞ 24
