function solution(numbers) {
  const stack = [];
  const result = Array.from({ length: numbers.length }, () => -1);
  stack.push([numbers[0], 0]);

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    while (true) {
      if (stack.length > 0 && stack[stack.length - 1][0] < number) {
        const [stackNumber, stackIndex] = stack.pop();
        result[stackIndex] = number;
      } else {
        break;
      }
    }

    // 뺄만큼 뺏으면 자기 자신 넣기
    stack.push([number, i]);
  }
  return result;
}

// 전형적인 stack을 활용하여 푸는 문제로
// stack안에서 자기보다 작은 수를 전부 pop해준다.
// 그리고 자신은 index를 가진채 stack으로 push한다.
// 한번 돌았을 때 stack에 남은 요소는 전부 -1 처리해준다.

const result = solution([9, 1, 5, 3, 6, 2]); //[-1, 5, 6, 6, -1, -1]
console.log(result);
