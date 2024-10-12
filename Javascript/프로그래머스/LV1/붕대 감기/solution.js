function solution(bandage, health, attack) {
  let [최대체력회복시간, 체력회복, 추가체력] = [...bandage];
  const 최대체력 = health;
  let t = 0; // 현재 시간
  let 체력 = 최대체력;
  let 공격 = 0; // attack의 Index
  let 연속성공 = 0;
  const last = attack.length - 1;
  while (체력 > 0 && t <= attack[last][0]) {
    if (t == attack[공격][0]) {
      // 1. 공격시간일 때
      // 체력을 깎고 연속성공을 초기화
      체력 = 체력 - attack[공격][1];
      연속성공 = 0;
      공격++;
    } else {
      // 2. 체력회복 시간일 때
      if (체력 === health) {
        // 2-1. 현재 체력이 max
        연속성공 = 1; // 연속성공을 초기화
      } else {
        //2.2 max가 아니라면 체력을 회복
        체력 = 체력 + 체력회복 >= 최대체력 ? 최대체력 : 체력 + 체력회복;
        연속성공++;
        // 이후 추가 체력을 회복할 수 있는 타이밍이면
        if (연속성공 === 최대체력회복시간) {
          체력 = 체력 + 추가체력 >= 최대체력 ? 최대체력 : 체력 + 추가체력;
          연속성공 = 0;
        }
      }
    }
    if (체력 <= 0) {
      // 공격도중 죽으면 다시 살아날수 없다.
      return -1;
    }
    console.log(t, 체력, 연속성공);
    t++;
  }
  return 체력;
}
console.log('testcase 1: 기대결과 18');
console.log(
  solution([5, 3, 2], 30, [
    [1, 1],
    [4, 12],
  ])
);
