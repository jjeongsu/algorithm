function solution(n) {
  function usage(n) {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 1;
    }
    if (n === 3) {
      return 2;
    }

    if (n % 2 === 0) {
      return usage(n / 2);
    } else if (n % 2 === 1) {
      return usage((n - 1) / 2) + 1;
    }
  }
  return usage(n);
}
