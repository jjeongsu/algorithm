import solution from './solution.js';

describe('프로그래머드 배달(다익스트라) 문제 테스트', () => {
  test.each([
    [
      5,
      [
        [1, 2, 1],
        [2, 3, 3],
        [5, 2, 2],
        [1, 4, 2],
        [5, 3, 1],
        [5, 4, 2],
      ],
      3,
      4,
    ],
    [
      6,
      [
        [1, 2, 1],
        [1, 3, 2],
        [2, 3, 2],
        [3, 4, 3],
        [3, 5, 2],
        [3, 5, 3],
        [5, 6, 1],
      ],
      4,
      4,
    ],
  ])('올바른 결과를 리턴하는가?', (N, road, K, expected) => {
    expect(solution(N, road, K)).toBe(expected);
  });
});
