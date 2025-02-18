function solution(order) {
  //[ 3, 2, 1, 4, 5 ]

  // BoxNum 초기화 : order = [4,3,1,2,5] -> BoxNum = [3,4,2,1,5]
  const BoxNum = Array.from({ length: order.length }, () => 0);
  order.forEach((v, i) => {
    BoxNum[order[i] - 1] = i + 1;
  });
  console.log(BoxNum);
  const stack = [];
  let result = 0;
  let curr = 1; // 1,2,3,4,...순서대로 이번에 싣어야 하는 번호
  let i = 0; // boxnum 순회용
  while (true) {
    if (
      curr > BoxNum.length ||
      (i === BoxNum.length - 1) &
        (BoxNum[i] > curr) &
        (stack[stack.length - 1] > curr)
    )
      break;
    //console.log(stack, curr, result)
    if (BoxNum[i] === curr) {
      result++;
      i++;
      curr++;
      continue;
    } else if (stack[stack.length - 1] === curr) {
      stack.pop();
      result++;
      curr++;
      continue;
    }

    // 둘다에서 찾지 못한경우
    stack.push(BoxNum[i]);
    i++;
  }

  return result;
}
