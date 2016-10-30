function VigenèreCipher(key, abc) {
  console.log(key);
  this.encode = function (str) {
  var result = []; 
    let index = 0;
    
    str.split("").forEach( (letter) => {
      if (abc.indexOf( letter ) === -1) {
        result.push(letter);
        index++;
      }
      else {
        var shift = index < key.length ? key[index] : key [index % key.length];
        result.push(abc[(abc.indexOf(letter) + abc.indexOf(shift)) % abc.length]);
        index++;
      }
    });
    
    return result.join('');
  };
  this.decode = function (str) {
    var result = []; 
    let index = 0;
    
    str.split("").forEach( (letter) => {
      
      if (abc.indexOf( letter ) === -1) {
        result.push(letter);
        index++;
      }
      else {
        var shift = index < key.length ? key[index] : key[index % key.length];
  
        result.push(abc[(abc.indexOf(letter) + abc.length - abc.indexOf(shift)) % abc.length]);
        index++;
      }
    });
    
    return result.join('');

  };
}
