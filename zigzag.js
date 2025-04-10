/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(inputArr, words) {

    let temp = []
    let tempStr = words;
    let run = true;
    while (run){
        inputArr.map((word, index) => {
            const a = tempStr.indexOf(word);
            console.log('AAA', a)
            if(a == 0 && !temp.includes(word)){
                temp.push(word); 
                tempStr = tempStr.substring(word.length + a);
                console.log('tempStr',tempStr)
            }
            else{     
                run = false;
                return;
            }
        });
    }
    console.log("ooo", temp) 
};

const res = findSubstring(["bar","foo","the"], 'barfoofoobarthefoobarman')
