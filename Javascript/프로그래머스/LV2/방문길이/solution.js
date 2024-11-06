function solution(dirs) {
  const directions = dirs.split('');
  const passed = new Set();
  let length = 0;
  const dxdy = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  let cur_x = 0,
    cur_y = 0;
  for (let direction of directions) {
    let [dx, dy] = dxdy[direction];
    let next_x = cur_x + dx;
    let next_y = cur_y + dy;
    // 다음 위치가 맵 바깥 쪽이라면 무시
    if (next_x > 5 || next_x < -5 || next_y > 5 || next_y < -5) {
      continue;
    }
    // 지나온 길이 아니라면
    if (
      !passed.has([cur_x, cur_y, next_x, next_y].toString()) &&
      !passed.has([next_x, next_y, cur_x, cur_y].toString())
    ) {
      length += 1; // 지나온 길이에 추가
      passed.add([cur_x, cur_y, next_x, next_y].toString()); // 지나온길 표시
    }
    cur_x = next_x; // 이동
    cur_y = next_y;
  }
  return length;
}
const result = solution('RRRRRDLDRDLDRDLURULURULUR');
console.log('result', result);
