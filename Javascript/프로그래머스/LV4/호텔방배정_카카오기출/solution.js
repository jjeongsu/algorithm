function solution(k, room_number) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < room_number.length; i++) {
    result.push(find(room_number[i], map));
  }
  return result;
}

function find(wanted, map) {
  if (map.has(wanted) === false) {
    map.set(wanted, wanted + 1);
    return wanted;
  }

  // 만약 원하는 방이 차있다면
  const root = find(map.get(wanted), map);
  map.set(wanted, root + 1);
  return root;
}
