function solution(s) {
  const stack = [];

  for (let char of s) {
    stack.length > 0 && char === stack[stack.length - 1]
      ? stack.pop()
      : stack.push(char);
  }
  return stack[0] ? 0 : 1; // stack[length] === 0 이면 효율성테케 통과x, 이 방식이 더 효율적?
}

solution('baabaa');
solution('cdcdcd');

/**
 * 1. stack[length] === 0 👉 stack[0] 으로 바꿨을 때 모든 태케 통과
 * 2. if/else 문 대신 삼항연산자로 push/pop했을 때, 훨씬 빠른 통과
 */
