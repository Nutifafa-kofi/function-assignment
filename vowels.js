// function to count vowels in a string

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0; // set counter variable
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++; // add the number of vowels 
    }
  }
  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("xyz"));
