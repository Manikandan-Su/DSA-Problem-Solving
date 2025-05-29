

const shareValues = [2, 8, 4, 6, 7, 2, 32];

const getprofit = (shareValues) => {
    let minProfit = shareValues[0];
    let highprofit = 0;
    for(let i = 0; i < shareValues.length; i++){
        minProfit = Math.min(minProfit, shareValues[i]);
        let diff = shareValues[i] - minProfit;
        highprofit = Math.max(highprofit, diff);
    };
    return highprofit;
};

console.log('profit', getprofit(shareValues));