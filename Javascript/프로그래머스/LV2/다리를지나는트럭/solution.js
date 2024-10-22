function solution(length, weight, truck_weights) {
  let time = 0;
  let cur_weight = 0; // 다리위에 있는 차의 모든 무게
  let q = []; // 다리를 큐로 구현

  // 첫번째 차는 넣고 시작
  let first_car = truck_weights.shift();
  cur_weight += first_car;
  q.push([first_car, time + length]); // [차 무게, 차가 다리를 빠져나올 시간]을 넣어줌
  time++;

  while (q.length > 0 || truck_weights.length > 0) {
    // 다리에서 차 빼기
    if (q[0][1] === time) {
      let [outCar_w, outCar_t] = q.shift();
      cur_weight -= outCar_w;
    }

    let car = truck_weights[0];
    if (car + cur_weight <= weight) {
      // 현재 새로운 차가 다리에 올라갈 수 있다면
      truck_weights.shift();
      cur_weight += car;
      q.push([car, time + length]);
    }
    time++;
  }
  return time;
}
solution(2, 10, [7, 4, 5, 6]);
