String.prototype.camelCase = function(){
  return this.split(' ').map((word) => (word[0] || '').toUpperCase() + word.slice(1)).join('');
}

console.log("hello case".camelCase());
