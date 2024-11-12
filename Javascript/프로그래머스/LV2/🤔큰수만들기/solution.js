// 그리디
function solution(number, k) {
  // k는 제거할 숫자의 갯수, 최종 뽑아야할 숫자는 length - k
  let arr = number.split('').map(e => Number(e));
  let count = arr.length - k;
  let result = '';
  while (count > 0) {
    const search = arr.slice(0, arr.length - (count - 1));
    const max = Math.max(...search);
    const indexOfMax = arr.indexOf(max);
    count--;
    result += max;
    arr = arr.splice(indexOfMax + 1);
  }
  console.log(result);
}

//solution('1924', 2);
solution('1231234', 3);
solution('4177252841', 4);

/**
 * "1924"	2	"94"
 * "1231234"	3	"3234"
 * "4177252841"	4	"775841"
 */
