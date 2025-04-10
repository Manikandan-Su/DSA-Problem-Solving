let inputArr = [64, 34, 25, 5, 22, 11, 90, 12];


for (let i = 0; i < inputArr.length; i++){
    let minIndex = i;
    for (let j = i+1; j < inputArr.length; j++){
        if(inputArr[j] < inputArr[minIndex]){
            minIndex = j
        }
    }
    let minValue = inputArr[minIndex];
    inputArr.splice(minIndex, 1);
    inputArr.splice(i, 0, minValue)
};

console.log('inputArr', inputArr)