function solution(n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    const sum = dp[i - 1] + dp[i - 2];
    dp[i] = sum > 1000000007 ? sum % 1000000007 : sum;
  }
  return dp[n];
}
