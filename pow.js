// function  to calculate a number raised to the power of another number

function pow(x, n) {
  let result = 1;
  if (n < 1 || x < 1) {
    return `Enter positive integer`;
  }
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
console.log(pow(2, 5));
