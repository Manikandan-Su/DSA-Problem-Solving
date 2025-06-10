let temperatureInput = [73, 74, 75, 71, 69, 72, 76, 73]

function getWarmerWiatingDays(temparature){
    let output = []
    for (let i = 0; i < temparature.length; i++){
        let currentDay = temparature[i];
        let dayDiff = 0;
        for (let j = i+1; j < temparature.length; j++){
            if(currentDay < temparature[j]){
                dayDiff = j - i;
                break;
            }
        };
        output.push(dayDiff);
    };
    return output;

}

getWarmerWiatingDays(temperatureInput)