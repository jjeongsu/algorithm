function solution(n) {
  const mod = 1234567;
  const arr = Array.from({ length: n + 1 }, () => 0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % mod;
  }
  return arr[n];
}
