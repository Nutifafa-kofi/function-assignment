// palindrome checker

function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if(str === reversed.toLocaleLowerCase()){
    return true
  }
  return false
//   return reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));