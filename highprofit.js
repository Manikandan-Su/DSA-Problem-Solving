

const shareValues = [2, 8, 4, 6, 7, 2, 32];

const getprofit = (shareValues) => {

    let minProfit = shareValues[0];
    let maxProfit = 0;
    for(let i = 0; i < shareValues.length; i++){
        minProfit = Math.min(minProfit, shareValues[i]);

        let profitValue = shareValues[i] - minProfit;
        maxProfit = Math.max(maxProfit, profitValue)
    };
    return maxProfit;
};;

console.log('profit', getprofit(shareValues));