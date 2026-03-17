// function to count vowels in a string

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("xyz"));
