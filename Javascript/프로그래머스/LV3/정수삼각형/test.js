import solution from './solution.js';

describe('정수삼각형 문제 테스트', () => {
  test.each([[[[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]], 30]])(
    '올바른 max값을 리턴하는가?',
    (input, expected) => {
      expect(solution(input)).toBe(expected);
    },
  );
});
