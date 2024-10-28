function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);
  let maxCount = 0;

  function dfs(count, cur_p) {
    console.log(count);
    // 완료조건

    // 다음노드 탐색
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= cur_p) {
        // 아직 방문적이고 최소p를 만족하면
        visited[i] = true;
        dfs(count + 1, cur_p - dungeons[i][1]);
        visited[i] = false;
      }
    }
    maxCount = Math.max(maxCount, count);
  }
  dfs(0, k);
  console.log(maxCount);
}

//test1
// solution(80, [
//   [80, 20],
//   [50, 40],
//   [30, 10],
// ]);

//test2
solution(4, [
  [4, 3],
  [2, 2],
  [2, 2],
]);
