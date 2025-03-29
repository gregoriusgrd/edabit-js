function sortWord(word) {
  return word.split("").sort().join("");
}

sortWord("dcba"); // ➞ "abcd"
sortWord("Unpredictable"); // ➞ "Uabcdeeilnprt"
sortWord("pneumonoultramicroscopicsilicovolcanoconiosis"); // ➞ "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"
