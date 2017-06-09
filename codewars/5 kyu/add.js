"use strict";

const add = (n) => {
  const f = x => add(n + x)
  f.valueOf = () => n
  return f;
}

console.log(add(0)(1)(2)(3)(4)(5));
