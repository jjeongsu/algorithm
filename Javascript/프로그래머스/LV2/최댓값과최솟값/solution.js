function solution(s) {
  const number = s.split(' ').map(e => parseInt(e))
  return Math.min(...number) + ' ' + Math.max(...number)
}
