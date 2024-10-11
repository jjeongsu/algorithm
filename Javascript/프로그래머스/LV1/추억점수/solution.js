function solution(name, yearning, photo) {
  const score = new Map() // {name: yearning} 형태를 맵에 저장
  for (let i = 0; i < name.length; i++) {
    score.set(name[i], Number(yearning[i]))
  }

  // photo의 각 요소별로 점수를 계산하기
  const result = photo.map(pic => {
    let count = 0 // 추억 점수 계산
    pic.forEach(name => {
      // 사진 하나를 가져와서
      // 사진 속 인물의 점수가 계산 할 수 있다면
      if (score.has(name)) {
        count += score.get(name) // 추억점수에 추가
      }
    })
    return count
  })

  console.log(result)
}
