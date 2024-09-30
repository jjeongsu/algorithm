function solution(n, arr1, arr2) {
  const map1 = arr1.map(item => item.toString(2).split(''))
  const map2 = arr2.map(item => item.toString(2).split(''))

  //각 맵의 요소를 돌면서 길이가 n보다 작을 경우 '0을 채워넣기'
  map1.forEach(arr => {
    if (arr.length < n) {
      while (arr.length < n) {
        arr.unshift('0')
      }
    }
  })

  map2.forEach(arr => {
    if (arr.length < n) {
      while (arr.length < n) {
        arr.unshift('0')
      }
    }
  })

  let result = Array.from({ length: n }, () => '')
  // n개의 빈 문자열로 된 배열 만들기
  //[ '', '', '','','']

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const item1 = map1[i][j]
      const item2 = map2[i][j]

      if (item1 == '1' || item2 == '1') {
        result[i] = result[i] + '#'
      } else {
        result[i] = result[i] + ' '
      }
    }
  }
  return result
}
