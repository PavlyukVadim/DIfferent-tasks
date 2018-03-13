"use strict"

const factorial = (n) => {
  const res = []
  let res_size = 1
  res[0] = 1

  for (let x = 2; x <= n; x++) {
    res_size = multiply(x, res, res_size)
  }

  return res.reverse().join('')
}
 
const multiply = (x, res, res_size) => {
  let carry = 0

  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry
    res[i] = prod % 10  // Store last digit of 'prod' in res[]
    carry = Math.floor(prod / 10) // Put rest in carry
  }

  while (carry) {
    res[res_size] = carry % 10
    carry = Math.floor(carry / 10)
    res_size++
  }
  return res_size
}

const f = factorial(10000)
console.log(`Factorial of given number is: ${f}`)
