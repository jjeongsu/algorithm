const output = []
const combination = (comb, rests, choice_num) => {
  if (comb.length === choice_num) {
    output.push(comb)
  }

  rests.forEach((v, idx) => {
    // const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
    const rest = rests.slice(idx + 1)
    combination([...comb, v], rest, choice_num)
  })
}

combination([], ['a', 'b', 'c', 'd'], 2)
console.log(output)
