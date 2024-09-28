function solution(ingredient) {
  var answer = 0

  const stack = []
  for (let i of ingredient) {
    stack.push(i)
    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4)
      answer++
    }
  }

  return answer
}

/**
 * stack 자료구조를 사용하여 구현
 * stack에 햄버거만들 수 있는 순서대로 쌓이면 pop
 *
 */

/**
 * 배운점 👍
 * slice는 배열을 일부 추출하여 반환한다. 원본은 변경되지 않는다.
 * splice는 배열을 바꾸는 작업을 수행한다.
 */
