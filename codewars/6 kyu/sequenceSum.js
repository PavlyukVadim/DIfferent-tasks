function sequenceSum(begin, end, step){
  if(begin > end && step > 0 || begin < end && step < 0) return 0;
  if(step == 1) {
    return (begin + end) * ((end - begin + 1) / 2);
  }
  var last = end - ( (end - begin) % step);
  var n = (last - begin) / step + 1;
  return (begin + last) * (n / 2);
}
