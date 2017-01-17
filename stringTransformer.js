function stringTransformer(str) {
  return str.split(' ').reverse().join(' ').split('').map(function(letter){
    if (letter == ' ') return ' ';
    return letter.charCodeAt(0) <= 90 ? String.fromCharCode(letter.charCodeAt(0) + 32) : String.fromCharCode(letter.charCodeAt(0) - 32) + ''
  }).join('');
}