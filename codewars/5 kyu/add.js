"use strict";

const add = (a) => {
	let prevSum = a;
  const innerSum = (a) => {
    prevSum += a;
    return innerSum;
  };
  innerSum.valueOf = () => prevSum;
  innerSum.toString = () => prevSum;
  return innerSum;
}

console.log(add(0)(1)(2)(3)(4)(5));
