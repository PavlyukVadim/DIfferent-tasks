function digital_root(n) {
  
  while(n > 10) {  
    n = (n + "").split('').reduce(function(sum, current) {
      current -= '';
      return sum + current;
    }, 0);
  }
  return n;
}
