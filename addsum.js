/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let prevWord = '';
    let sampleText = strs[0]
    let currentWord = sampleText;

    let output = {}
    strs.forEach((word, strIndex) => {
        prevWord = currentWord;
        currentWord = word

        console.log('AAA', );
        const splittedWord = word.split('');
        console.log('splittedWord', splittedWord)
        let cache;
        let cacheVal;
        if(splittedWord){
            let allow =  true
            splittedWord.map((e, index) => {
                const indexVal = prevWord.indexOf(e);
                
                // const indexVal = prevWord.split(e, index).join(e).length;
                console.log('indexVal',index,  indexVal);
                if((allow && indexVal >= 0 && indexVal == index) || (strIndex != 0 && !cache == indexVal  && prevWord[index] == e ) ){
                    output = Object.assign({}, output, {[strIndex] : output?.[strIndex] ? output?.[strIndex].includes(indexVal) ? [...output?.[strIndex], index + 1] : [...output?.[strIndex], indexVal] : [indexVal] });
                    cache = indexVal;
                } else {
                    allow = false;
                    cache = false;
                }
            })
        }
    });

    console.log('output', output);
    let min = 0;

    const splitted = Object.values(output);
    console.log('splitted', splitted)
    output && splitted?.map((e, index) => {
        if(index == 0){
            min =  e.length;
        } else if(e.length < min) {
            min = e.length
        }

    });
    console.log('min', min)

    const outputText = output && Object.keys(output).length == strs.length ? sampleText.substring(0, min) : '';
    console.log('outputText', outputText);

    return outputText;
    
};

const res = longestCommonPrefix(["aa","aa"]
)