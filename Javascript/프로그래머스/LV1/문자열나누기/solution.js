function solution(s) {
  const string = s.split('')
  let result = 0
  let count_i = 0
  let count_not_i = 0
  let temp = ''
  for (let i = 0; i < string.length; i++) {
    // 두횟수가 같아지면
    if (count_i === count_not_i && count_i !== 0) {
      result += 1
      count_i = 0
      count_not_i = 0
    }
    //다시 카운팅 시작하면 temp에 현재문자 저장
    if (count_i == 0) {
      temp = string[i]
      count_i++
    } else {
      //발견한 문자가 temp이면
      if (string[i] === temp) {
        count_i++
      } else {
        //발견한 문자가 Temp가 아니면
        count_not_i++
      }
    }
  }
  return result + 1
}
