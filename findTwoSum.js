const inputVal = [4, 8, 7, 9, 7];
const target = 11;

const findTwoSumValue = (inputArr, target) => {
    let output  = []
    for(let i = 0; i < inputArr.length; i++){
        for(let j = i; j < inputArr.length; j++){
            if(inputArr[i] + inputArr[j] === target){
                output.push(i, j);
                return output;
            }
        }
    };
};

console.log('findTwoSumValue', findTwoSumValue(inputVal, target));