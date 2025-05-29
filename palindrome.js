/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numString = x.toString();
    const stringArrInput = numString.split('');

    let revString = []
    for(let i = stringArrInput.length -1; i >= 0; i--){
        revString.push(stringArrInput[i])
    };

    let revStringOp = revString.join('');
    revStringOp = parseInt(revStringOp);

    if(revStringOp === x){
        return true;
    } else {
        return false;
    }
};

const res = isPalindrome(121)
console.log('res', res)
