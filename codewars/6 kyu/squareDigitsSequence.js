"use strict";

function squareDigitsSequence(number, arr) {
  arr =  arr || [number];	
  let depth = 0;
  let digits = String(number).split('').map((digit) => Number(digit));
  let value = digits.reduce((sum, digit) => {
  	return sum + Math.pow( digit, 2);
  }, 0);

  if ( arr.some((number) => number === value ) ) {
  	return 2;
  }

  arr.push(value);
  return 1 + squareDigitsSequence(value, arr);
  
}

console.log( squareDigitsSequence(103) );
