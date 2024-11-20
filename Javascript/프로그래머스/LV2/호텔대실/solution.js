function solution(book_time) {
  let result = [];

  // bookTime 을 시간으로 바꾸기
  const sorted = book_time
    .map((reserve) => [strToTime(reserve[0]), strToTime(reserve[1]) + 10])
    .sort((a, b) => a[0] - b[0]); // * 시작 시간 기준 오름차순 정렬

  sorted.forEach((reserve, idx) => {
    const start = reserve[0];
    const end = reserve[1];
    let reserved = false;

    result = result.sort((a, b) => a.next - b.next);

    if (idx >= 1) {
      for (let room of result) {
        if (start >= room.next) {
          room.next = end;
          reserved = true;
          break;
        }
      }
    }

    // 현재 방 중 예약 가능한 방이 없으면 신규 방 추가
    if (!reserved) {
      result.push({
        next: end,
      });
    }
  });
  return result.length;
}

// HH:MM 문자열을 분으로 전환한다.
function strToTime(string) {
  const [hour, minute] = string.split(':').map(Number);
  return hour * 60 + minute;
}
