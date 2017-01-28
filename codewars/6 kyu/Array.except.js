Array.prototype.except = function(keys)
{
  let arr = this.map((i) => i);
  if(keys.length) {
    keys.sort((a,b) => a - b);
    keys.forEach((k, i) => { arr.splice(k - i, 1);});
  } else {
    arr.splice(keys, 1);
  } 
  return arr;
}