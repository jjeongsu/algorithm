const output = []
function permutation(prev, rest) {
  //재귀함수 종료조건
  if (rest.length === 0) {
    output.push(prev)
  }

  // rest배열을 돌면서 아이템을 하나씩 선별배열에 추가하기
  rest.forEach((item, idx) => {
    //const new_rest = [  idx 이전, idx이후 ]
    const new_rest = [...rest.slice(0, idx), ...rest.slice(idx + 1)]
    permutation([...prev, item], new_rest)
  })
}

permutation([], [1, 2, 3, 4])
console.log(output)
