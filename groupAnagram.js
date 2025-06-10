let inputArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let seen = new Map();
let finalOutput = []

for (let i = 0; i < inputArr.length; i++){
    const current = inputArr[i].split("").sort().join("");
    if(!seen.has(current)){
        seen.set(current, [])
    }
    seen.get(current).push(inputArr[i])
};

seen.forEach(value => finalOutput.push(value))
console.log('finalOutput', finalOutput)