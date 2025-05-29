const inputVal = [4, 8, 7, 9, 7];
const target = 11;

const findTwoSumValue = (inputArr, target) => {
    let output = new Map();
    let getPair = [];
    for(let i = 0; i < inputArr.length; i++){
        let diff = target - inputArr[i];
        if(output.has(diff)){
            getPair.push(output.get(diff), inputArr[i]);
            break;
        }
        output.set(inputArr[i], i);
    };
    console.log('getPair', getPair)
};

console.log('findTwoSumValue', findTwoSumValue(inputVal, target));