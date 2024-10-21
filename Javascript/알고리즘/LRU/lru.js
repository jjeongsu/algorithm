/**
 * 캐시를 확인하면서, 오랫동안 사용되지 않은 페이지(데이터)를 삭제하고 최근에 사용된 페이지를 추가한다.
 *
 * getRuntimeWithLRU : LRU 페이지 교체 알고리즘을 실행할 때 총 실행시간을 구하는 함수
 *
 * @param {string} PAGE_LIST 적재할 페이지를 나열한 문자열
 * @param {number} MEMORY_SIZE 메모리의 크기
 * @param {Object} RUNTIME_INFO hit와 miss 일 때의 실행시간이 담긴 객체
 * @returns {number} runTime 총 실행시간
 */
function getRuntimeWithLRU(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO) {
  const { HIT, MISS } = RUNTIME_INFO;
  let memory = [];
  let leastUsedList = []; // 오랫동안 사용되지 않은 페이지가 순서대로 담긴 리스트
  let runTime = 0;

  for (const Page of PAGE_LIST) {
    // 들어온 페이지가 사용빈도 순서로 담긴 리스트에 이미 페이지가 있아면
    if (leastUsedList.includes(Page)) {
      const pageIdx = leatUsedList.indexOf(Page);
      // 해당 페이지가 있는 곳을 비우고
      leastUsedList.splice(pageIdx, 1);
    }
    // 맨 뒤에 넣어줌
    leastUsedList.push(Page);

    // page가 메모리에 있다면 -> HIT
    if (memory.includes(Page)) runTime += HIT;
    else {
      // page가 메모리에 없다면 -> MISS
      if (memory.length === MEMORY_SIZE) {
        // 메모리가 꽉찬 경우
        // 사용빈도 순서로 담긴 페이지 리스트의 맨앞(적은 사용빈도)의 페이지를
        const LRU_PAGE = leastUsedList.shift();
        // 메모리에서 찾아서
        const LRU_PAGE_INDEX = memory.indexOf(LRU_PAGE);
        // 메모리를 교체해줌
        memory.splice(LRU_PAGE_INDEX, 1, Page);
      } else {
        // 메모리가 여유있으면 그냥 page를 메모리에 저장
        memory.push(Page);
      }
      runTime += MISS;
    }
  }
  return runTime;
}
function solution() {
  const PAGE_LIST = 'BCBAEBCE';
  const MEMORY_SIZE = 3;
  const RUNTIME_INFO = {
    HIT: 1,
    MISS: 6,
  };
  const result = getRuntimeWithLRU(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO);
}
