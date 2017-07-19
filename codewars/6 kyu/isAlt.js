function isAlt(word) {
  return (/(^([aeiyou][^aeiyou])+[aeiyou]?$)|(^([^aeiyou][aeiyou])+[^aeiyou]?$)|(^[a-z]$)/i.test(word))
}
