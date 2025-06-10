const nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

let result = []

for (let i = 0; i < nums.length; i++){
    const getSized = nums.slice(i, i+k);
    if(getSized.length == k){
        let getMax = Math.max(...getSized);
        result.push(getMax)
    }
};

console.log('result', result)
