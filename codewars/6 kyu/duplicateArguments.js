'use strict';

function solution(...args){
  return args.length !== new Set(args).size;
}

console.log(solution('a', 'b', 'c', 'a'));
