"use strict";

function findAB(numbers,c){
  let result = null;
  let i = 0;

  if (!c) return [numbers[0], 0];
  for (; i < numbers.length; i++) {
  	let target = c / numbers[i];
  	if (target != target | 0) continue;
  	if (~numbers.indexOf(target, i + 1)) return [numbers[i], target];
  }
  return null;
}

console.log(findAB([-3,-2,-1,0,1,2,3,4],4));