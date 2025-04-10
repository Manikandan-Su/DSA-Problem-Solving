/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let splitedText = x.toString().split('');
    console.log("splittedText",splitedText);

    let revOutput = [];
    let symbol;

    for(let i = splitedText.length - 1; i >= 0; i--){
        console.log('Item', splitedText[i]);

        if(splitedText[i] == '-'){
            symbol = splitedText[i]
        }

        if(i == 0 && splitedText[i] == 0 && splitedText.length != 1){
            return;
        } else{
            revOutput = [...revOutput, splitedText[i]]
        }
    };

    console.log('revOutput', revOutput);

    const filtered = revOutput && revOutput.filter((e) => e != '-');
    console.log('filtered', filtered);

    let reversedNum;

    console.log('symbol', symbol)
    let numConversion = parseInt(filtered.join(""));
    if(symbol){
        reversedNum = 0 - numConversion;
        console.log("RRR", reversedNum)
        if(reversedNum <= -2147483648){
            reversedNum = 0
        } else reversedNum;
    } else{
        if(numConversion >= 2147483647){
            reversedNum = 0
        } else reversedNum = numConversion
    }

    console.log('reversedNum', reversedNum);
    return reversedNum;

    
    
};

const res = reverse(1563847412)