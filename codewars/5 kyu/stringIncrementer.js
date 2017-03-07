'use strict';

function stringIncrementer(str) {
  let i = str.length - 1;
  let indexFirstDigit = str.length;
  for (; i >= 0; i--) {
    if (str[i].match(/[0-9]/i)) {
  	  indexFirstDigit--;
  	} else break;
  }
  let numberOfDigits = str.length - indexFirstDigit || 1;
  let number = parseInt(str.slice(indexFirstDigit) || 0) + 1;
  return str.slice(0, indexFirstDigit) + '0'.repeat(numberOfDigits - (number + '').length) + number;
}

console.log(stringIncrementer('foobar0099'));
