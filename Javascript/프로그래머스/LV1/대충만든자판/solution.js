function solution(keymap, targets) {
  const result = targets.map(단어 => {
    let count = 0 //단어를 만들기 위해 키를 몇번 눌러야 하는지, map의 최종리턴값
    for (let 현재알파벳 of 단어) {
      let flag = false // 자판들로 단어를 만들수 있는지 확인
      let minIndex = 200 //자판에서 가장 빨리 알파벳을 칠 수 있는 인덱스
      for (let 자판 of keymap) {
        let cur_index = 자판.indexOf(현재알파벳) // 현재 알파벳이 발견되는 인덱스 번호 찾기
        if (cur_index == -1) {
          continue
        } // 자판에서 알파벳을 찾을 수 없으면 이번 자판은 쓰루
        else {
          flag = true // 자판에서 알파벳을 찾을 수 있으면 성공
          minIndex = Math.min(minIndex, cur_index + 1) // 최소 인덱스 번호로 업데이트
        }
      }
      if (!flag) {
        //flag가 false면 자판을 찾을 수 없다.
        count = -1 // 이번 단어는 만들 수 없음
        break
      } else {
        count += minIndex
      }
    }
    return count
  })
  return result
}
