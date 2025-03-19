// Vowel Count

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

// Consonant Count
function getConsonantCount(sentence) {
  let count = 0;
  const vowels = "aeiou";

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
