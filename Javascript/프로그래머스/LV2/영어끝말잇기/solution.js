function solution(n, words) {
  let prev_char = words[0].slice(-1); // 단어의 가장 마지막 글자

  let round = 1;
  for (let i = 1; i < words.length; i++) {
    let cur_word = words[i];
    if (i % n === 0) {
      // 새로운 라운드 시작
      round++;
    }

    // <현재 단어의 첫글자 !== 마지막 글자> 이거나 <현재단어가 이전에 등장했었음> 이면 패배
    if (cur_word[0][0] !== prev_char || words.indexOf(cur_word) !== i) {
      return [(i % n) + 1, round];
    }

    prev_char = cur_word.slice(-1);
  }
  return [0, 0];
}
