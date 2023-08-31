let numbers = [1, 2, 3, 4, 5];
function sumUntil(maxValue) {
  let total = 0;
  for (let i = 0; i < maxValue.length; i++) {
    total += maxValue[i];
  }
  return total;
}

console.log("OUTPUT:", sumUntil(numbers));
