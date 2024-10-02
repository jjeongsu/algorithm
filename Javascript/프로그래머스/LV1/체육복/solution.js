function solution(n, lost, reserve) {
  const student = Array(n + 1).fill(1)
  student[0] = 0
  for (let i of lost) {
    student[i]--
  }
  for (let i of reserve) {
    student[i]++
  }
  // console.log(student)

  for (let i = 1; i < student.length; i++) {
    //체육복 나눔하기
    let cloth = student[i]

    if (cloth === 0) {
      // 체육복이 없는 학생 발견
      let prev = student[i - 1]
      let next = student[i + 1]

      if (prev >= 2) {
        //앞자리 친구가 여분이 있다면
        student[i - 1]--
        student[i]++
        continue
      } else if (next >= 2) {
        //뒷자리 친구가 여분이 있다면
        student[i + 1]--
        student[i]++
      }
    }
  }
  //console.log(student)
  return student.filter(e => e >= 1).length
}
