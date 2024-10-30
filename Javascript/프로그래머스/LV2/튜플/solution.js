function solution(s) {
  // JSON.parse : 문자열을 자바스크립트 객체로 바꿔줌
  const tuples = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(
    (a, b) => a.length - b.length
  );

  const currSet = new Set(); // 현재까지 발견한 원소를 저장
  const result = []; // 최종적으로 리턴할 배열

  for (let i of tuples) {
    // currSet와의 차집합을 구함
    const diff = i.filter(el => !currSet.has(el))[0];
    currSet.add(diff);
    result.push(diff);
  }
  //console.log(result);
  return result;
}
solution('{{2},{2,1},{2,1,3},{2,1,3,4}}');
solution('{{1,2,3},{2,1},{1,2,4,3},{2}}');
solution('{{20,111},{111}}');
