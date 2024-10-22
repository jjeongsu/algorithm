function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (isValidParentheses(s)) {
      count++;
    }
    s = rotate(s);
  }
  return count;
}

//s를 1번 회전시킨 후 문자열 리턴
function rotate(s) {
  let new_s = [...s];
  const firstChar = new_s.splice(0, 1);
  new_s.push(firstChar);
  return new_s.join('');
}

// s가 올바른 괄호의 문자열인지 판단
function isValidParentheses(s) {
  let stack = [];
  for (let item of s) {
    if (item === '(' || item === '{' || item === '[') {
      switch (item) {
        case '(':
          stack.push(')');
          break;
        case '{':
          stack.push('}');
          break;
        case '[':
          stack.push(']');
          break;
      }
    } else {
      // 닫는 괄호 일때
      if (stack.length !== 0 && stack[stack.length - 1] === item) {
        stack.pop();
      } else if (stack.length === 0) {
        // 스택이 비어있는데 닫는 괄호가 들어오면
        // 빼낼 수 없으므로 false
        return false;
      }
    }
  }
  return stack.length === 0;
}
