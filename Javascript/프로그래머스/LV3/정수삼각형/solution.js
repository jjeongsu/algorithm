function solution(tri) {
  for (let i = tri.length - 2; i >= 0; i--) {
    for (let j = 0; j < tri[i].length; j++) {
      tri[i][j] += Math.max(tri[i + 1][j], tri[i + 1][j + 1]);
    }
  }
  return tri[0][0];
}
export default solution;
