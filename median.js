let num1 = [1,2]
let num2 = [3, 4]

let mergedArr = [...num1, ...num2];
mergedArr = mergedArr.sort((a, b) => a - b);

let output;
if(mergedArr.length % 2 == 0){
    let medium = Math.floor(mergedArr.length / 2);
    output = (mergedArr[medium - 1] + mergedArr[medium]) / 2;
} else {
    let medium = Math.floor(mergedArr.length / 2);
    output = mergedArr[medium]
}

console.log('output', output)
