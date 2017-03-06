'use strict';

function reverseLetter(str) {
  return str.split('').filter((l) => l.match(/[a-z]/i)).reverse().join('');
}

console.log(reverseLetter('ultr53o?n'));