'use strict';

function validBraces(braces){
  braces = braces.split('');
  let stack = [];
  let map = new Map();
  map
    .set('}', '{')
    .set(')', '(')
    .set(']', '[');

  braces.forEach((bracket) => {
    if (map.get(bracket)) {
      if (stack[stack.length - 1] === map.get(bracket)) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else {
      stack.push(bracket); 
    }    
  });
  return !stack.length;
}

console.log(validBraces('()'));
console.log(validBraces('[(])'));
