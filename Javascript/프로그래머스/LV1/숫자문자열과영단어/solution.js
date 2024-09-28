function solution(s) {
  var answer = 0

  const obj = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  }

  for (let i in obj) {
    const start_idx = s.indexOf(i)
    if (start_idx !== -1) {
      //문자열 내에 현재 글자가 존재한다면
      console.log('찾았다 ', i)
      console.log('이거로 바꾸자', obj[i])
      s = s.replaceAll(i, obj[i]) // 알파벳을 숫자로 변경
    }
  }

  answer = Number(s)

  return answer
}

/**
 * 배운점
 * replace는 발견한 최초의 문자열만 변경한다.
 * replaceAll은 모든 문자열을 변경한다.
 */
