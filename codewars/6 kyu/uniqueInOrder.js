const uniqueInOrder = (iterable) => {
  iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
  return iterable.filter((item, i, arr) => item !== arr[i + 1]);
}
