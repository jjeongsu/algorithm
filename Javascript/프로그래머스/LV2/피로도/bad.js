function solution(k, dungeons) {
  // 던전을 빠져나온 후의 p를 계산한다.
  // dungeons[i]는 [최소 피로도, 피로도 감소량, 빠져나온후의 피로도(최솟값)]
  dungeons.forEach(d => {
    const after = d[0] - d[1]; // 던전을 빠져나온 후, 다음 던전을 들어가기 위한 최소한의 피로도
    d.push(after);
  });

  // dungeons[i]의 3번째 값(빠져나온후의 피로도)를 기준으로 내림차순 정렬을 한다.
  // sort는 원본 파괴 메서드
  dungeons.sort((a, b) => b[2] - a[2]);

  let count = 0; // 지나온 던전을 카운트
  let cur_p = k; // 현재 피로도를 저장
  let i = 0; // 던전배열 탐색
  while (i < dungeons.length) {
    console.log(i);
    // 현재 던전에 들어갈 수 있다면
    if (cur_p >= dungeons[i][0]) {
      count++;
      cur_p -= dungeons[i][1];
    }
    i++;
  }
  console.log(count);
}
solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);

/**
 * 그리디로 접근 -> 잘못된 방법
 * 다음과 같은 테스트케이스를 통과할 수 없다
 * k = 4
 * 던전 = [[4,3],[2,2],[2,2]]
 * expected = 2
 * result = 1
 */
