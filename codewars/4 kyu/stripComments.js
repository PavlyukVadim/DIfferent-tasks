'use strict';

function solution(input, markers) {
  return input.split('\n').map((str) => {
  	let regexp = new RegExp(`[${markers.join('')}]`, 'i');
  	let index = str.search(regexp);
  	if (~index) {
  	  return str.slice(0, index);	
  	}
  	return str;
  }).join('\n');
}

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
