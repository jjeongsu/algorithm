function solution(fees, records) {
  //기본 시간(분)	기본 요금(원)	단위 시간(분)	단위 요금(원)
  const DEFAULT_TIME = fees[0];
  const DEFAULT_FEE = fees[1];
  const UNIT_TIME = fees[2];
  const UNIT_FEE = fees[3];

  // records : ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]
  const recordArr = records.map(record => {
    const [time, number, status] = record.split(' ');
    return {
      TIME: time,
      CAR_NUMBER: number,
      STATUS: status,
    };
  });

  // 차의 입출차기록, 누적시간을 저장
  const cars = {};
  recordArr.forEach(record => {
    // 새로운 차량일때
    if (cars[record.CAR_NUMBER] === undefined) {
      // 입출차정보를 등록한다.
      cars[record.CAR_NUMBER] = {
        //INDEX: Object.keys(cars).length + 1, //NOTE : obejct의 길이를 얻는 방법
        STATUS: record.STATUS,
        IN_TIME: record.TIME,
        TOTAL_TIME: 0,
      };
    } else {
      // 기존 등록되어있던 차량일때
      if (record.STATUS === 'OUT') {
        // 출차할때
        // 추가될 시간 계산
        const 이전입차시간 = cars[record.CAR_NUMBER].IN_TIME;
        const 출차시간 = record.TIME;
        const 시간차 = calculateTimeGap(이전입차시간, 출차시간);
        const 이전누적시간 = cars[record.CAR_NUMBER].TOTAL_TIME;
        cars[record.CAR_NUMBER] = {
          ...cars[record.CAR_NUMBER],
          STATUS: 'OUT',
          TOTAL_TIME: 이전누적시간 + 시간차,
        };
      } else if (record.STATUS === 'IN') {
        // 입차할때
        cars[record.CAR_NUMBER] = {
          ...cars[record.CAR_NUMBER],
          STATUS: 'IN',
          IN_TIME: record.TIME,
        };
      }
    }
  });

  // 아직 출차가 안된 차량이 있다면 23:59분에 출차된것으로 가정
  for (let CAR_NUMBER in cars) {
    //NOTE : object의 순회
    if (cars[CAR_NUMBER].STATUS === 'IN') {
      const 추가시간 = calculateTimeGap(cars[CAR_NUMBER].IN_TIME, '23:59');
      cars[CAR_NUMBER] = {
        ...cars[CAR_NUMBER],
        TOTAL_TIME: cars[CAR_NUMBER].TOTAL_TIME + 추가시간,
      };
    }
  }

  const result = [];
  for (let CAR_NUMBER in cars) {
    // 누적 시간 > 기본시간
    if (cars[CAR_NUMBER].TOTAL_TIME > DEFAULT_TIME) {
      const 주차요금 =
        DEFAULT_FEE +
        Math.ceil((cars[CAR_NUMBER].TOTAL_TIME - DEFAULT_TIME) / UNIT_TIME) *
          UNIT_FEE;
      result.push([CAR_NUMBER, 주차요금]);
    } else {
      // 기본 시간을 초과하지 않으면 기본 요금만 내기
      result.push([CAR_NUMBER, DEFAULT_FEE]);
    }
  }
  return result.sort((a, b) => Number(a[0]) - Number(b[0])).map(e => e[1]);
}

function calculateTimeGap(startTime, endTime) {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);
  // 시간 차이를 밀리초로 계산
  const differenceInMillis = end - start;
  // 밀리초를 분으로 변환
  const differenceInMinutes = Math.floor(differenceInMillis / 1000 / 60);
  return differenceInMinutes;
}

solution(
  [120, 0, 60, 591],
  [
    '16:00 3961 IN',
    '16:00 0202 IN',
    '18:00 3961 OUT',
    '18:00 0202 OUT',
    '23:58 3961 IN',
  ]
);
