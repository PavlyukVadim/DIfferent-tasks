'use strict';

function sumStrings(a,b) { 
  let diff = a.length - b.length;
  if (diff > 0) {
  	b = '0'.repeat(diff) + b;
  } else {
  	a = '0'.repeat(-diff) + a;
  }
  b = b.split('').map((digit) => digit - '');
  a = a.split('').map((digit) => digit - '');

  let i = a.length - 1;
  let result = [];
  for (; i >= 0; i--) {
  	let sum = a[i] + b[i];
  	if(sum > 9) a[i - 1] = a[i - 1] + 1 || 1;
    result[i] = sum % 10;
  }
  result = a[-1] ? [1, ...result] : result; 
  return result.join('');
}

console.log(sumStrings('1930', '9400'));
