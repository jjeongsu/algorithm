function solution(video_len, pos, op_start, op_end, commands) {
  let position = pos;
     if (compareTimeline(position, video_len) === position) {
      position = video_len;
    } else if (
      compareTimeline(position, op_start) === position &&
      compareTimeline(position, op_end) === op_end
    ) {
      // 오프닝 중이라면
      position = op_end;
    }
  commands.forEach(command => {
    if (command === 'next') {
      position = next(position);
    } else if (command === 'prev') {
      position = prev(position);
    }
      

    // position이 영상의 끝보다 넘어갈 경우
    if (compareTimeline(position, video_len) === position) {
      position = video_len;
    } else if (
      compareTimeline(position, op_start) === position &&
      compareTimeline(position, op_end) === op_end
    ) {
      // 오프닝 중이라면
      position = op_end;
    }
      
    
  });
    return position
}
}
function next(cur_time) {
  // 현재 시간으로 부터 10초 뒤의 시간을 반환한다.
  const [cur_min, cur_sec] = cur_time.split(':');
  let temp_sec = Number(cur_sec) + 10;
  let next_min = Number(cur_min) + ~~(temp_sec / 60);
  let next_sec = temp_sec % 60;
  const minute = String(next_min).padStart(2, '0');
  const second = String(next_sec).padStart(2, '0');
  return `${minute}:${second}`;
}

function prev(cur_time) {
  // 현재 시간으로 부터 10초 전의 시간을 반환한다.
  const [cur_min, cur_sec] = cur_time.split(':');
  let temp_sec = Number(cur_sec) - 10;
  let next_min = Number(cur_min);
  let next_sec = Number(cur_sec);

  if (next_min == 0 && next_sec < 10) {
    return '00:00';
  }

  if (temp_sec < 0) {
    next_min -= 1;
    next_sec = 60 + temp_sec;
  } else {
    next_sec = temp_sec;
  }
  return `${String(next_min).padStart(2, '0')}:${String(next_sec).padStart(
    2,
    '0'
  )}`;
}

function compareTimeline(timeA, timeB) {
  // 두개의 타임라인 중 더 뒤에 잇는 타임라인을 반환
  const [a_minute, a_second] = timeA.split(':');
  const [b_minute, b_second] = timeB.split(':');
  if (Number(a_minute) > Number(b_minute)) {
    return timeA;
  } else if (Number(a_minute) < Number(b_minute)) {
    return timeB;
  } else {
    return Number(a_second) > Number(b_second) ? timeA : timeB;
  }
}

solution('34:33', '13:00', '00:55', '02:55', ['next', 'prev']);
solution('10:55', '00:05', '00:15', '06:55', ['prev', 'next', 'next']);
