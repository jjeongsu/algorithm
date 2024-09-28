function permutation(선별배열, 잔여배열) {
  // 재귀함수 종료조건
  if (잔여배열.length === 0) {
    //더이상 재귀를 돌 잔여 아이템이 없을 때 = 하나의 순열이 완성되었을 때 만들어진 순열을 전체결과에 넣는다.
    return output.push(선별배열)
  }

  //잔여배열의 아이템을 하나씩 조회하며 선별 배열에 두고 재귀를 돈다.
  잔여배열.forEach((item, index) => {
    //현재 아이템을 제외한 나머지가 이후 재귀를 돌 잔여배열이 된다.
    const 새로운_잔여배열 = [
      ...잔여배열.slice(0, index),
      ...잔여배열.slice(index + 1),
    ]

    //기존의 선별배열에 아이템을 하나 추가하고 새로운 잔여배열로 순열을 마저 만든다.
    permutation([...선별배열, item], 새로운_잔여배열)
  })
}

const output = [] // 전체 모든 순열을 담은 배열
const 원본배열 = ['a', 'b', 'c', 'd', 'e']
permutation([], 원본배열)
console.log(output)
