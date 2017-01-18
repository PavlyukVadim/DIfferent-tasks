function findDiscounted(prices){
  prices = prices.split(' ');
  prices = prices.filter( function(item){
    var ipos = prices.indexOf( (item / 3) * 4 + '' );
    if( ipos != -1 ) {
      prices.splice(ipos, 1);
      return item;
    } 
  });
  return prices.join(' ');
}
