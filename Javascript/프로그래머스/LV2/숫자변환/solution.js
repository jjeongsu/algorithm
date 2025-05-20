function solution(x, y, n) {
  if (x === y) return 0;
  const q = [[y, 0]];

  while (q.length > 0) {
    const [currNum, currStep] = q.shift();

    if (currNum === x) return currStep;

    if (Number.isInteger(currNum / 2)) q.push([currNum / 2, currStep + 1]);
    if (Number.isInteger(currNum / 3)) q.push([currNum / 3, currStep + 1]);
    if (currNum - n >= x) q.push([currNum - n, currStep + 1]);
  }

  return -1;
}
