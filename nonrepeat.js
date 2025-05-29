const inputArr = [9, 4, 6, 7, 4];

let accurance = new Map()
inputArr.forEach((item) => {
    accurance.set(item, (accurance.get(item) || 0) + 1)
});
let output;

accurance.forEach((values, key) => {
    if(accurance.get(key) == 1){
        output = key;
        return;
    }
})
console.log('output', output)

