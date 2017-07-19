function maxPossibleScore(obj, arr) {
  return [...Object.keys(obj), ...arr].reduce((sum, key) => (obj[key] || 0) + sum ,0);
}
