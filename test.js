let inputArr = [4, 5, 7, 2, 3];

let output = []
inputArr.forEach((item) => {
    output.unshift(item)
})

console.log('output', output)