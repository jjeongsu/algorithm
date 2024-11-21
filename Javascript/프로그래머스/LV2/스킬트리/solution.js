function solution(skill, skill_trees) {
  const set = new Set(skill.split(''));
  let count = 0;
  skill_trees.forEach((tree) => {
    const removed_Tree = tree
      .split('')
      .map((e) => (set.has(e) ? e : ''))
      .join(''); // 스킬이 아닌 값은 제거됨
    if (skill.indexOf(removed_Tree) === 0) {
      count += 1;
    }
  });
  return count;
}
export default solution;
