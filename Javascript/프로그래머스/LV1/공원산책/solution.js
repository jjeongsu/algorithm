function solution(park, routes) {
  const map = park.map(e => e.split(''));
  let position = [0, 0];
  const len_x = map.length;
  const len_y = map[0].length;

  // map에서 시작위치를 찾아 position을 초기화 한다.
  let s_flag = false; // s를 찾았는지 여부 확인
  for (let i = 0; i < len_x; i++) {
    for (let j = 0; j < len_y; j++) {
      if (map[i][j] === 'S') {
        position = [i, j];
        s_flag = true;
        break;
      }
    }
    if (s_flag) {
      break;
    }
  }

  function getNextPosition(direction, cur_x, cur_y) {
    switch (direction) {
      case 'E':
        return [cur_x, cur_y + 1];
      case 'W':
        return [cur_x, cur_y - 1];
      case 'N':
        return [cur_x - 1, cur_y];
      case 'S':
        return [cur_x + 1, cur_y];
    }
  }

  for (let command of routes) {
    const [방향, 이동거리] = command.split(' ');
    let flag = true; // 현재 명령이 유효한지 여부
    let [temp_x, temp_y] = [position[0], position[1]];
    // 이동거리 만큼 움직이며 유효성 검증
    for (let i = 0; i < 이동거리; i++) {
      let [next_x, next_y] = getNextPosition(방향, temp_x, temp_y);
      //1. 지도 범위 내부 인지 먼저 확인 -> 이것을 확인하지 않고 map에 접근하면 런타임 에러 발생
      if (next_x >= 0 && next_x < len_x && next_y >= 0 && next_y < len_y) {
        if (map[next_x][next_y] !== 'X') {
          //2. 장애물인지 확인
          // 한칸 이동시 유효한 칸 이라면 Temp 업데이트
          temp_x = next_x;
          temp_y = next_y;
        } else {
          flag = false; // 장애물이라면 해당 명령은 유효 하지 않음
          break;
        }
      } else {
        // 지도범위 바깥이라면
        flag = false; // 해당 명령은 유효 하지 않음
        break;
      }
    }
    if (!flag) {
      continue;
    } else {
      position = [temp_x, temp_y];
    }
  }
  return position;
}

const result1 = solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
console.log('기댓값', [2, 1], '실행결과', result1);

const result2 = solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);
console.log('기댓값', [0, 0], '실행결과', result2);
