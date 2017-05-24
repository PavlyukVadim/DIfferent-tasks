'use strict';

function iqTest(numbers) {
  let arrOfEven = [], arrOfOdd = [];
  let i = 0;
  numbers = numbers.split(' ').map((n) => +n);
  while(arrOfEven.length < 2 && arrOfOdd.length < 2) {
  	if (!(numbers[i] % 2)) {
  		arrOfEven.push(numbers[i]);
  	} else {
  		arrOfOdd.push(numbers[i]);
  	}
  	i++;
  }
  let number = numbers.filter((item) => (!(arrOfEven.length === 2 && !(item % 2)) &&
  	                                     !(arrOfOdd.length === 2 && item % 2)))[0];
  return numbers.indexOf(number) + 1;
}

console.log(iqTest('5 6 6 6 8'));
