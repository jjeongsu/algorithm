function solution(record) {
  const User = {};
  const result = [];
  record.forEach(elem => {
    const order = elem.split(' ');
    if (order[0] === 'Enter') {
      result.push(`${order[1]}님이 들어왔습니다.`);
      User[order[1]] = order[2];
    } else if (order[0] === 'Leave') {
      result.push(`${order[1]}님이 나갔습니다.`);
    } else {
      User[order[1]] = order[2];
    }
  });

  return result.map(elem => {
    const end = elem.indexOf('님');
    const uid = elem.slice(0, end);

    return elem.replace(uid, User[uid]);
  });
}
solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);
