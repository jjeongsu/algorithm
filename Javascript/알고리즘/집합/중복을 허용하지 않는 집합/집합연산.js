const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// 교집합
const interesection = new Set([set1.filter(e => set2.has(e))]);

// 합집합
const union = new Set([...set1, ...set2]);

// 차집합
const difference = new Set([...set1].filter(el => !set2.has(value)));
