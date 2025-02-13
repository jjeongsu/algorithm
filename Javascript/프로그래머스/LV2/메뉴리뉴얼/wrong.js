function solution(orders, course) {
  var answer = [];

  const orderSetArr = orders.map((order) => new Set(order.split('')));
  const allIntersections = [];
  for (let i = 0; i < orderSetArr.length - 1; i++) {
    for (let j = i + 1; j < orderSetArr.length; j++) {
      const intersection = getIntersection(orderSetArr[i], orderSetArr[j]);
      console.log(intersection);
      if (intersection.size > 0) {
        allIntersections.push([...intersection].sort().join(''));
      }
    }
  }
  console.log(allIntersections);
  return [...new Set(answer)].sort();
}

function getIntersection(set1, set2) {
  const intersection = new Set();

  set1.forEach((order) => {
    if (set2.has(order)) {
      intersection.add(order);
    }
  });

  return intersection;
}

//solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]);
