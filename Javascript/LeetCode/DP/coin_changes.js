/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [0, ...new Array(amount).fill(amount + 1)]; // +1 : 최초값이 기본값보다 무조건 작게
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }

  return dp[amount] < amount + 1 ? dp[amount] : -1;
};

// amount보다 작은 수의 돈을 만드는데 필요한 최소한의 동전의 갯수를 알면된다.
// dp[i] = i만큼의 금액을 만드는데 필요한 동전의 갯수, 최대 i (1원으로 전부 계산시)
/**
coins=[2,3,5] amount=7
        ^
돈 - 필요한 동전갯수 최소
0원 : 0
1원 : 8 
2원 : 1 
3원 : 1      8 vs dp[3-3] + 1 = 1
4원 : 2      8 Vs dp[4-2] + 1 = 2 2 vs dp[4-3] + 1
5원 : 2      dp[2] + 1(3) = 2
6원 : 2      8 vs dp[6-2] + 1 = 3    dp[3]+1(3) = 2
7원 : 3      dp[4] +1 = 3 
*/
