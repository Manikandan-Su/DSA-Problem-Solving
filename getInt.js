
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if(s.length == 1)  return s;
    if(s.split('').reverse().join('') == s) return s;
    const splittedArr = s.split('');

    let getSplittedArr = []
    for(let i = 0; i < splittedArr.length; i++){
        for (let j = i+1; j < splittedArr.length; j++){
            if(splittedArr[i] == splittedArr[j]){
                const splitted = splittedArr.slice(i, j + 1);
                getSplittedArr.push(splitted)
                break;
            } else if(splittedArr.length - 1 == j){
                if(splittedArr[i] == splittedArr[j]){
                    const splitted = splittedArr.slice(i);
                    getSplittedArr.push(splitted)
                }else{
                    const splitted = splittedArr.slice(i, j);
                    getSplittedArr.push(splitted)
                }
                
            }
        }
    };

    let output = [];
    let highest = 0;
    for(let i = 0; i < getSplittedArr.length; i++){
        const temp = getSplittedArr[i].join('');
        
        if(getSplittedArr[i].join('').length > highest && getSplittedArr[i].reverse().join('') === temp){
            output= [...getSplittedArr[i]];
            highest = getSplittedArr[i].length
        }
    }
    return output.join('');
};

longestPalindrome('xaabacxcabaaxcabaax')


// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.