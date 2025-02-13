function solution(board) {
  const map = board.map((line) => line.split(''));
  const [countO, countX, countDot] = countMap(map);

  // early return
  if (countO === 0 && countX === 0 && countDot === 9) {
    // 전부 .
    return 1;
  } else if (countO < countX) {
    // X > O
    return 0;
  }
}

console.log(solution(['O.X', '.O.', '..X']));
console.log(solution(['OOO', '...', 'XXX']));
console.log(solution(['...', '.X.', '...']));
console.log(solution(['...', '...', '...']));

function countMap(map) {
  let countO = 0;
  let countX = 0;
  let countDot = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (map[i][j] === 'O') {
        countO += 1;
      } else if (map[i][j] === 'X') {
        countX += 1;
      } else {
        countDot += 1;
      }
    }
  }
  return [countO, countX, countDot];
}
