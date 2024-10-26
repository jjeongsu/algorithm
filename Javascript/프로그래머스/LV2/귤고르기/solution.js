function solution(k, tangerine) {
  const obj = {};
  for (let item of tangerine) {
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }

  //value값을 기준으로 내림차순
  let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  let result = 0;
  let count = k;
  for (let i = 0; i < sortedObj.length; i++) {
    if (count <= 0) break;
    count = count - sortedObj[i][1];
    result++;
  }

  return result;
}
