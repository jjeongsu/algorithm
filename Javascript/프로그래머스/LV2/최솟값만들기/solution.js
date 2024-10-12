function solution(A, B) {
  const arr_A = A.sort((a, b) => a - b); // 오름차순 정렬
  const arr_B = B.sort((a, b) => b - a); // 내림차순 정렬
  console.log(arr_A, arr_B);
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += arr_A[i] * arr_B[i];
  }
  return sum;
}
solution([1, 4, 2], [5, 4, 4]);

function betterSolution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, value, index) => total + value * B[index], 0);
}
