function sortArray(array) {
  let arrayOfOddNumbers = [];
  array = array.map((n) => (n % 2) ? Infinity * arrayOfOddNumbers.push(n) : n);
  arrayOfOddNumbers.sort((a, b) => a - b);
  return array.map((n) => (n == Infinity) ? arrayOfOddNumbers.shift() : n);
}
