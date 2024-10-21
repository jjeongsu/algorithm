function solution(n, a, b) {
  let A = Math.min(a, b);
  let B = Math.max(a, b);
  let round = 1;
  while (true) {
    if (A % 2 === 1 && A + 1 === B) {
      break;
    } else {
      A = getNext(A);
      B = getNext(B);
      round++;
    }
  }
  return round;
}
function getNext(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n + 1) / 2;
  }
}
