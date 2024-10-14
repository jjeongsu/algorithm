function solution(str) {
  let count = 0;
  let zero_count = 0;
  let s = String(str);

  while (s !== '1') {
    let cur_len = s.length;
    s = s.replaceAll('0', '');
    let removed_len = s.length;
    zero_count += cur_len - removed_len;
    s = String(s.length.toString(2));
    count++;
  }

  return [count, zero_count];
}
solution('110010101001');
