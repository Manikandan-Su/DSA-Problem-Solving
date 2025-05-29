const inpArr = [1, "a", 2, "b", true, "c"];

let output = {}
for (let i = 0; i < inpArr.length; i++){
    const type = typeof(inpArr[i]);
    let exist = output[type] || []
    output[type] = [...exist, inpArr[i]];
};
console.log('output', output)