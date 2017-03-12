nNN = a => a.every((element, index) => {
  return (!(index % 2)) ? ('' + element + element == a[index + 1]) ? 1 : 0 : 1;
});

console.log(nNN([1,11,2,22,4,44]));
