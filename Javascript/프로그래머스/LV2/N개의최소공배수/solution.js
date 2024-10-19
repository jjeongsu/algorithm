function solution(arr) {
  //n개의 숫자를 담은 배열 Arr
  let i = 1;
  let a = arr[0]; // 이전의 최소공배수
  while (i < arr.length) {
    let b = arr[i];
    a = lem(a, b); //a와 b의 최소공배수를 구해서 업데이트
    i++;
  }
  return a;
}

//a,b의 최대공약수를 구하는 함수
function gcd(a, b) {
  let r; // 나머지
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

//a,b의 최소공배수를 구하는 함수
const lem = (a, b) => (a * b) / gcd(a, b);

solution([2, 6, 8, 14]);
