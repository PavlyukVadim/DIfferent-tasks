function isAlt(word) {
  return (/(^([aeiyou][^aeiyou])+[aeiyou]?$)|(^([^aeiyou][aeiyou])+[^aeiyou]?$)|(^[a-z]$)/i.test(word))
}

/*
function isAlt(word) {
  return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}
*/
