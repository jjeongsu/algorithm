function solution(prices) {
  let result = Array.from({ length: prices.length }, () => 0);
  let lastIndex = prices.length - 1;
  let stack = [];
  // stack에 첫번째 요소 채워넣기
  stack.push([prices[0], 0]);
  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];

    while (stack.length > 0 && stack[stack.length - 1][0] > currentPrice) {
      let [price, index] = stack.pop(); // pop해주고
      result[index] = i - index; // 결과에 기록
    }

    stack.push([currentPrice, i]); // 현재값을 스택에 넣기
  }

  if (stack.length > 0) {
    while (stack.length > 0) {
      let [price, index] = stack.pop();
      result[index] = lastIndex - index;
    }
  }
  return result;
}
