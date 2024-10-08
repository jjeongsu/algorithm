function solution(s, skip, index) {
  const 알파벳 = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter(e => !skip.includes(e))
  const l = 알파벳.length
  const result = [...s]
    .map(글자 => {
      let 글자인덱스 = 알파벳.indexOf(글자)
      let 새로운인덱스 = 글자인덱스 + index
      return 알파벳[새로운인덱스 % l]
    })
    .join('')
  return result
}
/**
 * 처음에는 전체알파벳 배열을 확인하면서 skip에 해당하는 글자인지 아닌지 조건문으로 구현하였는데
 * 아예 알파벳에서 skip에 해당하는 문자들은 빼버리고 Index만큼 뒤에있는 문자를 반환하면 되는 거였다.
 * 쉬운 접근방법으로 풀면 금방 풀리는 문제였음
 */
