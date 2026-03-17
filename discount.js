// calculate discount

function calculateDiscount(price, discountPercent = 0) {
  let discount = discountPercent / 100;
  let discountedPrice = discount * price;
  let finalPrice = price - discountedPrice;
  return finalPrice;
}
console.log(calculateDiscount(100, 10));
console.log(calculateDiscount(50, 20))
console.log(calculateDiscount(75)); 