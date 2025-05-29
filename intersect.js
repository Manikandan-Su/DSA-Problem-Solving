const inputA = [1, 2, 3];
const inputB = [2, 3, 4];


const intersect = inputA.filter((e) => inputB.includes(e));
console.log('intersect', intersect);
