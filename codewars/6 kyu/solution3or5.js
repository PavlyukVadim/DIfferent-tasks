'use strict';

function solution(number) {
  let i, arr = [0];
  for (i = 0; i < number; i++) {
  	arr.push(i);
  }
  let result = arr.filter((number) => !(number % 3) || !(number % 5))
                  .reduce((sum, number) => sum + number);
  return result;
}

console.log(solution(0));
