const comparePowers = (n1, n2) => {
  if (n1[0] === n2[1] && n1[1] === n2[0] || n1[0] === n2[0] && n1[0] === 1) {
    return 0;
  } else if(n1[1] === n2[1]) {
    return ((n2[0] > n1[0]) ? 1 : ((n2[0] < n1[0]) ? -1 : 0));
  } else if(n1[0] === n2[0]) {
    return ((n2[1] > n1[1]) ? 1 : ((n2[1] < n1[1]) ? -1 : 0));
  } else {
    const p1 = Math.log(n1[0]) * n1[1];
    const p2 = Math.log(n2[0]) * n2[1];
    return ((p2 > p1) ? 1 : (( p2 < p1 ) ? -1 : 0));
  }
}

/*
const comparePowers = ([b1, e1], [b2, e2]) => {
  const d = Math.log(b2) * e2 - Math.log(b1) * e1;
  return (d > 0) - (d < 0);
}
*/
