function solution(my_string, overwrite_string, s) {
  var answer = ''
  const length = overwrite_string.length
  const result =
    my_string.slice(0, s) + overwrite_string + my_string.slice(s + length)
  console.log(result)
  return result
}
