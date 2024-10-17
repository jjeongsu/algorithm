function solution(food) {
  let result = '';
  for (let i = 1; i < food.length; i++) {
    let repeat_count = ~~(food[i] / 2);
    let cur_food = food[i];
    result += i.toString().repeat(repeat_count);
  }
  return result + '0' + [...result].reverse().join('');
}
