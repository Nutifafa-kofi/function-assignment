// Even number checker

function isEven(n) {
  // check if number is divisible by two
  if (n % 2 === 0) {
    return true;
  } else {
    return false; // return false if not divisible by two
  }
}

console.log(isEven(4));   
console.log(isEven(7));  
console.log(isEven(0));   
console.log(isEven(-2));  
