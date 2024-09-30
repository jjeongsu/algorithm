function solution(s) {
  //문자열의 길이
  const length = s.length
  console.log(length)
  if (length !== 4 && length !== 6) {
    return false
  }

  for (i of s) {
    if (isNaN(i)) {
      return false
    }
  }
  return true
}
