let range = (...arg) => {
  let from = arg.length > 1 ? arg[0] : 1;
  let step = arg.length > 2 ? arg[1] : 1;
  let to = arg[arg.length - 1];
  const result = [];
  let i = from;
  while(i <= to) {
    result.push(i);
    i += step;
  }
  return result;
};
