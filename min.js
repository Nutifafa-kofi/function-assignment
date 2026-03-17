// check and return the smaller number
function min(a, b) {
  let min; // variable to store the smaller number
  if (a === b) {
    return a || b; // return a or b if a is equal to b
  } else if (a < b) {
    min = a; // smaller number is a if a is less than b
  } else {
    min = b; // smaller number is b
  }
  return min;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
console.log(min(100, 99));
