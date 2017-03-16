'use strict';

function likes(names) {
  if (!names.length) return 'no one likes this';
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} likes this`;
  else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
  else return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
