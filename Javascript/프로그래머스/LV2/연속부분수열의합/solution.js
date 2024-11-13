/**
 * @param {number[]} sequence 수열
 * @param {number} k 만족해야 하는 부분수열의 합
 */

function solution(sequence, k) {
  const result = []; //k를 만들수 있는 모든 경우
  let curr = sequence[0];
  let start = 0,
    end = 0;
  while (start <= end && end < sequence.length) {
    if (curr < k) {
      // 현재 값이 작다면 오른쪽 한칸 늘리기
      end++;
      curr += sequence[end];
    } else if (curr > k) {
      // 현재 값이 크다면 왼쪽 한칸 줄이기
      curr -= sequence[start];
      start++;
    } else if (curr === k) {
      // 현재값이 목표값과 일치한다면 결과배열에 저장 후, 오른쪽 전진
      result.push([start, end]);
      end++;
      curr += sequence[end];
    }
  }

  if (result.length === 1) {
    // 만족하는 경우가 1가지일경우 early return
    return result[0];
  } else {
    // result 배열에서 1.짧은 수열, 2. 앞쪽 수열 기준으로 정렬해서 리턴
    result.sort((a, b) => {
      const lengthCompare = a[1] - a[0] - (b[1] - b[0]);
      return lengthCompare === 0 ? a[0] - b[0] : lengthCompare;
    });
  }
  return result[0];
}

solution([1, 2, 3, 4, 5], 7);
solution([1, 1, 1, 2, 3, 4, 5], 5);
