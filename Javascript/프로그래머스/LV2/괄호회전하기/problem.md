# 문제 요구사항 정리

소괄호, 중괄호, 대괄호로 이루어진 문자열 s를 회전시킨다.
ex) s = "[](){}" 라면 1번 회전시켰을 때의 모습은 "](){}["

s를 N번 회전시켰을 때, 올바른 괄호 문자열의 모습이 되는 횟수를 리턴한다.

s의 길이는 0이상 1000이하이다.

## 기능 요구사항 정리

- n번째 회전시켰을 때의 문자열 s가 올바른 괄호 문자열인지 판단하는 함수 -> stack을 써서 구현한다.
- 문자열 s가 주어질때 1번 회전시킨 후의 모습을 리턴하는 함수
  - 문자열splice(0,1)후 뒤에 붙이는 방법
- 메인 Function에서 N번 반복하면서 올바른 경우만 count
