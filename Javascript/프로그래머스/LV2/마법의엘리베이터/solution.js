function solution(storey) {
  let stone = 0;
  while (storey) {
    const digit = storey % 10;

    if (digit < 5) {
      // 내림
      stone += digit;
    } else if (digit > 5) {
      // 올림
      stone += 10 - digit;
      storey += 10;
    } else {
      // 현재 자릿수가 5이고, 다음 자릿수가 5보다 작으면 -> 내림
      if ((digit === 5) & ((storey % 100) / 10 < 5)) {
        stone += digit;
      } else {
        // 현재 자릿수가 5이고, 다음 자릿수가 5보다 크거나 같으면 -> 올림
        stone += 10 - digit;
        storey += 10;
      }
    }
    storey = ~~(storey / 10);
  }

  return stone;
}
