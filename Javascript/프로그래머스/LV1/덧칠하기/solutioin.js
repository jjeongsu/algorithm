function solution(n, m, section) {
  // n 길이의 배열 정하기
  const arr = Array.from({ length: n }, () => true)
  //false 인 부분을 색칠하면 됨
  // section을 돌면서 비어있는 부분 확인하기
  section.forEach((v, i) => (arr[v - 1] = false))

  let count = 0
  for (let i = 0; i < n; i++) {
    if (!arr[i]) {
      //현재 칸이 색칠해야 하는 칸이라면
      for (let j = 0; j < m; j++) {
        //m번 반복하면서 색 칠하기
        arr[i + j] = true
      }
      count += 1
    }
  }
  return count
}
//단순 구현 문제
