var longestPalindrome = function (s) {
    let strArr = s.split("");
    if(strArr.length < 2) return s;
    
    let start = 0, end = 0;

    function expandLetter(left, right){
        while(left >= 0 && right < strArr.length && strArr[left] === strArr[right]){
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < strArr.length; i++){

        let [start1, end1] = expandLetter(i, i);
        let [start2, end2] = expandLetter(i, i + 1);

        if(end1 - start1 > end - start){
            start = start1;
            end = end1;
        }
        if(end2 - start2 > end - start){
            start = start2;
            end = end2;
        }
    }
    return strArr.splice(start, end + 1).join('');
}

const result = longestPalindrome("ccc");
console.log('result', result)

