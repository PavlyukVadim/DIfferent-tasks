'use strict';

function array_diff(a, b) {
  //return a.filter((e) => !~b.indexOf(e));
  return a.filter(e => !b.includes(e));  
}

console.log(array_diff([1, 2, 2, 2, 3], [2]));
