let stockPrices = [100, 80, 60, 70, 60, 75, 85]
// Output: [1,   1,  1,  2,  1,  4,  6]

let output = []

for (let i = 0; i < stockPrices.length; i++){

    let currentDayPrice = stockPrices[i];
    let dayDiff = 1;
    
    for(let j = 0; j <= i; j++){
        if(stockPrices[j] < currentDayPrice){
            dayDiff++;
        }
    };
    output.push(dayDiff);
};

console.log('output', output)