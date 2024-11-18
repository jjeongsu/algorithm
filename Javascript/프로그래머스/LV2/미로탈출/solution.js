function solution(maps) {
  const map = maps.map((line) => line.split(''));
  const rows = map.length;
  const cols = map[0].length;

  const labberLength = getLength('L');
  if (!labberLength) {
    return -1;
  }
  const endLength = getLength('E');
  if (!endLength) {
    return -1;
  }

  return labberLength + endLength;

  function getLength(goal) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (goal === 'L' && map[i][j] === 'S') {
          return bfs([i, j], goal); // 시작 지점부터 레버까지 길이를 반환
        }
        if (goal === 'E' && map[i][j] === 'L') {
          return bfs([i, j], goal); // 레버부터 목표까지 길이를 반환
        }
      }
    }
  }

  function bfs(start, goal) {
    const visited = Array.from({ length: rows }, () =>
      new Array(cols).fill(false),
    );
    const d = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];
    const q = [];
    q.push([...start, 0]);

    while (q.length > 0) {
      const [curX, curY, curL] = q.shift();
      // goal인지 확인
      if (map[curX][curY] === goal) {
        return curL;
      }
      // 다음 노드
      for ([dx, dy] of d) {
        let nextX = curX + dx;
        let nextY = curY + dy;
        if (nextX >= 0 && nextX < rows && nextY >= 0 && nextY < cols) {
          if (!visited[nextX][nextY] && map[nextX][nextY] !== 'X') {
            visited[nextX][nextY] = true;
            q.push([nextX, nextY, curL + 1]);
          }
        }
      }
    }
    // while문을 다 돌았는데, goal을 찾지 못했다면
    return false;
  }
}

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));
