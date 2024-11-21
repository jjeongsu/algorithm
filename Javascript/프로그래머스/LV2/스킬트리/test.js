import solution from './solution.js';

// describe('LV2 스킬트리 문제 테스트', () => {
//   test.each([['CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'], 2]])(
//     '가능한 스킬트리의 갯수를 올바르게 리턴하는가?',
//     (skill, skill_trees, expected) => {
//       expect(solution(skill, skill_trees)).toBe(expected);
//     },
//   );
// });

describe('LV2 스킬트리 문제 테스트', () => {
  test.each([['CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'], 2]])(
    '가능한 스킬트리의 갯수를 올바르게 리턴하는가?',
    (skill, skill_trees, expected) => {
      expect(solution(skill, skill_trees)).toBe(expected);
    },
  );
});
