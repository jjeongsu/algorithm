# 정수 삼각형

피라미드 모양으로 정수가 놓여있다고 할때, 꼭대기 부터 시작하여 대각선아래 왼쪽, 오른쪽방향으로 내려오며 값을 더햇을 때의 최댓값을 구한다.

## 풀이방법

dp 문제로 아래에서 위로 올라오면서
왼쪽 오른쪽중 큰 값은 위에 더해준다.
최종적으로 루트에 위치한 값이 최대값이 된다.
