function solution(players, callings) {
  //player의 인덱스를 미리 저장
  const map = new Map();
  players.forEach((name, index) => {
    map.set(name, index);
  });

  callings.forEach(name => {
    const curr_index = map.get(name); // 현재 플레이어의 인덱스
    const front = players[curr_index - 1]; // 현재 플레이어보다 1칸 앞에있는 플레이어의 이름

    //위치 변경하기
    [players[curr_index], players[curr_index - 1]] = [
      players[curr_index - 1],
      players[curr_index],
    ];

    // 바뀐 인덱스 업데이트 하기
    map.set(name, map.get(name) - 1);
    map.set(front, map.get(front) + 1);
  });
  return players;
}

solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']);

/**
 * 1차 시도 : 시간초과 오류
 * 이유 : callings배열의 요소를 한번씩은 모두 탐색해야 하므로 최대 10*6,
 * 한번씩 탐색할 때 마다 내부에서 요소의 (Player배열의) Index를 찾는 과정이 최대 O(N)의 시간 복잡도를 가진다 -> 10^4
 * (이전에는 indexOf 매서드 사용했었음)
 *
 * 해결 : index를 미리 저장해서  O(1)로 접근 가능하도록 한다. 배열의 인덱스 바뀔 때마다 갱신해준다.
 * (Map자료구조 활용한다.)
 */
