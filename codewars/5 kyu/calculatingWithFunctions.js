"use strict";

const zero = (...arg) => arg[0] ? arg[0](zero): zero; 
zero.valueOf = () => 0; 
const one = (...arg) => arg[0] ? arg[0](one): one; 
one.valueOf = () => 1; 
const two = (...arg) => arg[0] ? arg[0](two): two; 
two.valueOf = () => 2; 
const three = (...arg) => arg[0] ? arg[0](three): three; 
three.valueOf = () => 3; 
const four = (...arg) => arg[0] ? arg[0](four): four; 
four.valueOf = () => 4; 
const five = (...arg) => arg[0] ? arg[0](five): five; 
five.valueOf = () => 5; 
const six = (...arg) => arg[0] ? arg[0](six): six; 
six.valueOf = () => 6; 
const seven = (...arg) => arg[0] ? arg[0](seven): seven; 
seven.valueOf = () => 7; 
const eight = (...arg) => arg[0] ? arg[0](eight): eight; 
eight.valueOf = () => 8;
const nine = (...arg) => arg[0] ? arg[0](nine): nine; 
nine.valueOf = () => 9;

const plus = (...arg) => (a) => a + arg[0];
const minus = (...arg) => (a) => a - arg[0];
const times = (...arg) => (a) => a * arg[0];
const dividedBy = (...arg) => (a) => a / arg[0];

console.log(seven(times(five()))); // must return 35)
