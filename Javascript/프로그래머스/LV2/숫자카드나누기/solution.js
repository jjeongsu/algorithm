function solution(arrayA, arrayB) {
  const gcdA = arrayA.length === 1 ? arrayA[0] : getGCD(arrayA);
  const gcdB = arrayB.length === 1 ? arrayB[0] : getGCD(arrayB);

  let canUseGcdB = true;
  let canUseGcdA = true;

  // 각 최대공약수가 상대의 카드숫자를 나눌수 있는지 확인
  arrayA.forEach((number) => {
    if (number % gcdB === 0) {
      // 나누어 떨어진다면
      canUseGcdB = false;
    }
  });
  arrayB.forEach((number) => {
    if (number % gcdA === 0) {
      canUseGcdA = false;
    }
  });

  if (canUseGcdA && canUseGcdB) {
    return Math.max(gcdA, gcdB);
  } else if (canUseGcdA === true && canUseGcdB === false) {
    return gcdA;
  } else if (canUseGcdA === false && canUseGcdB === true) {
    return gcdB;
  } else {
    return 0;
  }
}

// 두 수의 최대공약수를 구하는 함수
function gcd(x, y) {
  let r; //나머지
  while (y !== 0) {
    r = x % y;
    x = y;
    y = r;
  }

  return x;
}

// 배열의 최대공약수를 구하는 함수
function getGCD(array) {
  let result;
  for (let i = 1; i < array.length; i++) {
    if (i === 1) {
      result = gcd(array[0], array[1]);
    } else {
      result = gcd(array[i], result);
    }
  }
  return result;
}

console.log(solution([10, 17], [5, 20])); //0
console.log(solution([10, 20], [5, 17])); //10
console.log(solution([14, 35, 119], [18, 30, 102])); //	7
