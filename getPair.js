const inputArr = [1,2,3,4,5,6,7,8,9, 10, 11];
const group = 2;
let outputArr = [];

let startIndex = 0;
let endIndex = group;

while (startIndex < inputArr.length){
    const getSpliced = inputArr.slice(startIndex, endIndex);
    startIndex = startIndex + group;
    endIndex = endIndex + group;
    outputArr.push(getSpliced);
};

console.log('outputArr', outputArr)