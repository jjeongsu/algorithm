function solution(cacheSize, cities) {
  const runtimeInfo = {
    HIT: 1,
    MISS: 5,
  };
  return getRuntimeWithLRU(cities, cacheSize, runtimeInfo);
}
function getRuntimeWithLRU(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO) {
  const { HIT, MISS } = RUNTIME_INFO;
  let memory = [];
  let leastUsedList = [];
  let runTime = 0;
  for (const page of PAGE_LIST) {
    const Page = page.toLowerCase();
    if (leastUsedList.includes(Page)) {
      const pageIdx = leastUsedList.indexOf(Page);
      leastUsedList.splice(pageIdx, 1);
    }
    leastUsedList.push(Page);

    if (MEMORY_SIZE === 0) {
      runTime += MISS;
      continue;
    }

    if (memory.includes(Page)) runTime += HIT;
    else {
      if (memory.length === MEMORY_SIZE) {
        const LRU_PAGE = leastUsedList.shift();
        const LRU_PAGE_INDEX = memory.indexOf(LRU_PAGE);
        memory.splice(LRU_PAGE_INDEX, 1, Page);
      } else {
        memory.push(Page);
      }
      runTime += MISS;
    }
  }
  return runTime;
}
