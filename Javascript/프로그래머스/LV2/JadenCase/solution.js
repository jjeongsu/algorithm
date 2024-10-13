function solution(s) {
  const jadenWord = s
    .split(' ')
    .map(word => {
      if (word.length > 1) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toUpperCase();
      }
    })
    .join(' ');
  return jadenWord;
}
